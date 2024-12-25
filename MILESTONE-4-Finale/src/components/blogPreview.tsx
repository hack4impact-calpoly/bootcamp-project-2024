import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";
import Blog from "@/database/blogSchema";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style["blog-element"]}>
      <Link href={`/blogs/${props.slug}`}>
        <h3>{props.title}</h3>
        <div className={style["blog-img"]}>
          <Image src={props.image} alt={"alt"} width={300} height={300}></Image>
        </div>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
}
