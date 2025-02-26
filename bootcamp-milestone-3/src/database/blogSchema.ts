import mongoose, { Schema, Document } from "mongoose";

// Define the IComment type
export type IComment = {
    user: string;
    comment: string;
    time: Date;
};

// Define the Blog type
type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
    content: string; // text content for individual blog page
    image: string; // URL for image in public
    imageAlt: string; // alt text for image
    comments: IComment[]; // array for comments
};

// Mongoose schema for comments
const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true }
});

// Mongoose schema for blog
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: [commentSchema], required: true }
});

// Defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;