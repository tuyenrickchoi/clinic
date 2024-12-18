import React from "react";
import "../styles/about.css";
import '@fontsource/poppins'; // Import font Poppins
import heroImage from "../../assets/Inkedbanner_4_LI2.jpg";
import tuyen from "../../assets/tuyen.jpg";
import tram from "../../assets/tram.jpg";
import { Link } from 'react-router-dom';
import ngoc from "../../assets/ngocc.jfif";
import tin from "../../assets/tin.jpg";
import viet from "../../assets/viet.jpg";
import phuc from "../../assets/phuc.jpg";
import trung from "../../assets/trung.jfif";

const testimonials = [
  {
    image: viet,
    name: "Mr Viet",
    feedback: "I used Fotona 4D service at FV Lifestyle Beauty Clinic and felt very satisfied with the service and treatment results. Consultant team are very friendly, doctor is dedicated and service is quick, no waiting time. I feel the difference after finishing the first treatment.",
  },
  {
    image: phuc,
    name: "Mr Phuc",
    feedback: "Staffs are friendly when consulting patients, and doctors are dedicated and give the best advice which makes patients feel assured and confident when deciding on whether to undertake plastic surgery. I feel more confident after having used services at FV Lifestyle Clinic, and there is no pain and swelling so I can even go to work the next day.",
  },
  {
    image: trung,
    name: "Mr Trung",
    feedback: "Instead of going to different spas every week, applying a variety of expensive cosmetics or therapies, I decided to stick with a single beauty clinic which understands my own beauty values: nourishing, so that the body can be naturally recovered, rejuvenated, and maintain a healthy beauty from the inside.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
    <div className="hero-section">
      <img
        src={heroImage}
        alt="Hero"
        className="hero-img"
      />
        <h1 >Enhance Your Beauty</h1>
        <p>"Embrace a more beautiful"</p>
      </div>

      <p>
      <h3>Welcome to our website!</h3>
        We are a team of passionate individuals dedicated to delivering
        the best experiences for our customers. With years of experience and a customer-first
        mindset, we strive to exceed expectations in every project we undertake.
      </p>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src={tuyen}
              alt="Team Member 1"
              className="team-img"
            />
            <h3>Eric</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src={tram}
              alt="Team Member 2"
              className="team-img"
            />
            <h3>Thanh Tram</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-member">
            <img
              src={tin}
              alt="Team Member 2"
              className="team-img"
            />
            <h3>Thieu Tin</h3>
            <p>Manager</p>
          </div>
          <div className="team-member">
            <img
              src={ngoc}
              alt="Team Member 3"
              className="team-img"
            />
            <h3>Hong Ngoc</h3>
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

      </div>
      <div class="image-container">
  <div class="overlay-content">
    <h1>TTN <span>Skin & Laser</span></h1>
    <p>
      The advanced laser technology at FV Lifestyle also helps solve other skin problems effectively, quickly and safely
    </p>
    <Link to="/SkinLaserPage">
        <button className="btn-see-more">See more...</button>
      </Link>

  </div>
</div>

      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>"Customer Satisfaction: We put our customers first in everything we do.</li>
          <li>Innovation: We embrace creativity and forward-thinking solutions.</li>
          <li>Integrity: We are committed to ethical practices and transparency.</li>
          <li>Excellence: We aim for the highest standards in all our endeavors,,</li>
        </ul>
      </div>
      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <p>{testimonial.feedback}</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
