import React from "react";
import { Blog } from "@/typings/blog"
import style from "./blogPreview.module.css"

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    // include image in divs
    <div className={style.post}>
      <h3> {props.name} </h3>
      <div>
        <p>{props.description}</p>
        <p>{props.posted}</p>
        <img src={props.image}/>
      </div>
    </div>
  );
}

