"use client"; //client component

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email, message }),
      // });

      const EMAIL_JS_SERVICE_ID = "service_p8j5x0j";
      const EMAIL_JS_TEMPLATE_ID = "template_b7682mh";
      const EMAIL_JS_PUBLIC_KEY = "UdF-oso8jxuFTppKF";

      emailjs.init(EMAIL_JS_PUBLIC_KEY);

      const templateParams = {
        to_name: "Nolan",
        from_name: name,
        message: message,
        reply_to: email,
      };

      await emailjs
        .send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams)
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setStatus("Message sent successfully!");
          },
          (error) => {
            console.error("Failed to send email:", error);
            setStatus("Failed to send message.");
          }
        );

      // if (response.ok) {
      //   setStatus("Message sent successfully!");
      //   setName("");
      //   setEmail("");
      //   setMessage("");
      // } else {
      //   setStatus("Failed to send message. Please try again.");
      // }
    } catch (error) {
      console.error(error);
      setStatus(`An error occurred. Please try again. ${error}`);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem" }}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          style={{ marginBottom: "1rem", padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "rgb(216, 97, 37)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}
