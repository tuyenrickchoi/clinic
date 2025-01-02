// server.js
const express = require('express');
const connectDB = require('./src/configs/database'); 
const path = require('path');
const app = express();
const router = require("./src/routers");

// Middleware để parse JSON và form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kết nối MongoDB
connectDB();

// API routes
router(app);

// Serve static files từ thư mục build của React
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
 
  // Tất cả các routes khác sẽ được handle bởi React Router
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Cấu hình port cho server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
