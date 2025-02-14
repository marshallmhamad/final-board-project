import React, { useState } from "react";

// import Card from "../Card/Card";
// import Dropdown from "../Dropdown/Dropdown";
// import Editable from "../Editabled/Editable";
// import { MoreHorizontal } from "react-feather";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "./Contact.css";

function Contact(props) {
  const [formStatus, setFormStatus] = useState('send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3" >Contact us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
}

export default Contact;
