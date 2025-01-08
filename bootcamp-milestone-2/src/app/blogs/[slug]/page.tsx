import React from "react";
import CommentSection from "@/components/CommentSection";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `https://bootcamp-project-20241.vercel.app/api/Blogs/${slug}`,
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

export default async function Blog({ params }: Props) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.name}</h1>
      <p className="mb-4">{blog.description}</p>
      <p className="text-gray-600 mb-4">
        Published on: {new Date(blog.date).toLocaleDateString()}
      </p>
      <img src={blog.image} alt={blog.name} className="w-full mb-8" />

      <CommentSection
        slug={params.slug}
        initialComments={blog.comments || []}
      />
    </div>
  );
}
