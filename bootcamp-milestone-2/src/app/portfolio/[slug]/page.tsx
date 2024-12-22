import React from "react";
import Image from "next/image";
import style from "@/components/Portfolio/portfolio.module.css";
import Comment from "@/components/Comment/Comment";
import type { IComment } from "@/database/projectSchema";

type Props = {
  params: { slug: string };
};

async function getProject(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${slug}`, {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Portfolio({ params: { slug } }: Props) {
  const project = await getProject(slug);
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
              <h3 className={style.commentsTitle}>Comments</h3>
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
