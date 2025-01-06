import React from 'react';
import styles from '../portfolio.module.css'; 

import connectDB from '@/database/db';
import PortfolioProjectProps from '@/components/portfolioProject';
import PortfolioProject from '@/database/portfolioSchema';

export async function getPortfolio() {
  await connectDB();
  try {
    const projects = await PortfolioProject.find().orFail();
    return projects;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function PortfolioPage() {
  const projects = await getPortfolio();

  if (!projects) {
    return (
      <main className={styles.portfolioPage}>
        <h1 className={styles.portfolioTitle}>Portfolio</h1>
        <p className={styles.noProjectsFound}>
          No projects found or an error occurred.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.portfolioPage}>
      <h1 className={styles.portfolioTitle}>Portfolio</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <PortfolioProjectProps
            key={project._id}  
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}