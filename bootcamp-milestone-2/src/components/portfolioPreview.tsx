import React from "react";
import Image from "next/image";
import type { Portfolio } from "@/app/portfolioData";
import style from "./portfolioPreview.module.css";


export default function PortfolioPreview(props: Pick<Portfolio, 'title' | 'description' | 'image'>) {
  return (
    <div className={style.previewContainer}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.content}>
        <Image
          src={props.image || "/defaultImage.jpg"}
          alt={props.title || "Portfolio image"}
          width={500}
          height={500}
          className={style.image}
        />
        <p className={style.description}>{props.description}</p>
      </div>
    </div>
  );
}