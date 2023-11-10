// eslint-disable-next-line no-unused-vars
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contactForm">
      <h2>Contact Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="form-control" rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
