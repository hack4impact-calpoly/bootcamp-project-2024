import React from "react";
import style from "../page.module.css";
import blogPageStyle from "./blogPage.module.css";
import BlogPreview from "@/components/blogPreview";
import blogs from '../blogData';

export default function BlogPage() {
  return (
    <div className={style.page}>
      <h1>Blog</h1>
      <main className={blogPageStyle.blogPage}>
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </main>
    </div>
  );
}
