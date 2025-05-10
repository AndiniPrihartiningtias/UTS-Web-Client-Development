import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="#">Andini Prihartiningtias</a>
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
