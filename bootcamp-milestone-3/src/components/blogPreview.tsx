import React from "react";
import Blog from "@/database/blogSchema";
import style from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    // include image in divs
    <Link href={`/blog/${props.slug}`}>
      <div className={style.post}>
        <h3> {props.title} </h3>
        <div>
          <p>{props.description}</p>
          <p>{props.date}</p>
          <img src={props.image} />
        </div>
      </div>
    </Link>
  );
}