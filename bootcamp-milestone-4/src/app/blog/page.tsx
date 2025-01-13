import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/database";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();

    const formattedBlogs = blogs.map((blog) => ({
      title: blog.title,
      content: blog.content,
      description: blog.description,
      slug: blog.slug,
      date: blog.date.toString(),
      comments: blog.comments,
    }));

    return formattedBlogs;
  } catch {
    return null;
  }
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">Blog</h1>
        <div id="blog-container">
          {blogs?.map((blog) => <BlogPreview key={blog.slug} {...blog} />) || (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
