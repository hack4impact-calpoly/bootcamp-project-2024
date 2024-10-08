import style from "./comment.module.css";
import { IComment } from "@/database/blogSchema";

{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}
type CommentProps = {
  comment: IComment;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: Date) {
  const date = new Date(time);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return formattedDate;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.container}>
      <h4 className={style.user}>{comment.user}:</h4>
      <p className={style.comment}>{comment.comment}</p>
      <span className={style.time}>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
