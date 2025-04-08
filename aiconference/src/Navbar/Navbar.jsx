import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => scrollToSection("main-content")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("committee")}>Committee</li>
        <li onClick={() => scrollToSection("cfp")}>Call for Papers</li>
        <li onClick={() => scrollToSection("topics")}>Topics</li>
        <li onClick={() => scrollToSection("theme")}>Theme</li>
        <li onClick={() => scrollToSection("registration")}>Registration</li>
        <li onClick={() => scrollToSection("venue-contact")}>Venue & Contact</li>
        <li onClick={() => scrollToSection("sponsors")}>Sponsors</li>
        <li onClick={() => scrollToSection("welcome")}>Welcome to Coimbatore</li>
      </ul>
    </nav>
  );
};

export default Navbar;
