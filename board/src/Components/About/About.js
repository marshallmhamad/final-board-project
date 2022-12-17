// import React, { useState } from "react";

// import Card from "../Card/Card";
// import Dropdown from "../Dropdown/Dropdown";
// import Editable from "../Editabled/Editable";
// import { MoreHorizontal } from "react-feather";
import "./About.css";
import pic from './images/mem1.png'
import pic2 from './images/mem2.png'
import pic3 from './images/mem3.png'
import pic4 from './images/mem4.jpg'

function About() {
  return (

    <div>
      <div id="header">
        <h1>Our Team</h1>
      </div>

      <div className="row">

        {/* <!-- Column 1--> */}
        <div className="column">

          <div className="cardAbout">
            <div class="img-container">
              <img src={pic} alt="team member " />
            </div>
            <h3>Mhamad Marshal</h3>
            <p>Developer</p>
          </div>
        </div>
        {/* <!-- Column 2--> */}
        <div className="column">
          <div class="cardAbout">
            <div class="img-container">
              <img src={pic2} alt="team member" />
            </div>
            <h3>Amal Salah</h3>
            <p>Developer</p>

          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div className="column">
          <div class="cardAbout">
            <div class="img-container">
              <img src={pic3} alt="team member " />
            </div>
            <h3>Nisreen Hamzah</h3>
            <p>Developer</p>
          </div>
        </div>

        <div className="column">
          <div class="cardAbout">
            <div class="img-container">
              <img src={pic4} alt="team member " />
            </div>
            <h3>Ali Ibrahim </h3>
            <p>Developer</p>
          </div>
        </div>
      </div>


    </div>
    //     <div className="about_container">
    //       <div className="about">
    //         <p>Kanban Board is a tool for workflow visualization, designed to help you bring clarity to your work process and enhance efficiency by limiting work in progress. </p>
    //         <div className=" about_team">
    //           <h2 className=" TeamTitle">Team</h2>
    //           <ul className=" teamMember">
    //             <li className="team">mhamad marshall</li>
    //             <li className="team">Nisreen Hamzah</li>
    //             <li className="team">Ali Jasim</li>
    //             <li className="team">Amal Salah</li>
    //           </ul>
    //         </div>
    //       </div>

    //     </div>
  );
}

export default About;
