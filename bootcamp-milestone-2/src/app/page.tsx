import BlogPreview from "./components/BlogPreview";
import { blogs } from "./blogData";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>About Me</h1>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <img src="/About_me_pic.jpg" alt="Anthony Mendoza profile image" />
        </div>
        <div className={styles.aboutText}>
          <p>
            I'm Anthony Mendoza, a passionate Computer Science major at
            California Polytechnic State University, San Luis Obispo, set to
            graduate in June 2026. With hands-on experience in software
            development through personal projects, I enjoy tackling complex
            problems, whether it's developing efficient algorithms or building
            innovative systems. I have a strong foundation in Python, and web
            development, and I'm always eager to learn new technologies. My goal
            is to continue growing as a developer while contributing to
            impactful projects that improve user experiences and solve
            real-world challenges.
          </p>

          <div className={styles.socialIcons}>
            <a
              href="mailto:anthonymendoza321123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/anthonymend"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Amend37"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <section className={styles.blogSection}>
        <h2>Latest Blog Posts</h2>
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <BlogPreview key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
