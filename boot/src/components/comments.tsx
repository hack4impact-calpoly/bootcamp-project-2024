"use client";

import React from "react";
import styles from "./comments.module.css"; 

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

function parseCommentTime(time: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  return new Date(time).toLocaleString("en-US", options);
}

type CommentProps = {
  comment: IComment;
};

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.commentContainer}>
      <h4 className={styles.commentUser}>{comment.user}</h4>
      <p className={styles.commentText}>{comment.comment}</p>
      <span className={styles.commentTime}>
        {parseCommentTime(comment.time)}
      </span>
    </div>
  );
}
