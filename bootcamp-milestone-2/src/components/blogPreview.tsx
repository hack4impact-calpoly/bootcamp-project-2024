import React from "react";
import Image from "next/image";
import type { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";

type BlogPreviewProps = Pick<
  Blog,
  "title" | "description" | "image" | "date"
> & {
  imageAlt?: string;
};

export default function BlogPreview(props: BlogPreviewProps) {
  return (
    <div className={style.previewContainer}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.content}>
        <Image
          src={props.image || "/defaultImage.jpg"}
          alt={props.imageAlt || `Image for ${props.title}`}
          width={500}
          height={500}
          className={style.image}
        />
        <p className={style.description}>{props.description}</p>
        <p className={style.date}>{props.date}</p>
      </div>
    </div>
  );
}
