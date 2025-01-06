import React from 'react';
import BlogPreview from '@/components/blogPreview';
//import { blogs } from "../../static/blogData";
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';
import Link from 'next/link';

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; 
  }
}


export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <main>
        <h1>Blog Page</h1>
        <p>No blogs found or an error occurred!</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Blog Page</h1>
      <div>
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug}`}>

          <BlogPreview
            key={blog._id} 
            title={blog.title}
            date={blog.date.toISOString().split('T')[0]} 
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
          />
          </Link>

        ))}
      </div>
    </main>
  );
}
