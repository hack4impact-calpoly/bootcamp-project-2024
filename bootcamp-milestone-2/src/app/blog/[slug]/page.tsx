"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "@/components/BlogPreview/blogPreview.module.css";
import Comment from "@/components/Comment/Comment";
import type { Blog, IComment } from "@/database/blogSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store"
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default function Blog({ params }: Props) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setSlug(unwrappedParams.slug);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    async function fetchBlog() {
      if (slug) {
        const data = await getBlog(slug);
        setBlog(data);
      }
    }
    fetchBlog();
  }, [slug]);

  async function handleAddComment() {
    const newComment = {
      user,
      comment,
      time: new Date().toISOString()
    };

    try {
      const res = await fetch(
        `http://localhost:3000/api/blogs/${slug}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newComment)
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add comment");
      }

      const updatedBlog = await res.json();
      setBlog(updatedBlog);
      setIsAddingComment(false);
      setUser("");
      setComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  }

  if (!blog) {
    return <h1 className="page-title">Loading...</h1>;
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>
      <h2>{formattedDate}</h2>
      <div className={style.blogContent}>
        <Image
          className={style.blogImage}
          src={blog.image}
          alt={blog.image_alt}
          layout="intrinsic"
          width={400}
          height={500}
        />
        <div className={style.blogDescription}>
          <p>{blog.content}</p>
          <div className={style.commentsSection}>
            <div className={style.commentsHeader}>
              <h3 className={style.commentsTitle}>Comments</h3>
              <button
                className={style.addCommentButton}
                onClick={() => setIsAddingComment((prev) => !prev)}>
                {isAddingComment ? "Cancel" : "Add Comment"}
              </button>
            </div>

            {isAddingComment && (
              <form
                className={style.commentForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddComment();
                }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            )}

            {blog.comments.length > 0 ? (
              blog.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p className={style.noComments}>No comments yet!</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
