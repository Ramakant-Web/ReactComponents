import React, { useState } from "react";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
import "./Navbar.css";

const Navbar = () => {
  const[showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* Logo part */}
        <div className="logo" >
          <a href="https://ramakant-bawane.netlify.app/"><img src="/logo.png" width="100" height="100"></img></a>
        </div>

        {/* menu link part */}

        <div className={showMediaIcons ? "menu-link mobile-menu-link": "menu-link"}>
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

          {/* Hammburger menu */}
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu/>
            </a>
          </div>
          
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
