import mongoose, { Schema, Model } from "mongoose";

export type Blog = {
  title: string;
  date: string; 
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const BlogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

const Blog = mongoose.models['blogs'] || mongoose.model("blogs", BlogSchema);

export default Blog;
