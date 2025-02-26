import React from "react";
import style from "./page.module.css";

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>Welcome to my personal website!</h1>
        <h2>My name is Emily Lai, I'm a 4th year comp sci at Cal Poly</h2>
        <p>
          I love video games and cute characters :D you can see more under the
          blogs page!
        </p>
      </div>
    </div>
  );
}
