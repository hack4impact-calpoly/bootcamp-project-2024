
import React from 'react';

interface CommentProps {
  comment: {
    user: string;
    comment: string;
    time: Date;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="comment">
      <p><strong>{comment.user}</strong> says:</p>
      <p>{comment.comment}</p>
      <p><em>{new Date(comment.time).toLocaleString()}</em></p>
    </div>
  );
};

export default Comment;
