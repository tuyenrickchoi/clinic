const mongoose = require("mongoose");		
		
async function connectDB(){		
try {		
await mongoose.connect("mongodb+srv://gaxuongban:thetuyen123@cluster0.aziq4.mongodb.net/Clinic?retryWrites=true&w=majority&appName=Cluster0");		
console.log("connect db success");		
} catch(error){		
console.log("connect db fail: ", error.message);		
}		
}		
		
module.exports = connectDB;		