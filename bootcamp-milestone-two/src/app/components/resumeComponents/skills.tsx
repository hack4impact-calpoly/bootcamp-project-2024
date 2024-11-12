import React from 'react';

interface SkillProps { 
    languages : string[];
    databases : string[];
    libraries : string[];
}

const SkillSection: React.FC<SkillProps> = ({languages, databases, libraries}) => {
    return( 
        <section>
      <h1>Skills</h1>
      <div>
        <p>Programming Languages: {languages.join(', ')}</p>
        <p>Databases: {databases.join(', ')}</p>
        <p>Data Analytics & Libraries: {libraries.join(', ')}</p>
      </div>
    </section>
  );
};
 

export default SkillSection