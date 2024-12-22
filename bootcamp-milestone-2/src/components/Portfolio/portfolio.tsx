import React from "react";
import style from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/database/projectSchema";

export default function Portfolio(props: Project) {
  return (
    <div>
      <div className={style.project}>
        <Image
          className={style.projectImage}
          src={props.image}
          alt={props.image_alt}
          width={600}
          height={500}
        />
        <div className={style.projectDetails}>
          <Link href={"/portfolio/" + props.slug}>
            <p className={style.projectName}>
              <strong>{props.name}</strong>
            </p>
          </Link>
          <p className={style.projectDescription}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
