import React from "react";
import Image from "next/image";
import { BlogType } from "@/database/blogSchema";
import Link from "next/link";

export default function BlogPreview(props: BlogType) {
  console.log(props);
  console.log(props.content);
  return (
    <div>
      <h3> {props.title} </h3>
      <div>
        <Link href={`blog/${props.slug}`}>
          <Image
            src={props.image}
            alt={props.image_alt}
            width={500}
            height={500}
          ></Image>
        </Link>
        <p>{props.description}</p>
        <p>{new Date(props.date).toDateString()}</p>
      </div>
    </div>
  );
}
