import mongoose, { Schema } from "mongoose";
import commentSchema from "./commentSchema";
import { IComment } from "@/database/commentSchema";

type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  comments: IComment[];
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], required: false, default: [] },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
