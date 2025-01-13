import mongoose, { Schema } from "mongoose";
import commentSchema from "./commentSchema";
import { IComment } from "@/database/commentSchema";

type PortfolioEntry = {
  title: string;
  description: string;
  date: Date;
  slug: string;
  comments: IComment[];
};

const portfolioEntrySchema = new Schema<PortfolioEntry>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    slug: { type: String, required: true },
    comments: { type: [commentSchema], required: false, default: [] },
  },
  {
    collection: "portfolios", // Explicitly set the collection name
  }
);

const PortfolioEntry =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioEntrySchema);

export default PortfolioEntry;
