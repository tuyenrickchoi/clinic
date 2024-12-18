const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");
    } catch(error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Thoát process nếu không kết nối được DB
    }
}

module.exports = connectDB;