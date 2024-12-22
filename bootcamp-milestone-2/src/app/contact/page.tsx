"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current) return;

    // Gather form data
    const name = (formRef.current["nameField"] as HTMLInputElement).value;
    const email = (formRef.current["email"] as HTMLInputElement).value;
    const message = (formRef.current["message"] as HTMLTextAreaElement).value;

    // Basic validation.
    if (!name || !email || !message) {
      setStatusMessage("Please fill out all fields!");
      return;
    }

    try {
      setStatusMessage("Sending...");
      const serviceID = "service_y2prtbm";
      const templateID = "template_d5y020a";
      const publicKey = "RiVNKpiIXFkHIIB-X";

      const templateParams = {
        from_name: name,
        to_name: "Kevin",
        reply_to: email,
        message,
      };

      // Using EmailJS (client library can also work on server, but see docs)
      await emailjs.send(serviceID, templateID, templateParams, { publicKey });
      setStatusMessage("Email sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Oops, something went wrong. Please try again later.");
    }
  };

  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="nameField">Name:</label>
        <input type="text" id="nameField" name="nameField" required />

        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <br />

        <button type="submit">Submit</button>
      </form>

      {statusMessage && <p>{statusMessage}</p>}
    </main>
  );
}
