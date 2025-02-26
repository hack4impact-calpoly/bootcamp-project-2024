import React from "react";
import style from "../../page.module.css";
import blogPageStyle from "../blogPage.module.css";

export default function cherrim() {
  return (
    <div className={style.page}>
      <h1>Maltese</h1>
      <main>
          <div>
            <img className={blogPageStyle.blogImg} src="/maltese-poke.png" alt="Maltese and Golden Retriever" />
            <p>These dogs are from a brand called Maltese (线条小狗 in Chinese), and yes Maltese is a existing dog breed lol, it makes these guys hard to Google :/</p>
            <p>The brand features a Maltese and Golden Retriever</p>
            <p>Both are seen across emojis/stickers on many platforms, as well as merchendise</p>
          </div>
      </main>
    </div>
  );
}
