import React, { useState, useEffect } from 'react';
import '../components/styles/service.css';
import massageImg from '../assets/massage5.jpg';
import spaImg from '../assets/spa.jpg';
import facialImg from '../assets/facial.jpg';

const Services = () => {
  const [currentService, setCurrentService] = useState('Facial');
  const [serviceData, setServiceData] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingData, setBookingData] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });

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

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingData,
          serviceName: selectedService.name
        }),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      alert('Booking successful!');
      setShowBookingForm(false);
      setBookingData({
        customerName: '',
        phoneNumber: '',
        email: '',
        date: '',
        time: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
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
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">$ {item.price}</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => {
                        setSelectedService(item);
                        setShowBookingForm(true);
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingForm && (
          <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Book {selectedService?.name}</h5>
                  <button type="button" className="close" onClick={() => setShowBookingForm(false)}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleBookingSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="customerName"
                        value={bookingData.customerName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phoneNumber"
                        value={bookingData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={bookingData.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Notes</label>
                      <textarea
                        className="form-control"
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit Booking
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Services;
