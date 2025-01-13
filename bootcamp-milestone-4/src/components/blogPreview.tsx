import React from "react";
import Blog from "@/database/blogSchema";
import style from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className={style.post}>
        <h3> {props.title} </h3>
        <div>
          <p>{props.description}</p>
          <p>{props.date.toString()}</p>
        </div>
      </div>
    </Link>
  );
}
