import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("main-content");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li 
            className={activeSection === "main-content" ? "active" : ""} 
            onClick={() => scrollToSection("main-content")}
          >
            Home
          </li>
          <li 
            className={activeSection === "about" ? "active" : ""} 
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li 
            className={activeSection === "committee" ? "active" : ""} 
            onClick={() => scrollToSection("committee")}
          >
            Committee
          </li>
          <li 
            className={activeSection === "cfp" ? "active" : ""} 
            onClick={() => scrollToSection("cfp")}
          >
            Call for Papers
          </li>
          <li 
            className={activeSection === "topics" ? "active" : ""} 
            onClick={() => scrollToSection("topics")}
          >
            Topics
          </li>
          <li 
            className={activeSection === "theme" ? "active" : ""} 
            onClick={() => scrollToSection("theme")}
          >
            Theme
          </li>
          <li 
            className={activeSection === "registration" ? "active" : ""} 
            onClick={() => scrollToSection("registration")}
          >
            Registration
          </li>
          <li 
            className={activeSection === "venue-contact" ? "active" : ""} 
            onClick={() => scrollToSection("venue-contact")}
          >
            Venue & Contact
          </li>
          <li 
            className={activeSection === "sponsors" ? "active" : ""} 
            onClick={() => scrollToSection("sponsors")}
          >
            Sponsors
          </li>
          <li 
            className={activeSection === "welcome" ? "active" : ""} 
            onClick={() => scrollToSection("welcome")}
          >
            Welcome to Coimbatore
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;