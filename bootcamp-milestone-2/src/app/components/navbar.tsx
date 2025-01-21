import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <div className={style.logo}>
        <h1>Anthony's Personal Website</h1>
      </div>
      <nav className={style.navList}>
        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="/portfolio" className={style.link}>
          portfolio
        </Link>
        <Link href="/resume" className={style.link}>
          Resume
        </Link>
        <Link href="/contact" className={style.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
