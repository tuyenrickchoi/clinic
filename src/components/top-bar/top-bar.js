import React from 'react';
import './top-bar.css';
import logo from './assets/logo.png';
class TopBar extends React.Component{
    render(){
        return(
            
                <div className="topbr">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <div className="logo-img">
                      <img src={logo} />
                      </div>
                     
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <a class="nav-link text-white" href="#">Home</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="#">Services</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="#">Price List</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="#">Gallery</a>
      </li>
      <li class="nav-item">
                    <a class="nav-link text-white" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact Us</a>
                    </li>
    </ul>
  </div>
</nav>

                    {/* <nav class="navbar navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
                    <ul class="navbar-nav">

                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Home</a>

                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Price List</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact Us</a>
                    </li>
                    </ul>
                    </div>
                    </nav> */}

                    </div>
                </div>
                </div>
                </div>
            
        );
    }
}

export default TopBar;
