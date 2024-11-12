import Head from 'next/head';
import SkillSection from '../components/resumeComponents/skills';
import ProjectSection from '../components/resumeComponents/projects';
import ExperienceSection from '../components/resumeComponents/experience';

export default function Resume() {

      const skills = {
        languages: ['Python(Experienced)', 'HTML/CSS', 'React/NextJS/Typescript(Web Development)'],
        databases: ['JSON (Dictionaries and Lists)', 'NumPy (Matrices and Arrays)', 'MongoDB (Non-SQL)'],
        libraries: ['MATLAB, PyTorch, OpenAI, Gemini, pandas, yfinance, AlphaVantage']
};

      const projects = [
        {title: 'Sybil-Vane', description: 'Developed a sentiment analysis tool utilizing Python and spaCy deep learning and natural language processing models to detect bias in different media companies on real-time events. Applied JSON Dictionaries to store text data, amassing 350+ articles and approximately 560,000 words, including all respective companies, headlines, authors,  and sentiment figures.Built a robust training algorithm with 3 criteria and 2 worked-out examples to optimize a sub-model named entity recognition (NER) capabilities.'},
        {title: 'Market-Vision', description: 'Created a model that utilizes pandas to gather, organize, and score financial data from 30 active stocks daily based on 5 technical and 6 fundamental analysis standards. Utilized JSON Dictionaries to store ticker info and provide a historical reference to train OpenAI API-driven learning model to average past scores.Optimized model efficiency to bring OpenAI’s API usage cost per 1,000,000 tokens from $10.00 to $0.15 by refining data organization and model training instructions.'},
        {title: 'PyTorch-Projects', description: 'Deployed pre-trained neural and cycle-GAN networks with PyTorch to perform computer vision and image domain transformation tasks. Utilized NumPy to organize 700+ batches of text, tabular, time-series, and image data in 3 dimensions and higher. Implemented ImageNet 1000+ database of images and ground truths into models for reference.'},
      ];

      const experiences = [
        {title: 'Science Olympiad', position: 'Team Lead & Treasurer', description: 'Used Excel to manage and track budgets for multiple teams based on the overall budget and complexity of the project. Employed pywin32 to promote collaboration and transparency by displaying data in readable formats through Office 365 applications. '},
        {title: 'Scientists of Tomorrow Podcast', position: 'Founder and Outreach Manager', description: 'Led a group of students to generalize the research and personal lives of prominent academics worldwide for aspiring scientists through a podcast on Spotify. Generated approximately 200 minutes of content using DaVinci Resolve and international listener bases. Given, by invitation from Dr. Clare Yu, the opportunity to meet with 2003 Nobel Prize in Physics winner Dr. Anthony Leggett due to demonstrated interest and knowledge during her interview.'},
        {title: 'AI for Data Science CalPoly API', position: 'Volunteer Research Assistant', description: "Developed a CalPoly API by creating developer tools for all Cal Poly information. Used vector embeddings and cosine similiarities to reduce token cost of OpenAI server. Stored 800,000+ units of data in JSON and MongoDB"}
      ]

return (
    <div>
      <SkillSection {...skills} />
      <ProjectSection projects={projects} />
      <ExperienceSection experiences={experiences} />
    </div>
  );
}
