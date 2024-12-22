import styles from "./blog.module.css";
import { getBlogs } from "../blogData";

// for the blog preview
export default async function BlogListPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return <p>Failed to fetch blogs or no blogs available.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog List</h1>
      <ul className={styles.list}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {blogs.map((blog: any) => (
          <li key={blog.slug} className={styles.listItem}>
            <small>{new Date(blog.date).toLocaleDateString()}</small>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            {/* <p></p> */}
            <a href={`/blog/${blog.slug}`} className={styles.link}>
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
