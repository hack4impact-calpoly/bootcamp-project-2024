import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  image: string;
  imageAlt: string;
  link: string;
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: false, default: "" },
  imageAlt: { type: String, required: false, default: "" },
  link: { type: String, required: true },
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
