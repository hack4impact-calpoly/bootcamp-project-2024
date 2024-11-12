import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image'; // For Next.js
import { Blog } from "../blogData"; // importing the type/interface we defined earlier

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3> {props.title} </h3>
      <div>
		<Image src={props.image} alt="img" width={500} height={500} className = "portfolio" />
        <p>{props.description}</p>
		<p>{props.date}</p>
      </div>

	  </div>
  );
}
      



