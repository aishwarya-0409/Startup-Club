import React from 'react';

const HeroSection: React.FC = () => (
  <div className="hero">
    <nav className="navbar">
      <a href="#events">Events</a>
      <a href="#projects">Projects</a>
      <a href="#team">Team</a>
      <a href="#join">Join</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="hero-content">
      <div className="hero-title">
        WELCOME TO <span className="hero-highlight">STARTUP CLUB</span>
      </div>
      <div className="hero-title hero-title-secondary">
        We are <span className="hero-highlight">student innovators</span> from <br />
        VIT Bhopal University who build together
      </div>
      <div className="hero-subtitle">
        Join a community of makers, coders, and entrepreneurs.<br />
        Build startups, learn new skills, and launch your ideas!
      </div>
      <a href="#join" className="hero-btn">JOIN THE CLUB</a>
    </div>
  </div>
);

export default HeroSection;