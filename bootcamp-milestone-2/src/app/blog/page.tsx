"use client";

import React, { useEffect, useState } from "react";
import BlogPreview from "@/components/blogPreview";
import { BlogType } from "@/database/blogSchema";
import styles from "./page.module.css";

async function getBlogs(): Promise<BlogType[]> {
  try {
    // query for all blogs and sort by date
    const res = await fetch("/api/Blogs");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load blogs");
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogs();
  }, []);

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <main>
      <h1 className="page-title">Blog</h1>
      <div className={styles.container}>
        {blogs.map((blog, idx) => (
          <BlogPreview
            key={idx}
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            image={blog.image}
            image_alt={blog.image_alt}
            comments={blog.comments}
          />
        ))}
      </div>
    </main>
  );
}
