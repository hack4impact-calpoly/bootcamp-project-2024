"use client";

import React, { useState } from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles["about-image"]}>
        <img
          src="images/Developer Logo.jpg"
          className="home-page-logo"
          alt="an image of the A V logo"
        />
      </div>
      <div className={styles["about-text"]}>
        <p>
          Hey! My name is Ani Vishy, a developer and first-year computer science
          major at Cal Poly Slo.
        </p>
        <p>
          My favorite hobbies include going to the gym, competitively shooting
          Olympic recurve style archery, and programming!
        </p>
      </div>
    </div>
  );
}
