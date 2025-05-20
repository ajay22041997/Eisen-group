import ParticlesBg from "particles-bg";


import React from "react";
import "./Hero.css";

export const Header = (props) => {
  return (
    <header id='header'>
     <section className="hero-section">
      {/* Background video */}
      <video
        className="hero-video"
        src="https://www.w3schools.com/howto/rain.mp4" // Replace with your mechanical invention video link
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay">
        <h1>WHERE ENGINEERING MEETS PRECISION</h1>
        <p>Providing innovative solutions since 1992.</p>
        <a href="#profile" className="hero-button">LEARN MORE</a>
      </div>
    </section>


    </header>
  )
}



