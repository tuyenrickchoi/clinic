import React, { useState, useEffect } from 'react';
import '../components/styles/gallery.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch('/api/gallery');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery items');
      }
      const data = await response.json();
      setGalleryItems(data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    }
  };

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="text-center spa-heading">Gallery</h1>
        <div className="row">
          {galleryItems.map((item) => (
            <div key={item._id} className="col-sm-12 col-md-4 col-lg-4">
            <Link to={`/gallery/${item._id}`}>
                <div className="gallery-item">
                    <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="gallery-img" 
                    />
                </div>
            </Link>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 