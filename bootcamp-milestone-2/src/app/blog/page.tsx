import BlogPreview from "@/components/BlogPreview/blogPreview";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

async function getBlogs() {
  await connectDB(); //connect to the database

  try {
    //query for all blogs, sorted by date
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null; //return null on failure
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <main>
      <h1 className="page-title">Blogs</h1>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogPreview
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            image={blog.image}
            image_alt={blog.image_alt}
            comments={blog.comments}
            key={blog._id}
          />
        ))
      ) : (
        <p>No blogs available at the moment. Please check back later!</p>
      )}
    </main>
  );
}
