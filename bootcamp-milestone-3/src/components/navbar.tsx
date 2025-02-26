import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
      <nav className={style.navbar}>
        <h1 className="logo">
          <Link href="/" className={style.navLink}>
            My website
          </Link>
        </h1>
        <h1 className={style.pageTitle}>Blog</h1>
        <ul className={style.navList}>
          <li>
            <Link href="/" className={style.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className={style.navLink}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={style.navLink}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/resume" className={style.navLink}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className={style.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
}
