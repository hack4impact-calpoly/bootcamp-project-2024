import mongoose, { Schema } from "mongoose";

export type Project = {
  name: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
  comments: IComment[];
};

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: new Date() }
});

const projectSchema = new Schema<Project>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    comments: [{ type: commentSchema }]
  },
  { collection: "projects" }
);

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
