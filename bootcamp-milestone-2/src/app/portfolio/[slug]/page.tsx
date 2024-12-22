
"use client";
import { useState, useEffect } from 'react';
import Comment from "../../components/Comments/comment";
//import { use } from "react";
import { useParams } from "next/navigation";

// type Props = {
//   params: { slug: string };  // Receive the slug as a parameter prop
// };

// Fetch blog by slug
async function getPortfolio(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Portfolios/${slug}`, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    return res.json();
  } catch (err) {
    console.error(`Error fetching portfolio: ${err}`);
    return null;
  }
}

// Add comment function
async function addComment(slug: string, user: string, comment: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Portfolios/${slug}/comment`, {
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

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState<any | null>(null);
  const [comments, setComments] = useState<any[]>([]); // Store the comments
  const [user, setUser] = useState<string>(""); // Store the user
  const [comment, setComment] = useState<string>(""); // Store the comment

  const { slug } = useParams() as { slug: string };

  useEffect(() => {
    async function fetchPortfolioData() {
      const blogData = await getPortfolio(slug);
      if (blogData) {
        setPortfolio(blogData);
        setComments(blogData.comments || []);
      }
    }
    fetchPortfolioData();
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
      const portfolioData = await getPortfolio(slug);
      if (portfolioData) {
        setComments(portfolioData.comments || []);
      }
      
      // Reset the form fields
      setUser("");
      setComment("");
    }
  };

  if (!portfolio) {
    return <p>Portfolio not found. Please check the URL and try again.</p>;
  }

  return (
    <div>
      <h1>{portfolio.title}</h1>
      <p>{new Date(portfolio.date).toLocaleDateString()}</p>
      <p>{portfolio.description}</p>
      {/* <div>{portfolio.content}</div> */}

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
