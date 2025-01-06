import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
  
    <header className={style.header} >
      <h1> Andrews Personal Website </h1>
      <nav>
        
        <Link href="/Home" >Home</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/Resume" >Resume</Link>
        <Link href="/Portfolio" >Portfolio</Link>
        <Link href="/Contact" >Contact Me</Link>
      </nav>
    </header>
  );
}