import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { blogs, Blog } from "../../blogdata/blog";

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Blog | null>(null);

  useEffect(() => {
    // Function to find the blog post by slug
    const fetchPost = () => {
      const foundPost = blogs.find((blog) => blog.slug === slug);
      setPost(foundPost ? foundPost : null);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) return <p>No blog post found.</p>; // Or some other error handling or loading state

  return (
    <article>
      <h1>{post.title}</h1>
      <img
        src={post.image}
        alt={post.imageAlt}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{post.description}</p>
      <p>Posted on: {new Date(post.date).toLocaleDateString()}</p>
    </article>
  );
};

export default BlogPostPage;
