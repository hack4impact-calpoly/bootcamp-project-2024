import { IComment } from "@/database/blogSchema";
import styles from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  console.log(comment.time);
  return (
    <div className={styles.container}>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{new Date(comment.time).toDateString()}</span>
    </div>
  );
}

export default Comment;
