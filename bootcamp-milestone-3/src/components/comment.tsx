import { IComment } from "@/database/commentSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  return time.toDateString;
}

function CommentComponent({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default CommentComponent;
