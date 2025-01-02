import React from 'react';
import '../styles/herobanner.css';
import Spa from './spa';
import Massage from './massage';
import girl from '../../assets/girls.png';
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
                    <img src={girl} className="img-fluid" alt=""/>
                    
                    </div>

                  </div>
                </div>
                
            </div>
            <Spa />
            <Massage />
          </div>
      );
  }
}


export default HeroBanner;
