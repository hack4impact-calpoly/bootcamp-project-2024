
"use client";
import { useState, useEffect } from 'react';
import Comment from "../../components/Comments/comment"; // Update the path as needed
//import { use } from "react";
import { useParams } from "next/navigation";

// type Props = {
//   params: { slug: string };  // Receive the slug as a parameter prop
// };

// Fetch blog by slug
async function getBlog(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Blogs/${slug}`, {
      cache: "no-store", // Avoid caching for dynamic data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

// Add comment function
async function addComment(slug: string, user: string, comment: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Blogs/${slug}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, user, comment }),
    });

    if (!res.ok) {
      console.error("Error adding comment:", await res.text());
      throw new Error("Failed to add comment");
    }

    return res.json();
  } catch (err) {
    console.error(`Error adding comment: ${err}`);
    return null;
  }
}

export default function Blog() {
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const [blog, setBlog] = useState<any | null>(null);
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const [comments, setComments] = useState<any[]>([]); // Store the comments
  const [user, setUser] = useState<string>(""); // Store the user
  const [comment, setComment] = useState<string>(""); // Store the comment

  const { slug } = useParams() as { slug: string };

  useEffect(() => {
    async function fetchBlogData() {
      const blogData = await getBlog(slug);
      if (blogData) {
        setBlog(blogData);
        setComments(blogData.comments || []);
      }
    }
    fetchBlogData();
  }, [slug]);

  // Handle form submission to add a comment
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate inputs
    if (!user || !comment) {
      alert("Please enter both a user and a comment.");
      return;
    }
  
    const newComment = await addComment(slug, user, comment);
  
    if (newComment) {
      // Re-fetch blog data to ensure comments are updated
      const blogData = await getBlog(slug);
      if (blogData) {
        setComments(blogData.comments || []);
      }
      
      // Reset the form fields
      setUser("");
      setComment("");
    }
  };

  if (!blog) {
    return <p>Blog not found. Please check the URL and try again.</p>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{new Date(blog.date).toLocaleDateString()}</p>
      <p>{blog.description}</p>
      <div>{blog.content}</div>

      {/* Comments Section */}
      <div className="comments">
        <h3>Comments:</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      {/* Comment Form */}
      <div>
        <h3>Leave a comment:</h3>
        <form onSubmit={handleCommentSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Comment:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
}
