"use client";

import React, { useEffect, useState } from "react";
import { ProjectType } from "@/database/projectSchema";
import Project from "@/components/project";
import styles from "./page.module.css";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/Portflio");
        if (!res.ok) {
          throw new Error("Could not fetch projects");
        }
        const data = await res.json();
        console.log(data);
        console.log(
          "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        );
        setProjects(data);
      } catch (err) {
        console.log(err);
        setError("Error fetching projects");
      }
    }

    fetchProjects();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <main>
      <h1 className="page-title">Portfolio</h1>
      <div className={styles.container}>
        {projects.map((project, idx) => (
          <Project
            key={idx}
            name={project.name}
            date={project.date}
            description={project.description}
            image={project.image}
            image_alt={project.image_alt}
            comments={project.comments}
          />
        ))}
      </div>
    </main>
  );
}
