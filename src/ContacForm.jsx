// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_74llsgm';
    const templateId = 'template_m2eoxdx';
    const userId = 'KbOjRin1VwD_v8T19';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Correo enviado con éxito', response);
        alert('Correo enviado con éxito');
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
      });
  };

  return (
    <section id="contactForm" className="container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="from_name" value={formData.from_name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="from_email" value={formData.from_email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
