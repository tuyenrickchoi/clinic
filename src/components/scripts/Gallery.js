import React from 'react';
import '../styles/gallery.css';
import img1 from '../../assets/gallery1.jpg';
import img2 from '../../assets/gallery2.jpg';
import img3 from '../../assets/gallery3.jpg';
import img4 from '../../assets/gallery4.jpg';
import img5 from '../../assets/gallery5.jpg';
import img6 from '../../assets/gallery6.jpg';

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery-page">
        <div className="container">
          <h1 className="text-center">Gallery</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={img1} alt="Gallery 1" className="gallery-img" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={img2} alt="Gallery 2" className="gallery-img" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={img3} alt="Gallery 3" className="gallery-img" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={img4} alt="Gallery 4" className="gallery-img" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={img5} alt="Gallery 5" className="gallery-img" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={img6} alt="Gallery 6" className="gallery-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
