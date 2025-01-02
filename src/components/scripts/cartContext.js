import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    fetch('/api/cart')
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        calculateQuantity(data);
      });
  }, []);

  const calculateQuantity = (cart) => {
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(quantity);
  };

  const addToCart = (product) => {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        calculateQuantity(data);
      });
  };

  const updateCart = (productId, quantity) => {
    fetch(`/api/cart/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        calculateQuantity(data);
      });
  };

  const removeFromCart = (productId) => {
    fetch(`/api/cart/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        calculateQuantity(data);
      });
  };

  const clearCart = () => {
    const promises = cart.map((item) =>
      fetch(`/api/cart/${item.productId}`, {
        method: 'DELETE',
      })
    );
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
