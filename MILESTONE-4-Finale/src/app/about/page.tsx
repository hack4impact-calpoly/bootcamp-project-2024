"use client";
import style from "./page.module.css";
import React from "react";
import emailjs from "emailjs-com";

emailjs.init("DYYminpM0NpcL3USL");

export default function contactMe() {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    //Use emailJS to send email
    emailjs
      .sendForm(
        "service_8ajjsfa",
        "template_s74splj",
        e.target as HTMLFormElement
      )
      .then(
        //Alert User based on outcome of email send request
        (response) => {
          console.log("Success:", response);
          alert("Successfuly sent!");
          window.location.reload();
        },
        (error) => {
          console.error("Failed:", error);
        }
      );
  };

  //Name, email, Request Type, Query
  return (
    <div>
      <h1 className="page-title">Contact Me</h1>
      <form onSubmit={sendEmail} id={style["contact-form"]}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <br />
        <label htmlFor="select">Reason For Contact</label>
        <select id="select" name="select">
          <option value="question">Question</option>
          <option value="offer">Offer</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="query">Query</label>
        <textarea
          id="query"
          name="query"
          placeholder="Type Here"
          required
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
