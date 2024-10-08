import React from "react";
import styles from "./projectPreview.module.css";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/database/projectSchema";

export default function ProjectPreview(props: IProject) {
  return (
    <div className={styles.project}>
      <Link href={props.link}>
        <Image
          className={styles.projectImage}
          src={props.image}
          alt={props.imageAlt}
          width="150"
          height="200"
        />
      </Link>
      <div className={styles.projectDetails}>
        <p className={styles.projectName}>{props.title}</p>
        <p className={styles.projectDescription}>{props.description}</p>
        <p className={styles.projectDate}>
          Posted: {props.date?.toDateString()}
        </p>
        <Link href={props.link}>LEARN MORE</Link>
      </div>
    </div>
  );
}
