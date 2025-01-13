import React from "react";
import style from "./portfolioEntry.module.css";
import PortfolioEntry from "@/database/portfolioEntrySchema";

export default function BlogPreview(props: PortfolioEntry) {
  return (
    <div className={style.entry}>
      <h3> {props.title} </h3>
      <div>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
