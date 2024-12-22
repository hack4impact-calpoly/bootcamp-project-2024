import React from 'react';
import Blog from "../database/blogSchema";
import Image from 'next/image';
import style from './blogPreview.module.css';

// was used for the blog preview
export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
        <Image src={props.image} alt={props.title} width={500} height={500} />
        <p>{props.description}</p>
        <p>Posted on: {new Date(props.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
