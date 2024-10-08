import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  blogID: string;
  date: Date;
  description: string; // for preview
  content: string[]; // for individual blog page
  image: string;
  imageAlt: string;
  comments: IComment[]; // array for comments
};

// comment schema
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, requierd: true },
  time: { type: Date, required: false, default: new Date() },
});

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  blogID: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: [String], required: false, default: [] },
  image: { type: String, requried: true },
  imageAlt: { type: String, required: true },
  comments: { type: [commentSchema], required: true },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
