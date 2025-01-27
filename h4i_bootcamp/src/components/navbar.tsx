import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar} >
      <nav className="navbar">
        <h1 className="logo"><Link href="/">Deep's Website</Link></h1>
        <ul className="nav-list">
            <Link href="/">Home</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
        </ul>
    </nav>
    </header>
  );
}