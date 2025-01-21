import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">JL's Website</Link>
      </h1>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}