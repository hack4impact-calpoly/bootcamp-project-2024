import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>My Portfolio</h1>

        {/* First Project: Tetris */}
        <div className={styles.project}>
          <Link href="/tetris">
            <Image
              src="/mytetris.png"
              alt="Screenshot of my personal project"
              width={600}
              height={750}
              layout="intrinsic"
            />
          </Link>
          <div className={styles.projectDetails}>
            <p className={styles.projectName}>
              <strong>Tetris Project</strong>
            </p>
            <p className={styles.projectDescription}>
              This is my take on Tetris. I first established the playing field
              by creating the grid. Then, I implemented seven different blocks.
              I also implemented the use of arrow keys to move and rotate the
              pieces. This project was created using Python and the Pygame
              library.
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <Link href="/virtual-world">
            <Image
              src="/virtualworldsc.png"
              alt="Screenshot of my Virtual World project"
              width={800}
              height={450}
              layout="intrinsic"
            />
          </Link>
          <div className={styles.projectDetails}>
            <p className={styles.projectName}>
              <strong>Virtual World Project</strong>
            </p>
            <p className={styles.projectDescription}>
              The Virtual World project is a Java-based application that creates
              an interactive environment where users can explore and interact
              with various elements. It includes character movement, object
              interaction, and environmental features. I used Object-Oriented
              Programming (OOP) principles to design and manage game elements,
              and implemented pathfinding algorithms such as A* to guide NPCs
              around obstacles.
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2024 My Personal Website | All Rights Reserved |
      </footer>
    </>
  );
}
