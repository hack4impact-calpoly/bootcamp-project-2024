import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/database";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  const url: string = process.env.MONGO_URI as string;

  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();

    const formattedBlogs = blogs.map((blog) => ({
      title: blog.title,
      content: blog.content,
      description: blog.description,
      slug: blog.slug,
      date: blog.date.toString(),
    }));

    return formattedBlogs;
  } catch (err) {
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
          {blogs.map((blog) => (
            <BlogPreview {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
