//import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
/* eslint-disable @typescript-eslint/no-explicit-any */

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log("Error Getting Blog -", err);
    return null;
  }
}

export default async function BlogList() {
  const blogs: any = await getBlogs();

  return (
    <div>
      <h1 className="page-title">Blog</h1>
      <p className="page-title">More Coming Soon!</p>
      {blogs.map((blog: any) => (
        <BlogPreview
          title={blog.title}
          description={blog.description}
          image={blog.image}
          image_alt={blog.image_alt}
          date={blog.date}
          slug={blog.slug}
          key={blog.key}
          content={blog.content}
          comments={blog.comments}
        />
      ))}
    </div>
  );
}
