import BlogPreview from "@/components/blogPreview";
import { Blog } from "@/static/blogData";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Navbar from "@/components/navbar";

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

export default async function BlogListPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found or an error occurred.</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Blog</h1>
      {blogs.map((blog: Blog) => {
        if (blog.title == "Downtown") {
          blog.date = "October 16, 2024";
        }

        if (blog.title == "Milestone 1") {
          blog.date = "October 19, 2024";
        }

        return (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date} // Use formatted date here
            description={blog.description}
            image={blog.image || "/downtown.jpg"}
            imageAlt={blog.imageAlt || "Blog Image"}
            slug={blog.slug}
          />
        );
      })}
    </div>
  );
}
