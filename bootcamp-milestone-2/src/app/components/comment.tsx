import React from "react";
import styles from "./Comment.module.css";

function parseCommentTime(time: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(time);
}
interface IComment {
  user: string;
  comment: string;
  time: Date;
}

type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment-container">
      <h4 className="comment-user">{comment.user}</h4>
      <p className="comment-text">{comment.comment}</p>
      <span className="comment-time">{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
