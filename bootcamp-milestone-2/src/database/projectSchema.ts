import mongoose, { Schema, Model } from "mongoose";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  repository?: string; 
};

const projectSchema = new Schema<ProjectType>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  repository: { type: String },
});

const ProjectModel = 
  mongoose.models["Projects"] || mongoose.model("Projects", projectSchema);

export default ProjectModel;
