import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <div className={style.logoContainer}>
        <img src="/logo.png" alt="Logo" className={style.logo} />
      </div>
      <nav className={style.nav}>
        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="/blogs" className={style.link}>
          Blogs
        </Link>
        <Link href="/resume" className={style.link}>
          Resume
        </Link>
        <Link href="/portfolios" className={style.link}>
          Portfolios
        </Link>
        <Link href="/contact" className={style.link}>
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
