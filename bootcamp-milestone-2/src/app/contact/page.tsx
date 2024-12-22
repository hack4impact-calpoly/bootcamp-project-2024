'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./contact.module.css";

const ContactPage = () => {
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Collect form data
    const form = e.target as HTMLFormElement;
    const formData = {
      to_name: 'Mio', 
      from_name: form['name'].valueOf, // Get value of name field
      message: form['message'].value, // Get value of message field
    };

    console.log('Preparing to send email with data:', formData);

    try {
      const result = await emailjs.send(
        'service_0myvm2k',   // EmailJS service ID
        'template_3v4nxrm',  // EmailJS template ID
        formData,
        'iL4LZOGlyB5AUufx-'    // EmailJS public key
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
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <form onSubmit={sendEmail} className={styles.form}>
        <label className={styles.label}>
          Your Name:
          <input type="text" name="name" required className={styles.input} />
        </label>
        <label className={styles.label}>
          Message:
          <textarea name="message" required className={styles.textarea}></textarea>
        </label>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
      {status && (
        <p className={`${styles.status} ${status.includes('successfully') ? styles.success : styles.error}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactPage;
