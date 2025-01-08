import React, { FormEvent, useState } from "react";

type CommentFormProps = {
  slug: string;
  onCommentAdded: () => void;
};

export default function CommentForm({
  slug,
  onCommentAdded,
}: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/Blogs/${slug}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      setUser("");
      setComment("");
      onCommentAdded();
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Name</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
