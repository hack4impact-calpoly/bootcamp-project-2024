import Link from "next/link";
import styles from "./contact.module.css";
import { useRef, useEffect, useState } from "react";

export default function Contact() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Contact</h1>
      <div className={styles.pageContent}>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <label className="all" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <label className="all" htmlFor="message">
            Message
          </label>
          <textarea
            className="all"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
        <div className={styles.links}>
          {/* <p>Email: snguy212@calpoly.edu</p> */}
          <div className={styles.linksButtons}>
            <Link
              href="https://www.linkedin.com/in/seanmnguyen/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
          <div className={styles.linksButtons}>
            <Link href="https://github.com/seanmnguyen" target="_blank">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
