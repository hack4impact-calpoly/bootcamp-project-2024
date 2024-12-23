"use client"

import React, {useState} from 'react';
import { IComment } from '@/database/blogSchema';

type CommentBoxProps = {
    slug: string;
    postComment: (slug: string, comment: IComment) => void;
}



export default function CommentBox(props: CommentBoxProps) {

    const [commentUser, setCommentUser] = useState("Name");
    const [commentText, setCommentText] = useState("Comment:");


    function handleClick(){
        if (commentUser == "" || commentText == "") {
            console.log("Cannot leave an empty comment or one without a name!");
            return;
        }

        const commentObject: IComment = {
            user: commentUser,
            content: commentText,
            time: new Date(Date.now()),
        }

        props.postComment(props.slug, commentObject);

    }

    return (
        <form id="contact-form">
            <ul className="form-list">
                <li><input value={commentUser} type="text" id="name" onChange={e => {setCommentUser(e.target.value)}}required></input></li>
                <li><textarea value={commentText} onChange={e => {setCommentText(e.target.value)}}></textarea></li>
                <li><input className="comment-submit" type="submit" required onClick={() => handleClick()}></input></li>
            </ul>
        </form>
    )
}