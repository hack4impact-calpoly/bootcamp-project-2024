"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "@/components/Portfolio/portfolio.module.css";
import Comment from "@/components/Comment/Comment";
import type { Project, IComment } from "@/database/projectSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(
      `https://bootcamp-project-2024-psi.vercel.app/api/projects/${slug}`,
      {
        cache: "no-store"
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default function Project({ params }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setSlug(unwrappedParams.slug);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    async function fetchProject() {
      if (slug) {
        const data = await getProject(slug);
        setProject(data);
      }
    }
    fetchProject();
  }, [slug]);

  async function handleAddComment() {
    const newComment = {
      user,
      comment,
      time: new Date().toISOString()
    };

    try {
      const res = await fetch(
        `https://bootcamp-project-2024-psi.vercel.app/api/projects/${slug}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newComment)
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add comment");
      }

      const updatedProject = await res.json();
      setProject(updatedProject);
      setIsAddingComment(false);
      setUser("");
      setComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  }

  if (!project) {
    return <h1 className="page-title">Loading...</h1>;
  }

  return (
    <main>
      {project != null ? (
        <div>
          <h1 className="page-title">{project.name}</h1>
          <div>
            <Image
              className={style.projectImage}
              src={project.image}
              alt={project.image_alt}
              width={600}
              height={500}
            />
            <div>
              <p>{project.description}</p>
            </div>
            <div className={style.commentsSection}>
              <div className={style.commentsHeader}>
                <h3 className={style.commentsTitle}>Comments</h3>
                <button
                  className={style.addCommentButton}
                  onClick={() => setIsAddingComment((prev) => !prev)}>
                  {isAddingComment ? "Cancel" : "Add Comment"}
                </button>
              </div>

              {isAddingComment && (
                <form
                  className={style.commentForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAddComment();
                  }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                  <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              )}

              {project.comments.length > 0 ? (
                project.comments.map((comment: IComment, index: number) => (
                  <Comment key={index} comment={comment} />
                ))
              ) : (
                <p className={style.noComments}>No comments yet!</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="page-title">404 - Project Not Found</h1>
      )}
    </main>
  );
}
