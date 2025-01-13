import CommentComponent from "@/components/comment";
import CommentBox from "@/components/commentBox";
type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });

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
          <p>{blog.description}</p>
          <p>{blog.date}</p>
          <div>
            {blog.comments.map((comment: Comment, index) => (
              <CommentComponent key={index} comment={comment} />
            ))}
          </div>
          <div>
            <CommentBox slug={slug} />
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
