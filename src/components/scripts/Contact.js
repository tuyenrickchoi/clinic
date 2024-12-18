import React from 'react';
import '../styles/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <div className="container">
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">We would love to hear from you! Please reach out with any questions or comments.</p>
          <div className="contact-info">
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> contact@clinic.com</p>
          </div>
          <div className="contact-form">
            <h2>Contact Form</h2>
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
        </div>
      </div>
    );
  }
}

export default Contact;
