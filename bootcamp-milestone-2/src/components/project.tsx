import React from "react";
import Image from "next/image";
import Comment from "./Comment";
import { ProjectType } from "@/database/projectSchema";
import ProjectCommentForm from "./projectCommentForm";

export default function Project(props: ProjectType) {
  console.log(props.date);
  return (
    <div>
      <h3> {props.name} </h3>
      <div>
        <Image
          src={props.image}
          alt={props.image_alt}
          width={500}
          height={500}
        ></Image>
        <p>{props.description}</p>
        <p>{new Date(props.date).toDateString()}</p>
      </div>
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <ProjectCommentForm project={props.name} />
    </div>
  );
}
