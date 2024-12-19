const mongoose = require("mongoose");

const massageSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },    
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    img:{
        type:String,
        require: true,
    },
});

module.exports = mongoose.model('MassageTreatment', massageSchema); 