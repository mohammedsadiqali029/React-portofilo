import React from "react";
import '../index.css';
import "./Header.css";

export default function Header() {
  return (
    <header>
      <a
        className="logo"
        href="#Banner"
      >
        Portfolio
      </a>
      <div className="toggle"></div>
      <ul className="menu">
        <li>
          <a href="#Banner">
            Home
          </a>
        </li>
        <li>
          <a href="#About">
            About
          </a>
        </li>
        <li>
          <a href="#Services">
            Services
          </a>
        </li>
        <li>
          <a href="#Work">
            Work
          </a>
        </li>
        <li>
          <a href="#Testimonial">
            Testimonial
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

