// src/SkinLaser.js
import React, { useState } from 'react';
import './SkinLaser.css';

const SkinLaser = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg', // Thay thế bằng các đường dẫn hình ảnh của bạn
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="skin-laser-page">
      <h1>Skin & Laser Treatments</h1>
      <div className="slideshow-container">
        <img src={images[currentImageIndex]} alt="Skin & Laser" className="slide-image" />
        <div className="controls">
          <button onClick={prevImage} className="prev-button">❮</button>
          <button onClick={nextImage} className="next-button">❯</button>
        </div>
      </div>
      <p>
        The advanced laser technology at FV Lifestyle helps solve skin problems effectively, quickly, and safely.
      </p>
    </div>
  );
};

export default SkinLaser;
