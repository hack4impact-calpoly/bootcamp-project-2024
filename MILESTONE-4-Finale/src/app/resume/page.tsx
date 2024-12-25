export default function Resume() {
  return (
    <div>
      <h1 className="page-title">Resume</h1>
      <a href="./resume.docx" download className="resume">
        Download
      </a>
      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <p>
              California Polytechnic State University, San Luis Obispo (Cal
              Poly)
              <br />
              <strong>Bachelor of Science in Computer Science</strong> -
              <em>2028 (Expected)</em>
              <br />
              GPA: 4.00
            </p>
            <p>
              Indian Institute Of Technology, Madras
              <br />
              <strong>Diploma in Data Science</strong> -<em>2025 (Expected)</em>
              <br />
              CGPA: 10.00
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Projects</h2>
          <ol>
            <li>
              <strong>MLP & Convolutional Type Neural Networks</strong> (Java,
              No External Libraries, Open-sourced)
            </li>
            <li>
              <strong>Quick Executioner</strong> (Desktop App, Open-sourced)
            </li>
            <li>
              <strong>Animation Engine For Math YouTube Channel</strong>
              (Java, Personal Project)
            </li>
            <li>
              <strong>Java 3D Renderer Powered By Geometric Algebra</strong>
              (Open-sourced)
            </li>
            <li>
              <strong>
                Store Kiosk & Database Management System (Simulation)
              </strong>
              (Python & SQL, School Project)
            </li>
          </ol>
        </section>

        <section className="section">
          <h2 className="section-title">Awards</h2>
          <ul>
            <li>
              <strong>SOF Math Contest State Rank 1</strong>- Scored 1st Rank in
              12th grade SOF Math Contest, in the state of Andhra Pradesh, India
            </li>
            <li>
              <strong>Computer Science Topper</strong>- Awarded for achieving A1
              Category Percentage (96%) in the 12th Grade National CBSE Exam for
              Computer Science
            </li>
            <li>
              <strong>Scaler National Coding League 2024</strong>- Awarded for
              ranking among Top 100 out of 17,060 teams
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <p>
            <strong>Programming Languages:</strong>
          </p>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Arduino</li>
          </ul>

          <p>
            <strong>Software & Other Tools:</strong>
          </p>
          <ul>
            <li>Eclipse</li>
            <li>PyCharm</li>
            <li>MS Visual Studios</li>
            <li>ChatGPT</li>
            <li>Desmos</li>
            <li>Wolfram Alpha</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Interests</h2>
          <ul>
            <li>Working on Personal Projects</li>
            <li>Competitive Programming</li>
            <li>Leetcode (Daily Challenges)</li>
            <li>Studying Higher Mathematics</li>
            <li>Biking</li>
            <li>Video Editing</li>
            <li>Video Games</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
