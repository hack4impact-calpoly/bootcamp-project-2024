// /app/database/portfolioschema.ts

import mongoose, { Schema } from "mongoose";

type PortfolioEntry = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  status?: "completed" | "coming-soon";
};

const portfolioSchema = new Schema<PortfolioEntry>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  status: { type: String, enum: ["completed", "coming-soon"], default: "coming-soon" },
});

// Make sure you are exporting the correct model
const Portfolio =
  mongoose.models["portfolios"] || mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
