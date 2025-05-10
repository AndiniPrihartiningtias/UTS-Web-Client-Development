import React from "react";
import "../styles/CTA.css";

function CTA({ onClick }) {
  return (
    <a href="#" className="floating-cta" onClick={onClick}>
      <span className="wave">👋</span>
      <span className="cta-text">Hi I'm Andini</span>
    </a>
  );
}

export default CTA;
