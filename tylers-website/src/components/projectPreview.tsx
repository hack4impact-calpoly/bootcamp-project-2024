import React from 'react';
import style from './projectPreview.module.css';

type ProjectItem = {
  title: string;
  description?: string;
  technologies?: string[]; // Array of technologies used
  repository?: string; // URL to the source code repository
};

export default function ProjectPreview(props: ProjectItem) {
  return (
    <div className={style.projectPreviewContainer}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.content}>
        {props.description && <p className={style.description}>{props.description}</p>}
        {props.technologies && (
          <div className={style.technologies}>
            <p><strong>Technologies:</strong></p>
            <ul>
              {props.technologies.map((tech, index) => (
                <li key={index} className={style.techItem}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {/* {props.repository && (
          <p>
            <a className={style.repositoryLink} href={props.repository} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </p>
        )} */}
      </div>
    </div>
  );
}
