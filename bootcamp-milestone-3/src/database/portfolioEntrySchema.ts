import mongoose, { Schema } from "mongoose";

type PortfolioEntry = {
  title: string;
  description: string;
  date: Date;
};

const portfolioEntrySchema = new Schema<PortfolioEntry>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
  },
  {
    collection: "portfolios", // Explicitly set the collection name
  }
);

const PortfolioEntry =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioEntrySchema);

export default PortfolioEntry;
