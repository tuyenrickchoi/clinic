import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/gallery-detail.css';
import { Link } from 'react-router-dom';

const GalleryDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [galleryItem, setGalleryItem] = useState(null);
    const [relatedItems, setRelatedItems] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchGalleryItem();
        fetchRelatedItems();
        
        // Cuộn lên đầu trang khi ID thay đổi
        window.scrollTo(0, 0);
    }, [id]);

    const fetchGalleryItem = async () => {
        try {
            const response = await fetch(`/api/gallery/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch gallery item');
            }
            const data = await response.json();
            setGalleryItem(data);
            setReviews(data.reviews || []);
        } catch (error) {
            console.error('Error fetching gallery item:', error);
        }
    };

    const fetchRelatedItems = async () => {
        try {
            const response = await fetch('/api/gallery');
            if (!response.ok) {
                throw new Error('Failed to fetch related items');
            }
            const data = await response.json();

            // Lọc sản phẩm liên quan (không bao gồm sản phẩm hiện tại)
            const related = data.filter(item => item._id !== id);
            setRelatedItems(related.slice(0, 4)); // Lấy tối đa 4 sản phẩm liên quan
        } catch (error) {
            console.error('Error fetching related items:', error);
        }
    };

    if (!galleryItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="gallery-detail-page">
        <div className="container">
            <div className="row">
                {/* Hình ảnh sản phẩm */}
                <div className="col-md-6">
                    <img
                        src={galleryItem.imageUrl}
                        alt={galleryItem.title}
                        className="gallery-img"
                    />
                </div>
    
                {/* Thông tin sản phẩm */}
                <div className="col-md-6">
                    <h1>{galleryItem.title}</h1>
                    <p className="sku">SKU: {galleryItem.sku}</p>
                    <div className="rating">⭐ {reviews.length} đánh giá</div>
                    <p className="description">{galleryItem.description}</p>
    
                    <div className="price">
                        <span className="price-discount">1.940.000 Đ</span> 1.418.000 Đ
                    </div>
    
                    <div className="actions">
                        <button className="btn">Mua ngay</button>
                        <button className="btn">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
    
            {/* Phần đánh giá */}
            <div className="reviews">
                <h2>Reviews</h2>
                {reviews.length >0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <strong>{review.user}</strong>
                            <p>Rating: {review.rating}/5</p>
                            <p>{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews available</p>
                )}
            </div>
    
            {/* Phần sản phẩm liên quan */}
            <div className="related-items">
                <h2>Related Items</h2>
                <div className="row">
                    {relatedItems.map((item) => (
                        <div key={item._id} className="col-sm-6 col-md-3">
                            <Link to={`/gallery/${item._id}`}>
                                <div className="related-item">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="related-img"
                                    />
                                    <h5>{item.title}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default GalleryDetail;
