import React from 'react';

interface Project {
    title: string;
    description: string;
}

interface ProjectProps { 
    projects: Project[];
}

const ProjectSection: React.FC<ProjectProps> = ({projects}) => {
    return (
        <section>
          <h1>Projects</h1>
          {projects.map((project, index) => (
            <div key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      );
    };

export default ProjectSection;


