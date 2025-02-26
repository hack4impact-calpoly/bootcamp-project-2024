import React from "react";
import Link from "next/link";
import portfolio from "./portfolio.module.css";
import style from "../page.module.css";
import ActionAreaCard from "@/components/projectCard";
import Project from "@/database/projectSchema";
import connectDB from "@/database/db";

// Function to fetch projects from the database
async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ heading: 1 }).orFail(); // Sort projects alphabetically by heading
    return projects;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className={style.page}>
      <h1>Portfolio</h1>
      <div className={style.portfolio}>
        {projects.map((project) => (
          <ActionAreaCard
            key={project._id}
            link={project.link}
            image={project.image}
            alt={project.alt}
            heading={project.heading}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
}
