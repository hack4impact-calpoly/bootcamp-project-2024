import React from "react";
import connectDB from "@/database/db";
import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import Link from "next/link";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find(
      {},
      {
        title: 1,
        description: 1,
        image: 1,
        date: 1,
        slug: 1,
        _id: 1,
      }
    )
      .sort({ date: -1 })
      .orFail();

    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null;
  }
}

const Blogs = async () => {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl text-gray-600">Failed to load blogs.</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl text-gray-600">No blogs found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <h1 className="text-4xl font-bold mb-12 text-white">Blog Posts</h1>
      {blogs.map((blog) => (
        <Link href={`/blogs/${blog.slug}`} key={blog._id}>
          <BlogPreview
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={new Date(blog.date).toLocaleDateString()}
            imageAlt={`Preview image for ${blog.title}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
