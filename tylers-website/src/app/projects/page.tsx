import style from "./projects.module.css";
import ProjectPreview from "@/components/projectPreview";
import connectDB from "@/database/db";
import PortfolioModel, { ProjectItem } from "@/database/portfolioSchema";
import Link from "next/link"; // Import the Link component from Next.js

// Fetch all the project items from the collection
async function getProjects() {
  await connectDB();

  try {
    // Fetch all projects directly from the collection
    const projects = await PortfolioModel.find(); // Get all projects
    return projects;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function ProjectsPage() {
  // const [projects, setProjects] = useState<ProjectItem[]>([]); // Use ProjectItem type directly

  // useEffect(() => {
  //   seedDatabase();
  //   async function fetchProjects() {
  //     const projectsData = await getProjects();
  //     setProjects(projectsData);
  //   }

  //   fetchProjects();
  // }, []);
  // seedDatabase();
  const projects: ProjectItem[] = await getProjects();

  return (
    <main>
      <div className={style.projects}>
        <div className={style.projectPreviews}>
          {/* Check if 'projects' is an array */}
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.slug}`}> {/* Link to individual project pages */}
                <div className={style.projectLink}>
                  <ProjectPreview
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    repository={project.repository}
                  />
                </div>
              </Link>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </main>
  );
}

// async function seedDatabase() {
//   await connectDB();

//   const dummyData = [
//     {
//       title: "Random Forest",
//       description: "Implemented random forest in Java from scratch",
//       technologies: ["Java", "Machine Learning"],
//       repository: "https://github.com/Tylermhh/466-RandomForest",
//       slug: "random-forest",
//     },
//     {
//       title: "Personal Portfolio",
//       description: "A website to showcase projects and skills",
//       technologies: ["HTML", "CSS", "JavaScript", "React"],
//       repository: "https://github.com/Tylermhh/Personal-Portfolio-Website",
//       slug: "personal-portfolio",
//     },
//     {
//       title: "Todo List",
//       description: "A simple todo list web app",
//       technologies: ["JavaScript", "HTML", "CSS"],
//       repository: "https://github.com/Tylermhh/404-day-visualizer-app",
//       slug: "todo-list",
//     }
//   ];

//   try {
//     // Insert the dummy data directly into the collection
//     await PortfolioModel.create(dummyData);
//     console.log("Database seeded!");
//   } catch (err) {
//     console.error("Seeding error:", err);
//   }
// }
