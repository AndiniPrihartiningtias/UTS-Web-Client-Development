import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CTA from '../components/CTA';
import FloatingMenu from '../components/FloatingMenu';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="home">
      <Navbar />
      <Home />
      <About />
      <Contact />
      {!isMenuOpen && <CTA onClick={handleToggleMenu} />}
      <FloatingMenu isOpen={isMenuOpen} onClose={handleToggleMenu} />
    </div>
  );
}

export default LandingPage;
