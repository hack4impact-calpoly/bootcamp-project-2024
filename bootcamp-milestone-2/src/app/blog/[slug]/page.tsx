"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BlogType } from "@/database/blogSchema";
import styles from "./page.module.css";
import Comment from "@/components/Comment";
import CommentForm from "@/components/commentForm";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Blog({ params }: Props) {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { slug } = React.use(params);

  // Fetch blog data in a useEffect
  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await fetch(`/api/Blogs/${slug}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Something broke while fetching the blog.");
        }
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.log(err);
        setError("Something Broke");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  // Handle loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>{error}</p>;
  }

  // If no blog is found or returned
  if (!blog) {
    return (
      <div>
        <p>This page does not exist...</p>
      </div>
    );
  }

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>
      <div className={styles.container}>
        <p>{new Date(blog.date).toDateString()}</p>
        <Image src={blog.image} alt={blog.image_alt} width={500} height={500} />
        <p>{blog.content}</p>
        <h3>Comments:</h3>
        {blog.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentForm slug={slug} />
      </div>
    </main>
  );
}
