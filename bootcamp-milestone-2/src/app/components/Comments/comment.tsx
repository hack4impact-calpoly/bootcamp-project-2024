
// comment.tsx - The Comment Component

import React from 'react';
import styles from './comment.module.css'

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// type CommentProps = {
//   comment: IComment;
// };

// parsing comment time
function parseCommentTime(time: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(time).toLocaleString("en-US", options);
  }

  const Comment = ({ comment }: { comment: IComment }) => {
  
    return (
      <div className={styles.comment}>
        <h4 className={styles.user}>{comment.user}</h4>
        <p className={styles.text}>{comment.comment}</p> {/* Display fallback text if comment is missing */}
        <span className={styles.time}>{parseCommentTime(comment.time)}</span>
      </div>
    );
  };
  
  
  export default Comment;
