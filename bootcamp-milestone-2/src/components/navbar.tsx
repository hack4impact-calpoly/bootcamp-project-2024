import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
      <h1> Rachana&apos;s Personal Website </h1>
      <nav className="navbar">
            <ul className={style.navList}>
                <li className={style.navLinks}><Link href="/">Home</Link></li>
                <li className={style.navLinks}><Link href="/blog">Blog</Link></li>
                <li className={style.navLinks}><Link href="/portfolio">Portfolio</Link></li>
                <li className={style.navLinks}><Link href="/resume">Resume</Link></li>
                <li className={style.navLinks}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
}