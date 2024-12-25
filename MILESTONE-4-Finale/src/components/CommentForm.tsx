"use client";
import { useState } from "react";
import style from "./CommentForm.module.css";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //Handle Time (in PST)
    //JP style as time units are written in descending order - yyyy/mm/dd hh:mm:ss
    const now = new Date();
    const time =
      now.toLocaleString("ja-JP", {
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Los_Angeles",
      }) + " PST";

    //Use comment POST API
    try {
      const response = await fetch(`/api/Blogs/${slug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment, time }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }

    //Reset all parameters and refresh
    setComment("");
    setUser("");

    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style["comment-form"]}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Name"
          required
        />
        <br />
        <br />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type Here"
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
