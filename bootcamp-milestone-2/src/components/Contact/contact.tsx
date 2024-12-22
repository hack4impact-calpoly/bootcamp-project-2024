"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ success: false, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ success: false, message: "All fields are required." });
      return;
    }

    try {
      const result = await emailjs.send(
        "service_z67ptgm",
        "template_pupakmn",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        "2JRzQ6XZAS2Qg427t"
      );

      if (result.status === 200) {
        setFormStatus({ success: true, message: "Email sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          success: false,
          message: "Failed to send email. Please try again."
        });
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setFormStatus({
        success: false,
        message: "An error occurred. Please try again."
      });
    }
  };

  return (
    <div>
      <form
        id="contact-form"
        className={style.contactForm}
        onSubmit={handleSubmit}>
        <label htmlFor="name" className={style.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={style.input}
        />

        <label htmlFor="email" className={style.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={style.input}
        />

        <label htmlFor="message" className={style.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={style.textarea}
        />

        <input type="submit" value="Submit" className={style.submitButton} />
      </form>

      {formStatus.message && (
        <div
          className={
            formStatus.success ? style.successMessage : style.errorMessage
          }>
          {formStatus.message}
        </div>
      )}
    </div>
  );
}
