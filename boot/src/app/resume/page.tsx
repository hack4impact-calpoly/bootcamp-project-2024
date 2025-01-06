"use client";
import React from "react";
import styles from "../Resume.module.css";

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.resume}>
        <h1 className={styles.resumeTitle}>Resume</h1>

        <a href="sssssss.pdf" download="" className={styles.down}>
          Download Resume
        </a>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Bachelors of Science in Computer Science
            </h3>
            <p className={styles.entryInfo}>California San Luis Obispo</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CourseWork</h2>
          <ul className={styles.courseList}>
            <li>Data Structures and Algorithms</li>
            <li>Course</li>
            <li>Course</li>
            <li>Course</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <ul className={styles.skillList}>
            <li>CSS</li>
            <li>HTML</li>
            <li>JS</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Sudoku Solver</h3>
            <p className={styles.entryInfo}>
              Created a solver that used backtracking to solve all sudokus
            </p>
            <p className={styles.entryExperience}>
              Used Python and GitHub to work on multiple test cases for sudoku
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Hack4Impact Creator/CEO/ETC
            </h3>
            <p className={styles.entryInfo}>
              Single-handedly created Hack4Impact (not satire)
            </p>
            <p className={styles.entryDescription}>Chilling</p>
          </div>
        </section>
      </div>
    </main>
  );
}
