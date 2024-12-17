// server.js
const express = require('express');
const connectDB = require('./src/configs/database'); 
const app = express();
const router = require("./src/routers");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kết nối MongoDB
connectDB();
router(app);


// Cấu hình port cho server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
