
// import Comment from "../../components/Comments/comment"; // Update the path as needed
// import { useState, useEffect } from 'react';
// import React from "react";


// type Props = {
//     params: { slug: string };
//   };
  
//   // get individual blog
//   async function getBlog(slug: string) {
//     try {
//       const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
//         cache: "no-store", // Avoid caching for dynamic data
//       });
  
//       if (!res.ok) {
//         throw new Error("Failed to fetch blog");
//       }
  
//       return res.json();
//     } catch (err) {
//       console.error(`Error fetching blog: ${err}`);
//       return null;
//     }
//   }
  
//   export default async function Blog({ params }: Props) {
//     const slug = params.slug;
// 	const blog = await getBlog(slug);
  
//     // handles cases where the blog isn't found
//     if (!blog) {
//       return <p>Blog not found. Please check the URL and try again.</p>;
//     }
  
//     return (
//       <div>
//         <h1>{blog.title}</h1>
//         <p>{new Date(blog.date).toLocaleDateString()}</p>
//         <p>{blog.description}</p>
//         <div>{blog.content}</div>
//         <div className="comments">
//         {/* Loop through comments and pass each one to the Comment component */}
//         {blog.comments && blog.comments.length > 0 ? (
//         blog.comments.map((comment: any, index: any) => {

//             return <Comment key={index} comment={comment} />;
//         })
//         ) : (
//         <p>No comments yet.</p>
//         )}

//       </div>
//       </div>
      
//     );
//   }
  

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
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
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
// async function addComment(slug: string, user: string, comment: string) {
//   try {
//     const res = await fetch(`http://localhost:3000/api/Blog/${slug}/comment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user, comment }),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to add comment");
//     }

//     return res.json();
//   } catch (err) {
//     console.error(`Error adding comment: ${err}`);
//     return null;
//   }
// }

export default function Blog() {
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const [blog, setBlog] = useState<any | null>(null);
  //const [comment, setComment] = useState<string>(""); // store the comment input
  //const [user, setUser] = useState<string>(""); // store the user name
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const [comments, setComments] = useState<any[]>([]); // store the comments

  // const { slug } = use(params as { slug: string });  // Directly access the `slug` parameter
  // const { slug } = React.use(params);  
  const { slug } = useParams() as { slug: string }

  // Fetch blog data initially when the component is mounted or slug changes
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
          comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
