import React from 'react';
import '../styles/footer.css';
import footlog from '../../assets/footlog.png';
class Footer extends React.Component{
  render(){
      return(
          <div className="Footer">
            <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-logo">
                    <img src={footlog} class="footer-logo-img"/>
                    <p>Copyright @ 2024 BeatyClinic <br/>Privacy Policy</p>
                  </div>
                     
                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-menu">
                    <h5 className="text-white">Footer Menu</h5>
                    <ul class="footer-menu-ul">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About us</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/gallery">Gallery</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-contact-us">
                  <h5 className="text-white">Contact Us</h5>
                  <ul class="contact-us-li">
                      <li><i class="fa fa-home"> </i> 41/a west malibagh, Dhakle, Lkjdk Pakistan</li>
                      <li><a href="tel:+8801718542596"><i class="fa fa-tty"></i> +880-1718-542596</a></li>
                      <li><a href="mailto:info@companyname.com"><i class="fa fa-tty"></i> info@companyname.com</a></li>
                      <li><a href="www.companyname.com" target="_blank"><i class="fa fa-globe"></i> www.companyname.com</a></li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      );
  }
}


export default Footer;
