import style from "../page.module.css";
import blogPageStyle from "./blogPage.module.css";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function BlogPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div className={style.page}>
      <h1>Blog</h1>
      <main className={blogPageStyle.blogPage}>
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={new Date(blog.date).toLocaleDateString()}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </main>
    </div>
  );
}
