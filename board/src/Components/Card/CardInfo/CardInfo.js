import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  X,
} from "react-feather";

import Modal from "../../Modal/Modal";
import Editable from "../../Editabled/Editable";

import "./CardInfo.css";
import db from "../../../firebase";
import { doc, updateDoc, collection, query, where, getDocs, arrayUnion } from "firebase/firestore";

function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [selectedColor, setSelectedColor] = useState();
  const [values, setValues] = useState({
    ...props.card,
  });


  const updateTitle = (value) => {
    setValues({ ...values, title: value });
    const CardsDB = doc(db, "cards", values.id);
    updateDoc(CardsDB, {
      title: value
    });
  };


  const updateDesc = (value) => {
    let cardId = values.id;
    const CardsDB = doc(db, "cards", cardId);
    updateDoc(CardsDB, {
      description: value
    });
    setValues({ ...values, description: value });
  };

  const addLabel = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    console.log("here")
    const CardsDB = doc(db, "cards", values.id);
    updateDoc(CardsDB, {
      tasks: arrayUnion(value)
    });
    setValues({
      ...values,
      tasks: [...values.tasks, value],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];
    console.log(id);
    console.log(values.id);

    tasks.splice(id, 1);
    console.log(values.tasks);
    const CardsDB = doc(db, "cards", values.id);
    updateDoc(CardsDB, {
      tasks: tasks
    });
    setValues({ ...values, tasks, });
  };

  const updateDate = (date) => {
    if (!date) return;
    const CardsDB = doc(db, "cards", values.id);
    updateDoc(CardsDB, {
      date: date
    });
    setValues({
      ...values,
      date,
    });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            <p>Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <label
                key={index}
                style={{ backgroundColor: item.color, color: "#fff" }}
              >
                {item.text}
                <X onClick={() => removeLabel(item)} />
              </label>
            ))}
          </div>
          <ul>
            {colors.map((item, index) => (
              <li
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li_active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <Editable
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            <p>Tasks</p>
          </div>

          <div className="cardinfo_box_task_list">
            {values.tasks?.map((item, index) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">

                <p className={item.completed ? "completed" : ""}>{item}</p>
                <Trash onClick={() => removeTask(index)} />
              </div>
            ))}
          </div>
          <Editable
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
