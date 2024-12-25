import Blog from "@/database/blogSchema";

export default function Comments(fullComment: Blog["comments"][0]) {
  return (
    <div className="blog-element">
      <h3>{fullComment.user}</h3>
      <p>{fullComment.comment}</p>
      <p>{fullComment.time}</p>
    </div>
  );
}
