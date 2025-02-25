"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close the menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navigation}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link href="/">
            <img
              src="images/Developer Logo.jpg"
              className={styles["nav-image"]}
              alt="an image of the A V logo"
            />
          </Link>
        </h1>

        {/* Hamburger Menu Wrapper */}
        <div className={styles.menuWrapper}>
          {/* Navbar Links */}
          <div
            className={`${styles.menu} ${menuOpen ? styles.open : styles.hidden}`}
          >
            <Link href="/" className={styles["nav-link"]} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/blog" className={styles["nav-link"]} onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/portfolio" className={styles["nav-link"]} onClick={closeMenu}>
              Portfolio
            </Link>
            <Link href="/resume" className={styles["nav-link"]} onClick={closeMenu}>
              Resume
            </Link>
            <Link href="/contact" className={styles["nav-link"]} onClick={closeMenu}>
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
