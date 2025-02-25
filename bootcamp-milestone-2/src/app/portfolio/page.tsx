// /app/portfolio/page.tsx

import React from "react";
import connectDB from "@/app/database/db"; // MongoDB connection
import Portfolio from "../database/portfolioschema"; // MongoDB Portfolio model
import PortfolioContent from "../components/portfolio/portfolioContent"; // PortfolioContent component

// Function to fetch portfolio data from the database
async function getPortfolioItems() {
  await connectDB(); // Ensure DB connection is made
  try {
    // Fetch all portfolio items from the portfolioEntries collection
    const portfolioItems = await Portfolio.find().lean(); // Use lean() to get plain JavaScript objects
    // Transform the data to include only the required fields (title, description, imageUrl, link)
    const formattedItems = portfolioItems.map((item) => ({
      title: item.title,
      description: item.description,
      imageUrl: item.image, // Image URL
      slug: item.slug, // Link to the project
    }));
    return formattedItems; // Return the transformed portfolio items
  } catch (err) {
    console.error("Error fetching portfolio items:", err);
    return null; // Return null if there's an error fetching data
  }
}

// Define the PortfolioPage component
const PortfolioPage: React.FC = async () => {
  const portfolioItems = await getPortfolioItems(); // Fetch portfolio data directly in the component

  if (!portfolioItems || portfolioItems.length === 0) {
    return <p>No portfolio items available at the moment.</p>; // Display if no portfolio items are available
  }

  return (
    <div>
      <h1>My Portfolio</h1>
      <PortfolioContent portfolioItems={portfolioItems} />
    </div>
  );
};

export default PortfolioPage;



// // /app/portfolio/page.tsx

// import React from "react";
// import connectDB from "@/app/database/db"; // MongoDB connection
// import PortfolioEntry from "../database/portfolioschema"; // MongoDB Portfolio model
// import PortfolioContent from "../components/portfolio/portfolioContent"; // PortfolioContent component

// // Function to fetch portfolio data from the database
// async function getPortfolioItems() {
//   await connectDB(); // Ensure DB connection is made
//   try {
//     console.log("Attempting to fetch portfolio items...");

//     // Fetch all portfolio items from the 'portfolioEntries' collection within the 'test' database
//     const portfolioItems = await PortfolioEntry.find().lean(); // Use lean() to get plain JavaScript objects
//     console.log("Fetched Portfolio Items:", portfolioItems); // Debug log

//     // Type assertion: inform TypeScript that the fetched data matches the PortfolioItem structure
//     const formattedItems = portfolioItems.map((item) => ({
//       title: item.title,
//       description: item.description,
//       imageUrl: item.image,
//       link: item.link,
//     }));

//     return formattedItems;
//   } catch (err) {
//     console.error("Error fetching portfolio items:", err);
//     return null; // Return null if there's an error fetching data
//   }
// }

// // Define the PortfolioPage component
// const PortfolioPage: React.FC = async () => {
//   const portfolioItems = await getPortfolioItems(); // Fetch portfolio data directly in the component
//   console.log("Portfolio Items in Component:", portfolioItems); // Debug log

//   if (!portfolioItems || portfolioItems.length === 0) {
//     return <p>No portfolio items available at the moment.</p>;
//   }

//   return (
//     <div>
//       <h1>My Portfolio</h1>
//       <PortfolioContent portfolioItems={portfolioItems} />
//     </div>
//   );
// };

// export default PortfolioPage;

