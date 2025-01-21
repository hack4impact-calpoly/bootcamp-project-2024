import Link from "next/link";
import styles from "./BlogPreview.module.css";
import { Blog } from "../blogData";

interface BlogPreviewProps {
  blog: Blog;
}

export default function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <article className={styles.blogPost}>
      <h2 className={styles.postTitle}>
        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
      </h2>
      <p className={styles.postDate}>{blog.date}</p>
      <img src={blog.image} alt={blog.imageAlt} className={styles.postImage} />
      <p className={styles.postDescription}>{blog.description}</p>
      <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
        Read more
      </Link>
    </article>
  );
}
