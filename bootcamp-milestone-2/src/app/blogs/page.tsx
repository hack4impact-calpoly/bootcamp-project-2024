import styles from "./blogs.module.css";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
import BlogPreview from "@/components/blogPreview";
import { Suspense } from "react";
import Loading from "@/components/loading";

async function getBlogs() {
  await connectDB(); // function from db.ts before
  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function Blogs() {
  const blogPosts = await getBlogs();
  if (blogPosts) {
    return (
      <div className={styles.blogPage}>
        <h1 className={styles.pageTitle}>Blog Posts</h1>
        <div className={styles.blogList} id="blog-list">
          <Suspense fallback={<Loading />}>
            {blogPosts.map((blog, index) => (
              <BlogPreview
                key={index}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                blogID={blog.blogID}
                image={blog.image}
                imageAlt={blog.imageAlt}
              />
            ))}
          </Suspense>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-16">
        <h1 className="text-2xl font-bold">No blog posts found</h1>
      </div>
    );
  }
}
