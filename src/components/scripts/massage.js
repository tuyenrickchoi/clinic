import React from 'react';
import '../styles/massage.css';
import border from '../../assets/border.png';
import massage1 from '../../assets/massage.jpg';
import massage2 from '../../assets/massage1.jpg';
import massage3 from '../../assets/massage2.jpg';
import { useHistory } from 'react-router-dom'; // Thêm useHistory để điều hướng

const Massage = () => {
  const history = useHistory(); // Khai báo hook useHistory

  const handleServiceClick = (service) => {
    history.push(`/services?service=${service}`); // Chuyển hướng tới trang dịch vụ với query parameter
  };

  return (
    <div className="Massage">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
            <h2 className="text-white massage-heading">MASSAGE TREATMENTS</h2>
            <div className="divider-img">
              <img src={border} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
            <h4 className="text-white massage-heading">Facial Massage</h4>
            <div className="message-img" onClick={() => handleServiceClick('Massage')}>
              <img src={massage1} alt="" />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted .</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
            <h4 className="text-white massage-heading">Relaxing Massage</h4>
            <div className="message-img" onClick={() => handleServiceClick('Massage')}>
              <img src={massage2} alt="" />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted .</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
            <h4 className="text-white massage-heading">Deep Tissue Massage</h4>
            <div className="message-img" onClick={() => handleServiceClick('Massage')}>
              <img src={massage3} alt="" />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted .</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Massage;
