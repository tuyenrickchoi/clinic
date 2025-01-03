import React from 'react';
import '../styles/spa.css';
import border from '../../assets/border.png';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Spa = () => {
  const history = useHistory(); // Khai báo useHistory

  const handleServiceClick = (service) => {
    history.push(`/services?service=${service}`); // Điều hướng đến trang dịch vụ với query parameter
  };

  return (
    <div className="Spa">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
            <h2 className="text-white spa-heading">SPA TREATMENTS</h2>
            <div className="massage-img">
              <img src={border} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <div className="spa-img" onClick={() => handleServiceClick('Spa')}>
              <img src={img1} alt="" />
            </div>
            <h3 className="text-white mb-2">Massages</h3>
            <p className="text-white">Often it seems to me to be an evil flower of nothingness</p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <div className="spa-img" onClick={() => handleServiceClick('Spa')}>
              <img src={img2} alt="" />
            </div>
            <h3 className="text-white">Herbal Spa</h3>
            <p className="text-white">Usually it seems to me to be an evil flower of nothingness</p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <div className="spa-img" onClick={() => handleServiceClick('Spa')}>
              <img src={img3} alt="" />
            </div>
            <h3 className="text-white">Detox</h3>
            <p className="text-white">Rare it seems to me to be an evil flower of nothingness</p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
            <div className="spa-img" onClick={() => handleServiceClick('Spa')}>
              <img src={img1} alt="" />
            </div>
            <h3 className="text-white">Face Facial</h3>
            <p className="text-white">Always it seems to me to be an evil flower of nothingness</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;
