'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Collect form data
    const form = e.target as HTMLFormElement;
    const formData = {
      to_name: 'Mio', // Replace with the recipient's name
      from_name: form['name'].valueOf, // Get value of name field
      message: form['message'].value, // Get value of message field
    };

    console.log('Preparing to send email with data:', formData);

    try {
      const result = await emailjs.send(
        'service_0myvm2k',   // Replace with your EmailJS service ID
        'template_3v4nxrm',  // Replace with your EmailJS template ID
        formData,
        'iL4LZOGlyB5AUufx-'    // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setStatus('Email sent successfully!');
      form.reset(); // Clear the form on success
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error sending email. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            required
            style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            required
            style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px', minHeight: '100px' }}
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            display: 'block',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
      {status && (
        <p style={{ marginTop: '20px', color: status.includes('successfully') ? 'green' : 'red' }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactPage;
