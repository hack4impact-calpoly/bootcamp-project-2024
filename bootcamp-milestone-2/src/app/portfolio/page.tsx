"use client";
import { ProjectType } from "@/database/projectSchema";
import React, { useEffect, useState } from "react";
import Image from "next/image"

interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
  repository?: string;
}



export default function PortfolioPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/Projects");
        if (!res.ok) {
          throw new Error("Could not fetch projects");
        }
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProjects();
  }, []);

  if (!projects || projects.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
        <p>No projects found. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <Image
              src={project.image}
              alt={project.title}
              width={250}
              height={250}
            ></Image>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Live Demo
                </a>
              )}
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Code Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
