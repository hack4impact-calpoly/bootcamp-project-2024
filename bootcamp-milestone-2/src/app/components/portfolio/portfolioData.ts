export interface PortfolioEntry {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    status?: "completed" | "coming-soon"; 
  }
  
  const portfolioEntries: PortfolioEntry[] = [
    {
      title: "Personal Website",
      description: "A personal website built using React, TypeScript, and Next.js.",
      image: "images/Developer Logo.jpg",
      imageAlt: "An image of the A V logo",
      slug: "personal-website",
      status: "completed",
    },
    {
      title: "Coming Soon Project 1",
      description: "This project will be revealed soon!",
      image: "images/placeholder-image.jpg",
      imageAlt: "Placeholder Image",
      slug: "coming-soon-project-1",
      status: "coming-soon",
    },
    {
      title: "Coming Soon Project 2",
      description: "This project will be revealed soon!",
      image: "images/placeholder-image.jpg",
      imageAlt: "Placeholder Image",
      slug: "coming-soon-project-2",
      status: "coming-soon",
    },
    {
      title: "Coming Soon Project 3",
      description: "This project will be revealed soon!",
      image: "images/placeholder-image.jpg",
      imageAlt: "Placeholder Image",
      slug: "coming-soon-project-3",
      status: "coming-soon",
    },
  ];
  
  export default portfolioEntries;
  