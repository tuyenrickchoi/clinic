import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team of passionate individuals dedicated to delivering
        the best experiences for our customers. With years of experience and a customer-first
        mindset, we strive to exceed expectations in every project we undertake.
      </p>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="team-img"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="team-img"
            />
            <h3>Jane Smith</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="team-img"
            />
            <h3>Emily Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals and organizations to achieve their goals through
          innovative solutions and exceptional service. We believe in creating value and building
          lasting relationships with our clients.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Mission Image"
          className="mission-img"
        />
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction: We put our customers first in everything we do.</li>
          <li>Innovation: We embrace creativity and forward-thinking solutions.</li>
          <li>Integrity: We are committed to ethical practices and transparency.</li>
          <li>Excellence: We aim for the highest standards in all our endeavors.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
