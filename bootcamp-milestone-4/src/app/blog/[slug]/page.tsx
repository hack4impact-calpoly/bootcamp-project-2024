import CommentComponent from "@/components/comment";
import CommentBox from "@/components/commentBox";
import { IComment } from "@/database/commentSchema";
type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `https://bootcamp-project-2024-eta.vercel.app/api/Blogs/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (blog) {
    return (
      <div>
        <div className="border-wrap">
          <h1 className="page-title">{blog.title}</h1>
          <p
            style={{ fontSize: "0.9rem", color: "#888", marginBottom: "16px" }}
          >
            {blog.date.toString()}
          </p>

          <p style={{ fontSize: "1.5rem", color: "#555", marginBottom: "8px" }}>
            {blog.content}
          </p>
          <h2
            style={{ fontSize: "1.5rem", color: "black", marginBottom: "8px" }}
          >
            Comments
          </h2>
          <div>
            {blog.comments.map((comment: IComment, index: number) => (
              <CommentComponent key={index} comment={comment} />
            ))}
          </div>
          <div>
            <CommentBox slug={slug} route="blog" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="border-wrap">
          <h1 className="page-title">Blog Not Found :/</h1>
        </div>
      </div>
    );
  }
}
