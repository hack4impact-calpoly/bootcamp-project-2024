import mongoose, { Schema } from "mongoose";

// TypeScript type for Project
export type Project = {
  link: string;
  image: string;
  alt: string; 
  heading: string; 
  text: string;
};

// Mongoose schema
const projectSchema = new Schema<Project>({
  link: { type: String, required: false }, 
  image: { type: String, required: true }, 
  alt: { type: String, required: true }, 
  heading: { type: String, required: true },
  text: { type: String, required: true }, 
});

// Defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
