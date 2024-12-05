// src/Service.js
import React from 'react';
import './service.css'; // Tạo file CSS riêng cho trang dịch vụ
import massageImg from './assets/massage.jpg'; // Thêm đường dẫn đến ảnh
import spaImg from './assets/spa.jpg';
import facialImg from './assets/facial.jpg';

class Service extends React.Component {
  render() {
    return (
      <div className="service-page">
        <div className="container">
          <h1 className="text-center">Our Services</h1>
          <div className="row">
            {/* Dịch vụ Massage */}
            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={massageImg} alt="Massage Treatments" className="service-img" />
              <h3>Massage Treatments</h3>
              <p>We offer a variety of massage treatments for relaxation and rejuvenation.</p>
            </div>
            
            {/* Dịch vụ Spa */}
            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={spaImg} alt="Spa Treatments" className="service-img" />
              <h3>Spa Treatments</h3>
              <p>Our spa services include herbal treatments and detox programs to help you feel your best.</p>
            </div>
            
            {/* Dịch vụ Facial */}
            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
              <img src={facialImg} alt="Facial Treatments" className="service-img" />
              <h3>Facial Treatments</h3>
              <p>Explore our facial treatments for clearer, smoother, and glowing skin.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
