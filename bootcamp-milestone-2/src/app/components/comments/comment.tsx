import styles from './comment.module.css'; // Import the styles for comments

// Assuming IComment is defined here or imported from 'types.ts'

export interface IComment {
    user: string;
    comment: string;
    time: string | Date;
  }

  type CommentProps = {
    comment: IComment;
  };
  
  function parseCommentTime(time: Date) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(time).toLocaleString('en-US', options);
  }
  
  export default function Comment({ comment }: CommentProps) {
    return (
      <div className={styles.commentCard}>
        <p className={styles.commentAuthor}>{comment.user}</p>
        <p className={styles.commentContent}>{comment.comment}</p>
        <span className={styles.commentDate}>{parseCommentTime(comment.time)}</span>
      </div>
    );
  }
  