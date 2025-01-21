import mongoose from "mongoose";
import connectDB from "./database/db";

const blogSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  image: String,
  imageAlt: String,
  slug: String,
});

const Blog = mongoose.model<Blog>("Blog", blogSchema);

export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export const blogs: Blog[] = [
  {
    title: "How to Build a React Application in 2024",
    date: "2024-01-01",
    description: "A complete guide to building a React app.",
    image: "/images/react2024.png",
    imageAlt: "React Application Image",
    slug: "how-to-build-a-react-application-in-2024",
  },
  {
    title: "Understanding TypeScript",
    date: "2024-02-01",
    description: "Learn the fundamentals of TypeScript.",
    image: "/images/typescript.png",
    imageAlt: "TypeScript Logo",
    slug: "understanding-typescript",
  },
];
async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
