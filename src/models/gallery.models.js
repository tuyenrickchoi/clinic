const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img:{
        type:String,
        require: true,
    },
    description: {
        type: String,
        required: false
    },
     reviews: [
            {
                user: String, // Tên người đánh giá
                rating: Number, // Điểm (1-5)
                comment: String // Nội dung đánh giá
            }
    ],
    relatedItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "gallery", // Tham chiếu đến chính model `Gallery`
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Gallery', gallerySchema); 