import React, { useContext } from 'react';
import '../styles/top-bar.css';
import logo from '../../assets/logo.png';
import shoppingBag from '../../assets/shoppingbag.svg'; // Import the shopping bag icon
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';

const TopBar = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="topbr">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="logo-img">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link text-white" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* Giỏ hàng */}
              <div className="cart">
                <Link to="/shoppingcart" className="cart-link text-white">
                  <div className="cart-icon">
                    <img src={shoppingBag} alt="Shopping Bag" width="24" height="24" />
                    <span className="cart-quantity">{cartQuantity}</span>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
