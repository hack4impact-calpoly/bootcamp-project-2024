"use client";
import React, { useState, useEffect } from "react";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentSectionProps = {
  slug: string;
  initialComments: IComment[];
};

export default function CommentSection({
  slug,
  initialComments,
}: CommentSectionProps) {
  const [comments, setComments] = useState<IComment[]>(initialComments);

  const handleCommentAdded = async () => {
    try {
      const res = await fetch(`/api/Blogs/${slug}`);
      const data = await res.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error("Error fetching updated comments:", error);
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <CommentForm slug={slug} onCommentAdded={handleCommentAdded} />

      <div className="mt-8">
        {comments && comments.length > 0 ? (
          comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
