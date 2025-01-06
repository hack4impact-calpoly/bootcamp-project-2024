import React from "react";
import style from "./about.module.css";
import Image from "next/image";

export default function About() {
    return (
      <main >
        <h1 className={style.aTitle}>About Me</h1>
        <div className={style.about}>
          <div className={style.aboutImage}>
            <Image src="https://i.imgur.com/2vWD43c.jpeg" alt="Round" width={200} height={200} className={style.roundImage} />
          </div>
          <div className={style.aboutText}>
            <p>
              My name is Andrew, Im a Computer Science major who hopes to work on <strong>AI</strong> in the future.
            </p>
            <p>
              Some of my hobbies include cooking AND exercising
            </p>
          </div>
        </div>
      </main>
    );
  }