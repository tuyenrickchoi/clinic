import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // Import useHistory
import '../components/styles/gallery-detail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/scripts/cartContext';

const GalleryDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const history = useHistory(); // Sử dụng useHistory để chuyển hướng
    const [galleryItem, setGalleryItem] = useState(null);
    const [relatedItems, setRelatedItems] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchGalleryItem();
        fetchRelatedItems();
        
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

            const related = data.filter(item => item._id !== id);
            setRelatedItems(related.slice(0, 4)); 
        } catch (error) {
            console.error('Error fetching related items:', error);
        }
    };

    const handleAddToCart = () => {
        if (galleryItem) {
            addToCart({
                productId: galleryItem._id,
                name: galleryItem.title,
                price: galleryItem.price,
                imageUrl: galleryItem.imageUrl,
                quantity: 1,
            });
        }
    };

    const handleBuyNow = () => {
        handleAddToCart();
        history.push('/shoppingcart');
        window.scrollTo(0, 0); 
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
                        <div className="rating">⭐ {reviews.length} Reviews</div>
                        <p className="description">{galleryItem.description}</p>

                        <div className="price">
                            {galleryItem.price} Đ
                            <span className="price-discount">1.940.000 Đ</span> 
                        </div>

                        <div className="actions">
                            <button className="btn" onClick={handleBuyNow}>Buy now</button>
                            <button className="btn" onClick={handleAddToCart}>Add to shopping cart</button>
                        </div>
                    </div>
                </div>

                {/* Phần đánh giá */}
                <div className="reviews">
                    <h2>Reviews</h2>
                    {reviews.length > 0 ? (
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
