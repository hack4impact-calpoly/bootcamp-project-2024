import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"

    <header className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/">Saurish&apos;s Personal Website</Link>
      </h1>
      <nav>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <ul className={style["nav-list"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/about">Contact Me</Link>
          </li>
        </ul>
        {/* More Links ... */}
      </nav>
    </header>
  );
}
