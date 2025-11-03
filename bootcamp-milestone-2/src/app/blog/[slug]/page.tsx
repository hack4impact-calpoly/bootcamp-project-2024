import blogs from "../../blogData";
import { getBlog } from "../../blogData";
import { notFound } from "next/navigation";

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }  
) {
  const { slug } = await props.params;            
  const blog = getBlog(slug.toLowerCase());
  if (!blog) notFound();

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <img src={blog.image} alt={blog.imageAlt} />
      <p>{blog.date}</p>
    </main>
  );
}
