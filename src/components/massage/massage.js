import React from 'react';
import './massage.css';
import border from './assets/border.png';
import massage1 from './assets/massage1.png';
import massage2 from './assets/massage2.png';
import massage3 from './assets/massage3.png';


class Massage extends React.Component{
  render(){
      return(
          <div className="Massage">
              <div className="container">
                  <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                     <h2 className="text-white">MASSAAGE TREATMENTS</h2>
                     <div className="massage-img">
                     <img src={border}></img>
                     </div>
                    </div>
                  </div>
                  <div class="row  mt-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
                    <h4 className="text-white massage-heading">Facial Massage</h4>
                        <img src={massage1} className="message-img"/>
                        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
                    <h4 className="text-white massage-heading">Relaxing Massage</h4>
                    <img src={massage2} className="message-img"/>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
                    <h4 className="text-white massage-heading">Deep Tissue Massage</h4>
                    <img src={massage3} className="message-img"/>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                
                  </div>
              </div>
          </div>
      );
  }
}


export default Massage;
