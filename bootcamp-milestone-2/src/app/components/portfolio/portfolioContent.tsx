import React from "react";
import styles from "./portfolioContent.module.css";
import Link from "next/link";

type PortfolioContentProps = {
  portfolioItems: { title: string; description: string; imageUrl: string; slug: string;}[];
};

const PortfolioContent: React.FC<PortfolioContentProps> = ({ portfolioItems }) => {
  return (
    <div className={styles["project-container"]}>
      {portfolioItems.map((item) => (
        <div key={item.title} className={styles.project}>
          <img
            src={item.imageUrl} // Assumes you have an imageUrl field
            alt={item.title}
            className={styles["project-img"]}
          />
          <div className={styles["project-details"]}>
            <h2 className={styles["project-name"]}>{item.title}</h2>
            <p className={styles["project-description"]}>{item.description}</p>
            {/* Optional: Add a button or link */}
            {/* <a href="#" className={styles["learn-more"]}>
              View Project
            </a> */}
            <Link href={`/portfolio/${item.slug}`} className={styles["learn-more"]}>
              View Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioContent;
