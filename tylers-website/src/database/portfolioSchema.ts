import { Schema, model, models } from "mongoose";

// Define the structure of a ProjectItem
export type ProjectItem = {
  title: string;
  description?: string;
  technologies?: string[]; // Array of technologies used
  repository?: string; // URL to the source code repository
  slug?: string;
};

// Define the schema for a ProjectItem
const projectItemSchema = new Schema<ProjectItem>({
  title: { type: String, required: true },
  description: { type: String },
  technologies: { type: [String] },
  repository: { type: String },
  slug: { type: String },
});

// Check if the model is already defined to avoid redefinition
const PortfolioModel = models["portfolioprojects"] || model("portfolioprojects", projectItemSchema);

export default PortfolioModel;
