
"use client";
import { useState, useEffect } from 'react';
import Comment from "../../components/Comments/comment";
import { useParams } from "next/navigation";
import styles from "./slug.module.css"

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
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const [portfolio, setPortfolio] = useState<any | null>(null);
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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
    <div className={styles.container}>
      <h1 className={styles.title}>{portfolio.title}</h1>
      <p className={styles.date}>{new Date(portfolio.date).toLocaleDateString()}</p>
      <p className={styles.description}>{portfolio.description}</p>
  
      {/* Comments Section */}
      <div className={styles.comments}>
        <h3>Comments:</h3>
        {comments.length > 0 ? (
          <ul className={styles.commentList}>
            {comments.map((comment, index) => (
              <li key={index} className={styles.comment}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
  
      {/* Comment Form */}
      <div className={styles.form}>
        <h3>Leave a comment:</h3>
        <form onSubmit={handleCommentSubmit}>
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
            <label>
              Comment:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
  
}
