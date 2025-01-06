"use client";

import React, { useRef, useState } from "react";
import styles from "../Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", 
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" 
      );

      console.log("EmailJS result:", result.text);
      setStatusMessage("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage("Error sending message. Please try again later.");
    }
  }

  return (
    <main className={styles.contactPage}>
      <h1 className={styles.contactTitle}>Contact</h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            cols={20}
            rows={2}
            className={styles.textAreaField}
            required
          ></textarea>
        </div>

        <div className={styles.submitGroup}>
          <input type="submit" value="Send" className={styles.submitButton} />
        </div>

        {statusMessage && <p style={{ marginTop: "1rem" }}>{statusMessage}</p>}
      </form>
    </main>
  );
}
