import styles from "./page.module.css";

export default function ResumePage() {
  return (
    <>
      <main>
        <div className={styles.pageTitle}>
          <h1>Anthony Mendoza</h1>
          <p>
            | (510)660-2461 |{" "}
            <a href="mailto:anthonymendoza321123@gmail.com">
              anthonymendoza321123@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="http://linkedin.com/in/anthonymend"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="http://github.com/Amend37"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |
          </p>
        </div>

        <div className={styles.resume}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <p>
              <strong>California Polytechnic State University</strong> – San
              Luis Obispo, CA
              <br />
              Bachelor of Arts in Computer Science, June 2026
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p>
              <strong>Mobile Technologies Inc.</strong> – Richmond, CA
              <br />
              June 2024 – Present
            </p>
            <ul>
              <li>
                Provided technical support and troubleshooting, ensuring high
                availability and reliability of MTI's products and services,
                leading to improved service delivery and customer satisfaction.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <ul>
              <li>
                <strong>Inter-Process Communication and Echo Server</strong> |
                Vim, C, UNIX, SSH, Git – March 2024
                <ul>
                  <li>
                    Developed a Unix-based application utilizing pipes and child
                    processes for inter-process communication (IPC) between
                    client and server.
                  </li>
                  <li>
                    Gained experience with system calls, low-level programming,
                    and resource management in the UNIX environment.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Java Virtual Model Modding</strong> | Java, JUnit,
                PImage – September 2023
                <ul>
                  <li>
                    Developed an efficient A* pathfinding algorithm to enhance
                    the movement and navigation of in-game entities.
                  </li>
                  <li>
                    Designed and introduced new characters, objects, and
                    environments to enrich gameplay.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Weather Monitoring System</strong> | Python, Zapier,
                Adafruit IO – June 2024
                <ul>
                  <li>
                    Integrated with Zapier to automate daily weather
                    notifications, using sensor data for personalized forecasts.
                  </li>
                  <li>
                    Leveraged Adafruit IO and weather APIs for real-time
                    environmental monitoring and data reporting.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Involvement</h2>
            <ul>
              <li>
                <strong>
                  Society of Hispanic Professional Engineers (SHPE Member)
                </strong>
                – Focused on leadership, outreach, and community engagement.
              </li>
              <li>
                <strong>ColorCoded by ColorStack (Member)</strong> – Provided
                mentorship and networking opportunities for underrepresented
                students in tech.
              </li>
              <li>
                <strong>HyperSpeed (Software Developer Team Member)</strong> –
                Programmed a drone using ArduPilot to enhance sensor control and
                mobility.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <p>
              <strong>Languages:</strong> Java, Python, C, HTML/CSS, Assembly
            </p>
            <p>
              <strong>Frameworks:</strong> ArduPilot, Unity, React, Pytest,
              JUnit
            </p>
            <p>
              <strong>Developer Tools:</strong> Git, VS Code, PyCharm, IntelliJ
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
