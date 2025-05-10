import React from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/FloatingMenu.css";

function FloatingMenu({ isOpen, onClose }) {
  return (
    <div className={`floating-menu-half ${isOpen ? "open" : ""}`}>
      <div className="left-side">
      </div>

      <div className="right-side">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <ul className="menu-links">
          <li><a href="#home" onClick={onClose}>Home</a></li>
          <li><a href="#about" onClick={onClose}>About</a></li>
          <li><a href="#contact" onClick={onClose}>Contact</a></li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/andini-prihartiningtias-4418aa326" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/anprhnn" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/AndiniPrihartiningtias" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default FloatingMenu;
