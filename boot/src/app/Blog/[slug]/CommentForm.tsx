"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import formStyles from "./commentForm.module.css"; 

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch(`/api/Blogs/${slug}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, comment }),
    });

    if (response.ok) {
      router.refresh(); 
      setUser("");
      setComment("");
    } else {
      console.error("Failed to submit comment:", response.statusText);
    }
  }

  return (
    <form className={formStyles.commentForm} onSubmit={handleSubmit}>
      <div className={formStyles.formGroup}>
        <label className={formStyles.formLabel} htmlFor="user">
          Name:
        </label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Your Name"
          className={formStyles.formInput}
          required
        />
      </div>

      <div className={formStyles.formGroup}>
        <label className={formStyles.formLabel} htmlFor="comment">
          Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          className={formStyles.formTextarea}
          required
        />
      </div>

      <button type="submit" className={formStyles.submitButton}>
        Add Comment
      </button>
    </form>
  );
}
