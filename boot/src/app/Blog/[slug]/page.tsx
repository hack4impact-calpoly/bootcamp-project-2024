import React from "react";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comments";
import CommentForm from "./CommentForm";
import styles from "./blog.module.css"; 

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

async function getBlog(slug: string) {
  await connectDB();
  try {
    const doc = await Blog.findOne({ slug }).orFail();
    return JSON.parse(JSON.stringify(doc));
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className={styles.blogPage}>
        <h1 className={styles.blogTitle}>Blog Not Found</h1>
        <p className={styles.blogDate}>The requested blog could not be found.</p>
      </main>
    );
  }

  return (
    <main className={styles.blogPage}>
      <h1 className={styles.blogTitle}>{blog.title}</h1>
      <p className={styles.blogDate}>{new Date(blog.date).toLocaleDateString()}</p>
      <img
        src={blog.image}
        alt={blog.imageAlt}
        className={styles.blogImage}
      />
      <div className={styles.blogContent}>{blog.content}</div>

      <section className={styles.commentSection}>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p className={styles.noComments}>No comments yet.</p>
        )}
      </section>

      <CommentForm slug={slug} />
    </main>
  );
}
