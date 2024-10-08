import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">Sean M. Nguyen</Link>
      </h1>
      <nav className={styles.navList}>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
