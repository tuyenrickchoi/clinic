import React, { useEffect, useState } from 'react';
import '../components/styles/adminPage.css'; // Import the CSS file
// ...existing code...

const AdminPage = () => {
    const [bookings, setBookings] = useState([]);
    const [sellProducts, setSellProducts] = useState([]);
    const [view, setView] = useState('bookings'); // State to toggle between views
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication
    const [password, setPassword] = useState(''); // State for password input

    useEffect(() => {
        if (isAuthenticated) {
            const fetchBookings = async () => {
                try {
                    const response = await fetch('/api/bookings');
                    const data = await response.json();
                    setBookings(data);
                } catch (error) {
                    console.error('Error fetching bookings:', error);
                }
            };

            const fetchSellProducts = async () => {
                try {
                    const response = await fetch('/api/sellProduct');
                    const data = await response.json();
                    setSellProducts(data);
                } catch (error) {
                    console.error('Error fetching sell products:', error);
                }
            };

            fetchBookings();
            fetchSellProducts();
        }
    }, [isAuthenticated]);

    const handleLogin = () => {
        if (password === 'admin123') { // Replace with your desired password
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <div className="login-box">
                    <h1 className="login-title">Admin Login</h1>
                    <input 
                        type="password" 
                        className="login-input" 
                        placeholder="Enter password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button 
                        className="login-button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="nav-buttons">
                <button 
                    className={`nav-button ${view === 'bookings' ? 'active' : 'inactive'}`} 
                    onClick={() => setView('bookings')}
                >
                    Booking List
                </button>
                <button 
                    className={`nav-button ${view === 'orders' ? 'active' : 'inactive'}`} 
                    onClick={() => setView('orders')}
                >
                    Order List
                </button>
            </div>
            {view === 'bookings' ? (
                <div>
                    <h2 className="section-title">Booking List</h2>
                    <div className="grid-container">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="card">
                                <p><strong>Service Name:</strong> {booking.serviceName}</p>
                                <p><strong>Customer Name:</strong> {booking.customerName}</p>
                                <p><strong>Phone Number:</strong> {booking.phoneNumber}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                                <p><strong>Time:</strong> {booking.time}</p>
                                <p><strong>Notes:</strong> {booking.notes}</p>
                                <p><strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="section-title">Product Order List</h2>
                    <div className="grid-container">
                        {sellProducts.map((order) => (
                            <div key={order._id} className="card">
                                <p><strong>Name:</strong> {order.name}</p>
                                <p><strong>Phone:</strong> {order.phone}</p>
                                <p><strong>Address:</strong> {order.address}</p>
                                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                                <p><strong>Total Price:</strong> {order.totalPrice.toLocaleString()} Đ</p>
                                <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                                <div>
                                    <strong>Products:</strong>
                                    <ul>
                                        {order.products.map((product) => (
                                            <li key={product._id}>
                                                {product.name} - {product.quantity} x {product.price.toLocaleString()} Đ
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
    
export default AdminPage;
