import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Portfolio = {
  key: Number;
  title: string;
  description: string; // for preview
  image: string; // url for string in public
};

// mongoose schema
const portfolioSchema = new Schema<Portfolio>({
  key: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

// defining the collection and model
const Portfolio = mongoose.models["portfolio"] || mongoose.model("portfolio", portfolioSchema);

export default Portfolio;

