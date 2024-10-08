import styles from "./portfolio.module.css";
import React, { Suspense } from "react";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import ProjectPreview from "@/components/projectPreview";
import Loading from "@/components/loading";

async function getProjects() {
  await connectDB;

  try {
    const projects = Project.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    console.error(err);
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  if (projects) {
    return (
      <div className={styles.project}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.projectList}>
          <Suspense fallback={<Loading />}>
            {projects.map((project, index) => (
              <ProjectPreview
                key={index}
                title={project.title}
                slug={project.slug}
                date={project.date}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                link={project.link}
              />
            ))}
          </Suspense>
        </div>
      </div>
    );
  } else {
  }
}
