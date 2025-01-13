import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function Home() {
  return (
    <div>
      <div className="border-wrap">
          <h1 className="page-title">Blog</h1>

          <div className="about">

            <div id="blog-container">
              {blogs.map((blog) => (
                <BlogPreview {...blog} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}


