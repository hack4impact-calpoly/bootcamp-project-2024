import { IComment } from "@/database/blogSchema";
import moment from "moment-timezone";
import style from "./comment.module.css";

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date) {
    const date = new Date(time);
    return moment(date).format("MM/DD/YYYY hh:mm A");
}

function Comment({ comment }: CommentProps) {
    if (!comment || !comment.comment) {
        return null;
    }

    return (
        <div className={style.commentCard}>
            <p className={style.commentUser}>{comment.user}</p>
            <span className={style.commentTime}>{parseCommentTime(new Date(comment.time))}</span>
            <p className={style.commentText}>{comment.comment}</p>
        </div>
    );
}

export default Comment;