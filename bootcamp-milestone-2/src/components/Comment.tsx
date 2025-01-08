import React from "react";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

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
function parseCommentTime(time: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(time).toLocaleDateString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
