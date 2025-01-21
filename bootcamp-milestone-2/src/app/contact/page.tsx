// pages/contact.tsx

import Head from "next/head";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>My Personal Website - Contact</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Contact Me!</h1>

        <form
          id={styles.contactForm}
          action="https://formspree.io/f/mzzbpkab"
          method="POST"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <input type="submit" value="Submit" />
        </form>

        <h2 className={styles.socialTitle}>
          Connect with me on these platforms:
        </h2>
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/jjonathanlauu"
            target="_blank"
            className={styles.linkedin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0077B5"
              width="48px"
              height="48px"
            >
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.9 19.9H5.7V8.8h3.2v11.1zM7.3 7.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.6 12.6h-3.2v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H10.8V8.8h3.1v1.5h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5v6.4z" />
            </svg>
          </a>
          <a
            href="https://github.com/jjonathanlauu"
            target="_blank"
            className={styles.github}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#333"
              width="48px"
              height="48px"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.2-1.6 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
            </svg>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2024 My Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
