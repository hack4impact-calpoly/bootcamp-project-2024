import mongoose, { Schema } from "mongoose";
import { IComment } from "./blogSchema";

export type ProjectType = {
  name: string;
  description: string;
  date: Date;
  image: string;
  image_alt: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: new Date() },
});

const projectSchema = new Schema<ProjectType>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  comments: [commentSchema],
});

const PortfolioModel =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);
export default PortfolioModel;
