const Cart = require('../models/cart.models');

let cart = []; // Dùng mảng tạm để lưu trữ giỏ hàng (hoặc kết nối MongoDB)

exports.addToCart = (req, res) => {
  const { productId, name, price, quantity } = req.body;
  const product = cart.find((item) => item.productId === productId);
  if (product) {
    product.quantity += quantity;
  } else {
    cart.push({ productId, name, price, quantity });
  }
  res.status(200).json(cart);
};

exports.getCart = (req, res) => {
  res.status(200).json(cart);
};

exports.updateCart = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const product = cart.find((item) => item.productId === id);
  if (product) {
    product.quantity = quantity;
    res.status(200).json(cart);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

exports.deleteFromCart = (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.productId !== id);
  res.status(200).json(cart);
};

exports.clearCart = async (req, res) => {
  try {
    cart = []; // Clear the in-memory cart array
    await Cart.deleteMany({});
    res.status(200).send({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
