import React from 'react';
import './herobanner.css';
import girl from './assets/girls.png';
class HeroBanner extends React.Component{
  render(){
      return(
          <div className="HeroBanner">
            <div className="container">
                <div className="row herro-banner-content">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 style-content">
                     <h1>Acne solution facial</h1>
                      <p>Often it seems to me to be an evil flower of nothingness,or else the cry of the world as it dies</p>
                      </div>
                     
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="herobanner-img">
                    <img src={girl} className="img-fluid"/>
                    </div>
                  
                  </div>
                </div>
            </div>
          </div>
      );
  }
}


export default HeroBanner;
