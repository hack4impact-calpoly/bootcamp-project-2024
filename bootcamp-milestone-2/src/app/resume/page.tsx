import Link from "next/link";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h1 className={styles.pageTitle}>Resume</h1>
      <Link
        className={styles.download}
        href="/College Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download Resume
      </Link>
      <br />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            Bachelor of Science in Computer Science, Concentration in AI and
            Machine Learning
          </h3>
          <p className={styles.entryInfo}>
            California Polytechnic State University, San Luis Obispo | Expected
            Graduation June 2026
          </p>
        </div>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.entry}>
          <div className={styles.sectionHeading}>
            <div className={styles.sectionHeadingRow}>
              <h3 className={styles.entryTitle}>Protech Technologies, Inc.</h3>
              <p className={styles.entryInfo}>
                Project Manager <em>(May 2023 - Present)</em>
              </p>
            </div>
          </div>
          <ul className={styles.entryDescription}>
            <li>
              Produces application to digitize timecards, calculating working
              hours, time off, and attendance for 50+ employees
            </li>
            <li>
              Delegates interns on an ongoing UI project to integrate employee
              information and forms into a mobile app
            </li>
            <li>
              Manages software project to streamline Return Merchandise
              Authorization process, automating 80% of the system
            </li>
          </ul>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Wyzant</h3>
          <p className={styles.entryInfo}>
            Private Tutor <em>(June 2020 - Present)</em>
          </p>
          <ul className={styles.entryDescription}>
            <li>
              Optimizes strategies for music theory, economics, statistics,
              chemistry, mathematics, and IB course concepts
            </li>
            <li>
              Formulates weekly lesson plans, practice assignments, and
              exercises catered to each student's specific needs
            </li>
            <li>
              Utilizes data analysis and client acquisition management to
              develop customer retention by 160%
            </li>
            <li>
              Engages with 30+ students online and in person to inspire
              educational passion and subject comprehension
            </li>
          </ul>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>MTANG Eye Care</h3>
          <p className={styles.entryInfo}>
            Junior Software Developer <em>(May 2020 - Present)</em>
          </p>
          <ul className={styles.entryDescription}>
            <li>
              Implements strategies for cataloging inventory, confirming
              insurance eligibility and appointment confirmation, billing,
              verifying insurance disbursements, and organizing expenses,
              increasing secretarial productivity by 150%
            </li>
            <li>
              Develops Python program to parse 2+ disbursement files into a
              readable database, enhancing efficiency by 268%
            </li>
            <li>
              Programs app to merge 100s of patient data into a comprehensive
              monthly report, reducing workload by 89%
            </li>
            <li>
              Analyzes Google Business Profile over 3 years to customize
              company's website and improve interactions by 150%
            </li>
          </ul>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Boeing</h3>
          <p className={styles.entryInfo}>
            Project Manager <em>(June 2021 - July 2023))</em>
          </p>
          <ul className={styles.entryDescription}>
            <li>
              Led a team of 4 engineers to design model thrust structures,
              improving performance of previous model by 594%
            </li>
            <li>
              Presented a Systems Tool Kit 12 analysis comparing the efficacy of
              emergency relief programmes in Taiwan
            </li>
            <li>
              Utilized DonkeyCar software to research deep learning neural
              networks alongside an internal team of 7 interns
            </li>
            <li>
              Applied operational knowledge of aerospace mechanical systems to
              design a space debris removal proposal
            </li>
          </ul>
        </div>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Recipe Book</h3>
          <p className={styles.entryInfo}></p>
          <p className={styles.entryDescription}>
            Pioneered a digital GUI cookbook catalog with 150+ recipes to meet
            the design specifications of the client, benefitting communication,
            efficiency, and organization in a private culinary sector within my
            hometown by 180%
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Unix Tar</h3>
          <p className={styles.entryInfo}></p>
          <p className={styles.entryDescription}>
            Implemented a file directory archival tool from scratch in C to
            recreate the Unix tar command in 1.4k lines of code
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Lossless Compression Tool</h3>
          <p className={styles.entryInfo}></p>
          <p className={styles.entryDescription}>
            Designed lossless file compression tool utilizing Huffman encoding
            in C and Python, achieving up to 92% efficiency
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Forest Path Finder Game - Java</h3>
          <p className={styles.entryInfo}></p>
          <p className={styles.entryDescription}>
            Refactored a deprecated code base for a Forest Path Finder game in
            Java, reducing redundancy by 48% using OOP
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            AI Research - DeepMind's AlphaStar
          </h3>
          <p className={styles.entryInfo}></p>
          <p className={styles.entryDescription}>
            Composed a research paper on the implementation of machine learning
            techniques in DeepMind's AlphaStar program. This explored future
            applications of AI in complex predictions over long data sequences
          </p>
        </div>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Coursework</h2>
        <ul className={styles.courseList}>
          <li>Data Structures</li>
          <li>Object-Oriented Programming</li>
          <li>Systems Programming</li>
          <li>Software Engineering</li>
          <li>Discrete Structures</li>
        </ul>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.skillList}>
          <li>
            <strong>Programming Languages: </strong>Java, Python, Assembly, C,
            JavaFX, JavaScript, HTML, CSS, NodeJS, React Native
          </li>
          <li>
            <strong>Systems/Software: </strong>Git, SVN, Unix, Linux, MacOS
          </li>
          <li>
            <strong>Applications: </strong>Microsoft 365, G-Suite, Systems Tool
            Kit 12, Android Studio
          </li>
          <li>
            <strong>Languages: </strong>English (Native), Spanish (Proficient)
          </li>
        </ul>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Activities</h2>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>Academic Decathlon</h3>
          <p className={styles.entryInfo}>
            Contestant and Assitant Coach <em>February 2020 - Present</em>
          </p>
          <ul className={styles.entryDescription}>
            <li>
              Participating in regional decathlon and state heptathlon
              competitions in the honors category against 80+ schools
            </li>
            <li>
              Balancing comprehension and time management across 10 disciplines
              for individual and team competition
            </li>
            <li>
              Coaching decathletes and devising lesson plans for Music,
              Economics, Mathematics, Speech, Interview, and Essay
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
