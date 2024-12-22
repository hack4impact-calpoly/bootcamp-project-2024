import React from "react";
import style from "./resume.module.css";
import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Mio&apos;s Resume</title>
      </Head>
      <main className={style.resumeContainer}>
        <h1 className={style.resumeTitle}>Mio&apos;s Resume</h1>
        <a href="/resume.pdf" download className={style.downloadLink}>
          Download Resume
        </a>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              Bachelor of Science in Computer Science
            </h3>
            <p className={style.entryInfo}>
              California Polytechnic State University, San Luis Obispo | Expected Graduation May 2025
            </p>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Cal Poly iter8 Marketing Coordinator</h3>
            <p className={style.entryInfo}>Cal Poly iter8 | June - Present</p>
            <p className={style.entryDescription}>
              Keeps track of social media accounts to boost presence at Cal Poly as well as
              outside Cal Poly. Works with the design team to coordinate posts for social media accounts.
            </p>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Skills</h2>
          <ul className={style.ResumeList}>
            <li>Python</li>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C</li>
            <li>Java</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>Personal Website</h3>
            <p className={style.entryDescription}>
              Created a personal website with HTML and CSS within a time span of a week.
            </p>
          </div>
        </section>

        <section className={style.section}>
          <h2 className={style.sectionTitle}>Coursework</h2>
          <ul className={style.ResumeList}>
            <li>CSC 365</li>
            <li>CSC 357</li>
            <li>DATA 301</li>
            <li>CSC 307</li>
            <li>CSC 349</li>
            <li>BUS 310</li>
          </ul>
        </section>
      </main>
      <footer className={style.footer}>
        © 2023 Mio&apos;s Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
