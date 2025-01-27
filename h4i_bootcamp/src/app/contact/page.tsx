'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import emailjs from 'emailjs-com';
 
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Handle form data change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form and send email
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all fields.');
      return;
    }

    setFormError('');

    const serviceID = "service_y8tr5m4";
    const templateID = "template_pwjbyiu";
    const userID = "mYFS5OYR3HzuLhYhV";

    // Send email via EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully', response);
        setFormSuccess(true); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setFormError('Failed to send email. Please try again.');
      });
  };

  return (
    <div>
      <Navbar />

      <h1 className="contact">Contact Us</h1>
      <div className="contact-container">
        <div className="about-image">
          <p>Phone: 209-666-7789</p> 
          <p>Email: ksingh63@calpoly.edu</p>  
        </div>
      </div>

      {formError && <div className="error">{formError}</div>}
      {formSuccess && <div className="success">Your message has been sent successfully!</div>}

      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          required
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          rows={5} 
          value={formData.message} 
          onChange={handleInputChange} 
          required
        />

        <input type="submit" value="Submit" className="button" />
      </form>

      <footer className="footer">© 2023 Deep's Website | All Rights Reserved</footer>
    </div>
  );
}
