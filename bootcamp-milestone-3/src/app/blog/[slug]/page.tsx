"use client";

import React, { useEffect, useState } from "react";
import style from "../../page.module.css";
import blogPageStyle from "../blogPage.module.css";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comment";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function BlogPage({ params }: Props) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    async function unwrapParams() {
      const { slug } = await params;
      setSlug(slug);
    }

    unwrapParams();
  }, [params]);

  useEffect(() => {
    async function fetchBlog() {
      if (!slug) return;

      try {
        const res = await fetch(`/api/Blogs/${slug}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) return <div className={style.page}><h1>Loading...</h1></div>;

  if (!blog) {
    return (
      <div className={style.page}>
        <h1>Blog Not Found</h1>
        <main>
          <p>The blog you are looking for does not exist.</p>
        </main>
      </div>
    );
  }

  return (
    <div className={style.page}>
      <h1>{blog.title}</h1>
      <main>
        <div>
          <img
            className={blogPageStyle.blogImg}
            src={blog.image}
            alt={blog.imageAlt || "Blog image"}
          />
          <p>{blog.description}</p>
          <p>{blog.content}</p>

          <h2>Comments</h2>
          <div className={blogPageStyle.commentsContainer}>
            {blog.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}