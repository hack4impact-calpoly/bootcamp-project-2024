"use client";

import React, { useState } from "react";
import styles from "./downloadbutton.module.css";

export default function DownloadButton() {
  return (
    <div>
      <h1 className="resume">Resume</h1>
      <div className= {styles["button-container"]}>
        <a
          href="public/files/Anikait Vishwanathan Resume 10-25.pdf"
          download
          className= {styles["download-button"]}
        >
          Download
        </a>
      </div>
    </div>
  );
}
