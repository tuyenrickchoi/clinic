import React from 'react';
import './spa.css';
import border from './assets/border.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
class Spa extends React.Component{
  render(){
      return(
          <div className="Spa">
              <div className="container">
                  <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                     <h2 className="text-white spa-heading">SPA TREATMENTS</h2>
                     <div className="massage-img">
                     <img src={border}></img>
                     </div>
                    </div>
                  </div>
                  <div class="row  mt-3">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                      <div className="spa-img">
                      <img src={img1}/>
                      </div>
                        
                        <h3 className="text-white mb-2">Massages</h3> 
                        <p className="text-white">Often it seems to me to be an evil flower of nothingness,or else the cry of the world as it dies</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                    <div className="spa-img">
                      <img src={img2}/>
                      </div>
                   
                    <h3 className="text-white">Herbal Spa</h3>
                    <p className="text-white">Often it seems to me to be an evil flower of nothingness,or else the cry of the world as it dies</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                    <div className="spa-img">
                      <img src={img3}/>
                      </div>
                    
                    <h3 className="text-white">Dteox</h3>
                    <p className="text-white">Often it seems to me to be an evil flower of nothingness,or else the cry of the world as it dies</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                      <div className="spa-img">
                      <img src={img1}/>
                      </div>
                    <h3 className="text-white">Face Facial</h3>
                    <p className="text-white">Often it seems to me to be an evil flower of nothingness,or else the cry of the world as it dies</p>
                    </div>
                  </div>
              </div>
          </div>
      );
  }
}


export default Spa;
