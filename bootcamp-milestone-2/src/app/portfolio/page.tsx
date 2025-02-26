import React from "react";
import Link from "next/link";
import portfolio from "./portfolio.module.css";
import style from "../page.module.css";
import ActionAreaCard from "@/components/projectCard"


export default function Portfolio() {
  return (
    <div className={style.page}>
      <h1 >Portfolio</h1>
      <div className={style.portfolio}>
        <ActionAreaCard
          link="https://www.polyplanner.pro"
          image="/PPPicon.png"
          alt="Poly Planner Pro logo"
          heading="Poly Planner Pro"
          text="Ongoing Software Engineering capstone with Cal Poly's Engineering Student Services. Poly Planner Pro is a visual flowchart build that helps students plan their classes and verify degree requirements for the transition to the semester system."
        />
        <ActionAreaCard
          link=""
          image="/designSpecImg.png"
          alt="Wireframe of catalog collections app"
          heading="Catalog Collections Mobile app"
          text="Ongoing mobile app project that allows users log items in a collection (stickers, plushies, etc), and tag them for easy lookup. The image above is the wireframe"
        />
          </div>
        </div>
  );
}
