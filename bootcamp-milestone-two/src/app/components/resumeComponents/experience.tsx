import React from 'react';

interface Experience{
    title: string;
    position: string;
    description: string;

}

interface ExperienceProps{
    experiences: Experience []
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
      <section>
        <h3>Experience</h3>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h4>{experience.title}</h4>
            <p> {experience.description} </p>
            ))
          </div>
        ))}
      </section>
    );
  };
  
  export default ExperienceSection;