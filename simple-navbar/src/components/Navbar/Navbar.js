import React from "react";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* Logo part */}
        <div className="logo">
          <h2>
            <span>R</span>SB
            <span>T</span>ech
          </h2>
        </div>

        {/* menu link part */}

        <div className="menu-link">
          <ul>
            <li>
              <a href="https://ramakant-bawane.netlify.app/">Home</a>
            </li>
            <li>
              <a href="https://ramakant-bawane.netlify.app/">Services</a>
            </li>
            <li>
              <a href="https://ramakant-bawane.netlify.app/">About</a>
            </li>
            <li>
              <a href="https://ramakant-bawane.netlify.app/">Contact</a>
            </li>
          </ul>
        </div>
        {/* social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a className= "facebook" href="https://ramakant-bawane.netlify.app/" target ="_blank" rel="noreferrer"><BsFacebook/></a>
            </li>
            <li>
              <a className= "instagram" href="https://ramakant-bawane.netlify.app/" target ="_blank" rel="noreferrer" ><BsInstagram/></a>
            </li>
            <li>
              <a className= "youtube" href="https://ramakant-bawane.netlify.app/" target ="_blank" rel="noreferrer"><BsYoutube/></a>
            </li>
          </ul>
        </div>
      </nav>
      
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>RSB Tech</h1>
      </section>

    </>
  )
};

export default Navbar;
