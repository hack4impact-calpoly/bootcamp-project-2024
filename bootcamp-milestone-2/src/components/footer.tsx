import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>© 2024 Nolan's Website | All Rights Reserved</p>
      <br />
      <img
        className={style.footerImage}
        src="/images/meMidairTransparent.png"
        alt="Footer Logo"
      />
    </footer>
  );
}
