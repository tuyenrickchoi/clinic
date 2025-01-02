import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    axios.get('/api/cart').then((response) => {
      setCart(response.data);
      calculateQuantity(response.data);
    });
  }, []);

  const calculateQuantity = (cart) => {
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(quantity);
  };

  const addToCart = (product) => {
    axios.post('/api/cart', product).then((response) => {
      setCart(response.data);
      calculateQuantity(response.data);
    });
  };

  const updateCart = (productId, quantity) => {
    axios.patch(`/api/cart/${productId}`, { quantity }).then((response) => {
      setCart(response.data);
      calculateQuantity(response.data);
    });
  };

  const removeFromCart = (productId) => {
    axios.delete(`/api/cart/${productId}`).then((response) => {
      setCart(response.data);
      calculateQuantity(response.data);
    });
  };

  const clearCart = () => {
    const promises = cart.map(item => axios.delete(`/api/cart/${item.productId}`));
    Promise.all(promises).then(() => {
      setCart([]);
      setCartQuantity(0);
    });
  };

  return (
    <CartContext.Provider value={{ cart, cartQuantity, addToCart, updateCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
