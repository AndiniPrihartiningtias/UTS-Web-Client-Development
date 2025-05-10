import React from 'react';
import '../styles/Home.css'; 
import ProfileImg from '../assets/Profile.jpg';


function Home() {
  return (

     <div className="Home-wrapper">
    <section className="Home">
      <div className="Home-content">
        <h1>Flow Developer — <span className="highlight">UI/UX</span></h1>
      </div>
      <div className="Home-image">
      <img src={ProfileImg} alt="Profile" /> 
      </div>
    </section>
    </div>
  );
}

export default Home;
