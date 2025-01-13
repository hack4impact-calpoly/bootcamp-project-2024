import { IComment } from "@/database/commentSchema";
import style from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  return time.toString();
}

function CommentComponent({ comment }: CommentProps) {
  return (
    <div className={style.comment}>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default CommentComponent;
