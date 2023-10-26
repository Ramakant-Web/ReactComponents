import React from "react";
import "./Card.css";
import avatar from "./avatar.png"

const Card = () => {
  return (
    <>
     <h1 class="about">About Us</h1>

     <div class="cards">
      <section className="card"> 
      <div class="container">
        <img src={avatar} alt="Avatar" height={250}/>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </section>

      <section className="card"> 
      <div class="container">
        <img src={avatar} alt="Avatar" height={250}/>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </section>

      <section className="card"> 
      <div class="container">
        <img src={avatar} alt="Avatar" height={250}/>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </section>

      <section className="card"> 
      <div class="container">
        <img src={avatar} alt="Avatar" height={250}/>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </section>

     </div>
    </>
  );
};

export default Card;
