import connectDB from "../database/db";
import BlogModel from "../database/blogSchema"; 

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
    title: "Understanding TypeScript",
    date: "2024-10-20",
    description: "Learning about TypeScript and its power T-T",
    image: "/groot.jpg",
    imageAlt: "My goat Groot",
    slug: "typescript-understanding",
  },
  {
    title: "the-goat-groot",
    date: "2024-10-18",
    description: "my favoriite marvel character",
    image: "/goat.jpg",
    imageAlt: "another goated pic of groot",
    slug: "my-goat-groot",
  },
];

export async function getBlogs() {
  await connectDB();

  try {
   
    const blogs = await BlogModel.find().sort({ date: -1 }).lean();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; 
  }
}
