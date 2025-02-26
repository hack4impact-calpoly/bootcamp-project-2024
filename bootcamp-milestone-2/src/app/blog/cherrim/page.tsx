import React from "react";
import style from "../../page.module.css";
import blogPageStyle from "../blogPage.module.css";

export default function cherrim() {
  return (
    <div className={style.page}>
      <h1>First blog</h1>
      <main>
          <div>
            <img className={blogPageStyle.blogImg} src="/Cherrim.png" alt="Cherrim" />
            <p>This is Cherrim :) My favorite Pokemon</p>
          </div>
      </main>
    </div>
  );
}
