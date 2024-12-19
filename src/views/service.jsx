import React, { useState, useEffect } from 'react';
import '../components/styles/service.css';
import massageImg from '../assets/massage5.jpg';
import spaImg from '../assets/spa.jpg';
import facialImg from '../assets/facial.jpg';

const Services = () => {
  const [currentService, setCurrentService] = useState('Facial');
  const [serviceData, setServiceData] = useState([]);

  // Hàm fetch dữ liệu từ API
  const fetchServiceData = async (service) => {
    try {
      const endpoint = service === 'Facial' ? '/api/facials' :
                      service === 'Massage' ? '/api/massages' :
                      service === 'Spa' ? '/api/spas' : null;
      
      if (!endpoint) return;

      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`${service} data received:`, data);
      setServiceData(data);
    } catch (error) {
      console.error(`Error fetching ${service} data:`, error);
      setServiceData([]); // Set empty array if error
    }
  };

  useEffect(() => {
    fetchServiceData(currentService);
  }, [currentService]);

  const handleServiceClick = (service) => {
    setCurrentService(service);
  };

  return (
    <div className="services-page">      
      <div className="container">
        <h1 className="text-center">Our Services</h1>
        <div className="row">
          {/* Dịch vụ Massage */}
          <div className="col-sm-12 col-md-4 col-lg-4 text-center" onClick={() => handleServiceClick('Massage')}>
            <img src={massageImg} alt="Massage Treatments" className="service-img" />
            <h3>Massage Treatments</h3>
            <p>We offer a variety of massage treatments for relaxation and rejuvenation.</p>
          </div>
          
          {/* Dịch vụ Spa */}
          <div className="col-sm-12 col-md-4 col-lg-4 text-center" onClick={() => handleServiceClick('Spa')}>
            <img src={spaImg} alt="Spa Treatments" className="service-img" />
            <h3>Spa Treatments</h3>
            <p>Our spa services include herbal treatments and detox programs to help you feel your best.</p>
          </div>
          
          {/* Dịch vụ Facial */}
          <div className="col-sm-12 col-md-4 col-lg-4 text-center" onClick={() => handleServiceClick('Facial')}>
            <img src={facialImg} alt="Facial Treatments" className="service-img" />
            <h3>Facial Treatments</h3>
            <p>Explore our facial treatments for clearer, smoother, and glowing skin.</p>
          </div>
        </div>

        {/* Hiển thị database của dịch vụ */}
        <div className="service-data">
          <h2 className="text-center">{currentService} Options</h2>
          <div className="row">
          {serviceData.map((item) => ( 
  <div key={item._id || item.id} className="col-sm-12 col-md-6 col-lg-4">
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img 
        src={item.img} 
        alt={item.name} 
        className="card-img-top" 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description || item.descirption}</p>
        <p className="card-text">$ {item.price}</p>
      </div>
    </div>
  </div>
))}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
