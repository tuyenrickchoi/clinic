import React from 'react';
import '../styles/SkinLaserPage.css'; // Link to the CSS file

import { useEffect } from 'react';
import img3 from '../../assets/laser.jpg';
import img2 from '../../assets/seo mun.jpg';
import img1 from '../../assets/seo tre.jpg';
import img0 from '../../assets/trietlong.jpg'; // Import image here
const SkinLaserPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên tọa độ x: 0, y: 0
  }, []); // Chỉ chạy một lần khi component được mount
  return (
    <div className="skin-laser-page">
      <header className="hero-section">
        <img src={img3} alt="Skin Laser" className="hero-image" /> 
        <div className="hero-text">
          <h1>"Discover the Power of Skin Laser,,</h1>
          
        </div>
      </header>

      <section className="service-section">
        <div className="service-item">
          <img src={img2} alt="Laser Treatment 1" className="service-image" />
          <div className="service-description">
            <h2>Acne Scar Treatment</h2>
            <p>Laser treatment to reduce acne scars and promote smooth skin.</p>
          </div>
        </div>

        <div className="service-item">
          <img src={img1} alt="Laser Treatment 2" className="service-image" />
          <div className="service-description">
            <h2>Skin Rejuvenation</h2>
            <p>Revitalize your skin with advanced laser rejuvenation techniques.</p>
          </div>
        </div>

        <div className="service-item">
          <img src={img0} alt="Laser Treatment 3" className="service-image" />
          <div className="service-description">
            <h2>Hair Removal</h2>
            <p>Permanent hair removal with the latest laser technology.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-item">
          <p>"My skin has never felt better after the laser treatment! Highly recommend."</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial-item">
          <p>"The hair removal service was fast, effective, and almost pain-free. I'm so happy with the results!"</p>
          <span>- John Smith</span>
        </div>
      </section>

    </div>
  );
};

export default SkinLaserPage;
