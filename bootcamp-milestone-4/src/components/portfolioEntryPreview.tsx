import React from "react";
import style from "./portfolioEntry.module.css";
import PortfolioEntry from "@/database/portfolioEntrySchema";
import Link from "next/link";

export default function PortfolioEntryPreview(props: PortfolioEntry) {
  return (
    <Link href={`/portfolio/${props.slug}`}>
      <div className={style.entry}>
        <h3> {props.title} </h3>
        <div>
          <p>{props.description}</p>
          <p>{props.date.toString()}</p>
        </div>
      </div>
    </Link>
  );
}
