import React from "react";
import Image from "next/image";
import BlogModel from "@/database/blogSchema";
import style from "@/components/BlogPreview/blogPreview.module.css";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store"
    });
    // This checks that the GET request was successful
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
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <main>
      {blog != null ? (
        <div>
          <h1 className="page-title">{blog.title}</h1>
          <h2>{formattedDate}</h2>
          <div className={style.blogContent}>
            <Image
              className={style.blogImage}
              src={blog.image}
              alt={blog.image_alt}
              width={400}
              height={500}
            />
            <div className={style.blogDescription}>
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="page-title">404 - Blog Not Found</h1>
      )}
    </main>
  );
}
