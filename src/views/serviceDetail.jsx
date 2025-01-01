import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/serviceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [service, setService] = useState(null);
  const [bookingData, setBookingData] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });

  // Hàm fetch dữ liệu chi tiết dịch vụ
  const fetchServiceDetail = useCallback(async () => {
    try {
      // Gửi yêu cầu tới từng endpoint để tìm dịch vụ có id tương ứng
      const endpoints = ['/api/facials', '/api/massages', '/api/spas'];
      let foundService = null;

      for (let endpoint of endpoints) {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        foundService = data.find(item => item._id === id);

        if (foundService) {
          break;  // Dừng khi tìm thấy dịch vụ
        }
      }

      if (foundService) {
        setService(foundService);
      } else {
        console.error(`Service with id ${id} not found.`);
      }
    } catch (error) {
      console.error('Error fetching service details:', error);
    }
  }, [id]); // Chỉ gọi lại fetchServiceDetail khi id thay đổi

  useEffect(() => {
    fetchServiceDetail();
  }, [id, fetchServiceDetail]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          serviceName: service?.name,
        }),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      alert('Booking successful!');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <div className="service-detail-page">
      {service ? (
        <div className="container">
          <h1 className="text-center">{service.name}</h1>
          <img src={service.img} alt={service.name} className="img-fluid" />
          

          {/* Hiển thị thông tin chi tiết của dịch vụ */}
          <div>
            <h2>Service Details:</h2>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Price:</strong> ${service.price}</p>
          </div>

          {/* Booking Form */}
          <div>
            <h3>Book a {service.name}</h3>
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
      ) : (
        <div className="container text-center">
          <h2>Service not found</h2>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;