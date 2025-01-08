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
  const portfolios = await getPortfolio();

  if (!portfolios) {
    return <p>Failed to load blogs.</p>;
  }

  if (portfolios.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div>
      {portfolios.map((portfolios, index) => (
        <PortfolioPreview
          key={index}
          title={portfolios.name}
          description={portfolios.description}
          image={portfolios.image}
        />
      ))}
    </div>
  );
};

export default Portfolios;
