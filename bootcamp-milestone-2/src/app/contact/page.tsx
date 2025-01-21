// src/app/contact/page.tsx
import React from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Contact</h1>
      <form
        className={styles.contactForm}
        action="https://formspree.io/f/xlderoqz"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="_replyto" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={5} required></textarea>

        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
