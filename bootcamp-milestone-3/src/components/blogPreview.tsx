import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "@/app/blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  const { title, date, description, image, imageAlt, slug } = props;

  return (
    <div className={style.div}>
      <div className={style.contentWrapper}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.date}>{date}</p>
        <p className={style.textCenter}>{description}</p>
        <Link href={`/blog/${slug}`} className={style.link}>
          Read full post
        </Link>
      </div>
      <div className={style.imgWrapper}>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}