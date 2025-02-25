import mongoose, { Schema, Document } from "mongoose";

// TypeScript type for Comment
type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type for Blog
type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  image_alt: string; // alt for image
  comments: IComment[]; // array for comments
};

// Mongoose schema for Comment
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: Date.now },
});

// Mongoose schema for Blog with a nested comments array
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], default: [] }, // Nested comments field
});

// Defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
