import React from 'react';
import '../styles/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <div className="container">
          <h1 className="text-center spa-heading">Contact Us</h1>
          <p className="text-center">We would love to hear from you! Please reach out with any questions or comments.</p>
          <div className="contact-info">
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> contact@clinic.com</p>
          </div>
          <div className="contact-form ">
            <h2 className="spa-heading">Contact Form</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Google Maps Section */}
          <h2 className="text-center ">....</h2>
          <div className="map-container">
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.980124653815!2d106.6772195!3d10.7733464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e3b73d204aab42a!2zUGjDsm5nIGtow6FtIGNodXnDqm4ga2hvYSB0aOG6qW0gbeG7uSBBTEVHQQ!5e0!3m2!1svi!2s!4v1673088246933!5m2!1svi!2s"
    allowFullScreen=""
    loading="lazy"
    title="Google Map"
  ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
