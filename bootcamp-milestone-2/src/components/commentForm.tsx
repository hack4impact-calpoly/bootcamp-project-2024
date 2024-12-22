"use client";

import { useState } from "react";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Basic validation
    if (!user.trim() || !comment.trim()) {
      setStatusMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const body = {
      user,
      date: new Date().toISOString(),
      slug,
      comment,
    };

    try {
      const res = await fetch(`/api/Blogs/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Error adding comment.");
      }

      setStatusMessage("Comment added successfully!");
      setUser("");
      setComment("");
      window.location.reload();
      console.log("down here");
    } catch (err) {
      setStatusMessage(`Error: ${err || "Unknown error occurred."}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <label htmlFor="user">Name:</label>
      <input
        type="text"
        id="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem" }}
      />

      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem" }}
      ></textarea>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Comment"}
      </button>

      {statusMessage && (
        <p
          style={{
            marginTop: "0.5rem",
            color: statusMessage.startsWith("Error") ? "red" : "green",
          }}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
