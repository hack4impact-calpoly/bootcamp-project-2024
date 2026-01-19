{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}

import style from './comment.module.css';

export type IComment = {
    user: string,
    comment: string;
    date: Date;
}

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    const date: string[] = time.toString().split("-");
    const dateFormat: string = date[1] + "/" + date[2].slice(0,2) + "/" + date[0];
    return dateFormat
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comment}>
            <h4 className={style.user}>{comment.user}</h4>
            <p className={style.content}>{comment.comment}</p>
            <p className={style.time}>{parseCommentTime(comment.date)}</p>
        </div>
    );
}

export default Comment;