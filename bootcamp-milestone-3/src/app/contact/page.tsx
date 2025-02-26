import React from "react";
import contactStyle from "./contact.module.css";
import style from "../page.module.css";

export default function Contact() {
  return (
    <div>
      <h1 className={style.page}>Contact me!</h1>
      <main className={contactStyle.contact}>
        {/* <form id="contact-form"> */}
          <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
          </div>

          <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" />
          </div>

          <div>
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message"></textarea>
          </div>

          <div>
          <input type="submit" value="Submit" />
          </div>
        {/* </form> */}
      </main>
    </div>
  );
}
