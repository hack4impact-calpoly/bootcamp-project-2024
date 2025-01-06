import React from "react";
import styles from "./portfolioProjects.module.css";

type PortfolioProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const PortfolioProject: React.FC<PortfolioProjectProps> = ({
  name,
  description,
  image,
  link,
}) => {
  return (
    <div className={styles.projectPortfolio}>
      <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className={styles.projectImage} />
      </a>
      <div className={styles.projectDetails}>
        <p className={styles.projectName}>{name}</p>
        <p className={styles.projectDescription}>{description}</p>
        <a
          href={link}
          className={styles.learnMore}
          target="_blank"
          rel="noopener noreferrer"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default PortfolioProject;
