import React, { useEffect, useState } from 'react';
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
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
                <input 
                    type="password" 
                    className="border p-2 mb-4" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button 
                    className="px-4 py-2 bg-blue-500 text-white" 
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="mb-6 flex space-x-4">
                <button 
                    className={`px-4 py-2 ${view === 'bookings' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
                    onClick={() => setView('bookings')}
                >
                    Booking List
                </button>
                <button 
                    className={`px-4 py-2 ${view === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
                    onClick={() => setView('orders')}
                >
                    Order List
                </button>
            </div>
            {view === 'bookings' ? (
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-center">Booking List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="p-4 border rounded shadow">
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
                    <h2 className="text-xl font-semibold mb-2 text-center">Product order list</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sellProducts.map((order) => (
                            <div key={order._id} className="p-4 border rounded shadow">
                                <p><strong>Name:</strong> {order.name}</p>
                                <p><strong>Phone:</strong> {order.phone}</p>
                                <p><strong>Address:</strong> {order.address}</p>
                                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                                <p><strong>Total Price:</strong> {order.totalPrice.toLocaleString()} Đ</p>
                                <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                                <div>
                                    <strong>Products:</strong>
                                    <ul className="list-disc pl-5">
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
};

export default AdminPage;
