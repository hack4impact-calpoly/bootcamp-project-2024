'use client';
import { use, useEffect, useState } from "react";
import style from "./singleProject.module.css";
import { ProjectItem } from "@/database/portfolioSchema";

async function fetchProject(slug: string) {
  try {
    // for local running
    // const response = await fetch(`/api/Projects/${slug}`);
    const response = await fetch(`https://bootcamp-project-2024-v2-qzyzs5iee-min-hset-hlaings-projects.vercel.app/api/projects/${slug}`);
    const project = await response.json();
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // Unwrap params using `use()`
  const [project, setProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const getProjectData = async () => {
      const fetchedProject = await fetchProject(slug);
      setProject(fetchedProject);
    };
    
    getProjectData();
  }, [slug]); // The effect depends on the slug param

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className={style.project}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>Technologies: {project.technologies?.join(", ")}</p>
        <p>
          Repository: <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.repository}</a>
        </p>
      </div>
    </main>
  );
}


// async function getProject(slug: string): Promise<ProjectItem | null> {
//   try {
//     const res = await fetch(
//       `https://localhost:3000/api/Projects/${slug}`,
//       // `https://bootcamp-project-2024-v2-qzyzs5iee-min-hset-hlaings-projects.vercel.app/api/Projects/${slug}`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch project");
//     }

//     return res.json();
//   } catch (err: unknown) {
//     console.error(`Error fetching project: ${err}`);
//     return null;
//   }
// }