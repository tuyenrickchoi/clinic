import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { CartContext } from '../components/scripts/cartContext';
import '../components/styles/shoppingCart.css';
import trashcanIcon from '../assets/trashcan.svg';

const ShoppingCart = () => {
  const { cart, updateCart, removeFromCart, clearCart } = useContext(CartContext);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart]);

  const handleIncrease = (productId) => {
    const item = cart.find((item) => item.productId === productId);
    updateCart(productId, item.quantity + 1);
  };

  const handleDecrease = (productId) => {
    const item = cart.find((item) => item.productId === productId);
    if (item.quantity > 1) {
      updateCart(productId, item.quantity - 1);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log cart data before submitting
    console.log('Cart data before order submission:', cart);
    if (cart.length === 0) {
      alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ!');
      return;
    }

    const orderData = {
      ...orderDetails,
      products: cart.map(item => ({
        productId: item.productId,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice,
    };

    try {
      const response = await fetch('/api/sellProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      alert('Order submitted successfully!');
      clearCart(); 
      setOrderDetails({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cash',
      });
      history.push('/'); // Redirect to homepage
    } catch (error) {
      alert('Failed to submit order. Please try again. Error: ' + error.message);
    }
  };

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Giỏ hàng của bạn đang trống.</p>
          ) : (
            cart.map((item) => (
              <div key={item.productId} className="cart-item">
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{parseFloat(item.price).toLocaleString()} Đ</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleDecrease(item.productId)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.productId)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item.productId)} className="remove-button">
                    <img src={trashcanIcon} alt="Remove" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="order-summary-form">
          <div className="order-summary">
            <h2>Tổng giá sản phẩm</h2>
            <p>{totalPrice.toLocaleString()} Đ</p>
          </div>
          <div className="order-form">
            <h2>Thông tin đặt hàng</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Tên:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={orderDetails.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Địa chỉ:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={orderDetails.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Phương thức thanh toán:</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={orderDetails.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="cash">Tiền mặt</option>
                  <option value="credit">Thẻ tín dụng</option>
                  <option value="bank">Chuyển khoản ngân hàng</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Checkout</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
