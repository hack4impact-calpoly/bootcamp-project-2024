import styles from "./blogPage.module.css"; // Import the styles module
import Comment from "@/app/components/comments/comment"; // Import the Comment component

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`Error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className={styles.blogPostContainer}>
      <h1 className={styles.blogTitle}>{blog.title}</h1>
      <img src={blog.image} alt={blog.image_alt} className={styles.blogImage} />
      <div className={styles.blogContent}>
        <p>{blog.content}</p>
      </div>

      {/* Rendering Comments Section */}
      <div className={styles.commentsSection}>
        <h3>Comments</h3>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} /> // Render each comment using the Comment component
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
