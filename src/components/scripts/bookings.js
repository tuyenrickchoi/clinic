import React, { useState, useEffect } from 'react';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  // Lấy danh sách booking từ API
  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      if (!response.ok) throw new Error('Lấy danh sách booking thất bại');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Xóa booking theo ID
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Xóa booking thất bại');
      setBookings(bookings.filter(booking => booking._id !== id));
      alert('Xóa booking thành công');
    } catch (error) {
      console.error(error);
      alert('Không thể xóa booking. Vui lòng thử lại.');
    }
  };

  // Lấy dữ liệu khi component được tải
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="bookings-page">
      <h1>Danh Sách Booking</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Tên Dịch Vụ</th>
            <th>Tên Khách Hàng</th>
            <th>Ngày</th>
            <th>Thời Gian</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.serviceName}</td>
              <td>{booking.customerName}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.time}</td>
              <td>
                <button onClick={() => handleDelete(booking._id)} className="btn btn-danger">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;