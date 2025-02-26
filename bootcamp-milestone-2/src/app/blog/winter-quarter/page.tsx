import React from "react";
import style from "../../page.module.css";
import blogPageStyle from "../blogPage.module.css";

export default function cherrim() {
  return (
    <div className={style.page}>
      <h1>Meet Pusheen</h1>
      <main>
          <div>
            <img className={blogPageStyle.blogImg} src="/pusheen.png" alt="Pusheen the Cat" />
            <p>Pusheen to heal the soul and provide motivation (more for me then whoever may be reading this haha)</p>
          </div>
      </main>
    </div>
  );
}
