import React from 'react';
import './massage.css';
import border from './assets/border.png';
import massage1 from './assets/massage.jpg';
import massage2 from './assets/massage1.jpg';
import massage3 from './assets/massage2.jpg';


class Massage extends React.Component{
  render(){
      return(
          <div className="Massage">
              <div className="container">
                  <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                     <h2 className="text-white massage-heading">MASSAAGE TREATMENTS</h2>
                     <div className="divider-img">
                     <img src={border}></img>
                     </div>
                    </div>
                  </div>
                  <div class="row  mt-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
                    <h4 className="text-white massage-heading">Facial Massage</h4>
                    <div className="message-img">
                    <img src={massage1} />
                    </div>
                        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
                    <h4 className="text-white massage-heading">Relaxing Massage</h4>
                    <div className="message-img">
                    <img src={massage2} />
                    </div>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 massage-content">
                    <h4 className="text-white massage-heading">Deep Tissue Massage</h4>
                    <div className="message-img">
                    <img src={massage3} />
                    </div>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                
                  </div>
              </div>
          </div>
      );
  }
}


export default Massage;
