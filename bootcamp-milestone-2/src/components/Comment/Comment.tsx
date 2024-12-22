import React from "react";
import style from "./comment.module.css";
import type { IComment } from "../../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };
  return new Date(time).toLocaleString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.commentContainer}>
      <h4 className={style.commentUser}>{comment.user}</h4>
      <p className={style.commentText}>{comment.comment}</p>
      <span className={style.commentTime}>
        {parseCommentTime(comment.time)}
      </span>
    </div>
  );
}

export default Comment;
