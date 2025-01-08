import React from 'react';

const Resume = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8', color: '#333', margin: '0', padding: '0' }}>

      {/* Resume header */}
      <div style={{ backgroundColor: '#008080', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h1>Henry Chen</h1>
        <p>
          San Luis Obispo, CA 93405 | 510-384-2781 | henrychencscp@gmail.com |{' '}
          <a href="https://github.com/hchencp" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            GitHub
          </a>
        </p>
      </div>

      {/* Resume content */}
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        {/* Education Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#008080', borderBottom: '2px solid #789e66', paddingBottom: '10px', marginBottom: '20px' }}>Education</h2>
          <div>
            <h4>California Polytechnic State University, San Luis Obispo</h4>
            <p>Bachelor of Science in Computer Science | Expected: June 2026</p>
            <p>
              Relevant Coursework: Introduction to Computing, Fundamentals of Computer Science, Data Structures and Algorithms, Project-Based Object-Oriented Programming and Design, Discrete Structures, Introduction to Computer Organization, Design and Analysis of Algorithms, Introduction to Database Systems
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#008080', borderBottom: '2px solid #789e66', paddingBottom: '10px', marginBottom: '20px' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {['Python', 'Java', 'C', 'HTML', 'CSS', 'MySQL', 'JavaScript', 'Visual Studio', 'IntelliJ'].map((skill, index) => (
              <span key={index} style={{ backgroundColor: '#789e66', color: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '0.9em' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#008080', borderBottom: '2px solid #789e66', paddingBottom: '10px', marginBottom: '20px' }}>Experience</h2>
          {[
            {
              title: 'Courtesy Clerk',
              company: 'Sprouts Farmers Market, San Luis Obispo, CA',
              description:
                'Accomplished courtesy clerk with a demonstrated history of providing exceptional customer service in a fast-paced retail environment. Skilled in assisting with customer inquiries and reliably supporting team members and meeting store objectives.',
            },
            {
              title: 'Math Tutor',
              company: 'Apollo Education',
              description: 'Tutored elementary to high school students in mathematics.',
            },
            {
              title: 'Conservation Worker',
              company: 'P-Crew, Lassen National Park, California',
              description:
                'Worked on conservation projects including trail maintenance, invasive species removal, fire fuel load reduction, and fencing important trees and plants.',
            },
          ].map((job, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.3em', color: '#789e66' }}>{job.title}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#008080', borderBottom: '2px solid #789e66', paddingBottom: '10px', marginBottom: '20px' }}>Projects</h2>
          {[
            {
              name: 'Employee Manager',
              description:
                'Designed and implemented an Employee Scheduling Manager with a user-friendly database, featuring five core tables for efficient employee data management through the use of SQL.',
              link: 'https://github.com/hchencp/EmployeeManager',
            },
            {
              name: 'Pokémon Mini-game',
              description:
                'Designed and implemented an A* pathfinding system to allow Pokémon characters to navigate a dynamic game environment, avoiding obstacles and reaching their destination.',
              link: 'https://github.com/hchencp/PokemonMinigame',
            },
          ].map((project, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.3em', color: '#789e66' }}>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#008080' }}>
                  View Project on GitHub
                </a>
              </p>
            </div>
          ))}
        </section>
      </div>

      {/* Contact Info */}
      <div style={{ backgroundColor: '#789e66', color: 'white', padding: '20px', textAlign: 'center', borderRadius: '0 0 10px 10px' }}>
        <p>Email: henrychencscp@gmail.com</p>
        <p>Phone: (510) 384-2781</p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/hchencp" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            github.com/hchencp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;

