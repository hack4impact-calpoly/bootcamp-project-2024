import React from "react";
import style from "../page.module.css";

export default function Resume() {
  return (
    <div className={style.page}>
      <h1>Resume</h1>
      <a href="./EmilyLaiResume.pdf" download>
        Download my resume
      </a>
      <main className="page-title">
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <p className="entry-info">
                <b>4th year undergrad in computer science</b>
                <p>California Polytechnic State University</p>
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <div className="entry">
              <ul>
                <li>Data Structures</li>
                <li>Software Engineering I/II</li>
                <li>Interactive Entertainment Engineering</li>
              </ul>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <div className="entry">
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Git</li>
              </ul>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Activities</h2>
            <div className="entry">
              <ul>
                <li>Cal Poly Gender Inclusive Gaming</li>
                <li>Women in Software and Hardware</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
