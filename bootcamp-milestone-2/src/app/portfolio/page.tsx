import React from "react";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";
import PortfolioPreview from "@/components/portfolioPreview";

async function getPortfolio() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const portfolio = await Portfolio.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return portfolio;
  } catch (err) {
    return null;
  }
}

const Portfolios = async () => {
  const blogs = await getPortfolio();

  if (!blogs) {
    return <p>Failed to load blogs.</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div>
      {blogs.map((blog, index) => (
        <PortfolioPreview
          key={index}
          title={blog.name}
          description={blog.description}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default Portfolios;
