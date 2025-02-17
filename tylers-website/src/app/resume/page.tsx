import React from "react";
import style from "./resume.module.css";
import ResumeItem from "@/components/resumeItem";
import SectionModel, { Section } from "@/database/resumeSchema";
import connectDB from "@/database/db";

async function fetchResumeEntries(): Promise<Section[]> {
    await connectDB();

    try {
    const resumeEntries = await SectionModel.find().orFail(); // Fetch all sections
    return resumeEntries;
    } catch (err) {
    console.error(err);
    return []; // Return an empty array on error
    }
}

export default async function ResumePage() {
    const resumeEntries: Section[] = await fetchResumeEntries();

    return (
        <main className={style.main}>
        <div className={style.titleContent}>
            <div className={style.titleImage}>
            <img width="500" src="./images/IUPaletteCover.png" alt="my wife" />
            </div>
            <a className={style.button} href="resume.pdf" download>
            Download Resume
            </a>
        </div>

        <div className={style.resume}>
            {resumeEntries.map((section, index) => (
            <ResumeItem key={index} title={section.title} items={section.items} />
            ))}
        </div>
        </main>
    );
}

// trying to programatically add stuff to collection since collection was returnning nothing when called
// it worked and created a new collection that does work so im keeping this code but commented out
// async function seedDatabase() {
//     await connectDB();
  
//     const dummyData = [
//       {
//         title: "Education",
//         items: [
//           { title: "CalPoly SLO", info: "BS in Comp Sci" },
//         ],
//       },
//       {
//         title: "Course Work",
//         items: ["101", "202", "203", "357", "307"],
//       },
//       {
//         title: "Skills",
//         items: ["Python", "Java", "JS", "Tailwind", "Express", "Making IU happy :D"],
//       },
//       {
//         title: "Projects",
//         items: [
//           {
//             title: "Random Forest",
//             info: "ML algorithm",
//             description: "Implemented random forest in Java from scratch",
//           },
//         ],
//       },
//       {
//         title: "Experience",
//         items: [
//           {
//             title: "Frontend Developer at EIEN Studios",
//             info: "Frontend-web dev intern",
//             description: "Developed website for rhythm game",
//           },
//         ],
//       },
//     ];
  
//     try {
//       await SectionModel.insertMany(dummyData);
//       console.log("Database seeded!");
//     } catch (err) {
//       console.error("Seeding error:", err);
//     }
//   }
  
  

