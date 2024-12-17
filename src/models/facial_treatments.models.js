const mongoose = require("mongoose");

const facialSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        unique: true,
    },
    price:{
        type:Number,
        require: true,
    },
    // img:{
    //     type:String,
    //     require: true,
    // },
    descirption:{
        type:String,
        require: true,
    },
    
});

module.exports = mongoose.model('Facial Treaments', facialSchema, 'Facial Treaments');