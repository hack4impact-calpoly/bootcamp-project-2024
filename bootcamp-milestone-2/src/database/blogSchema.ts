import mongoose, { Schema } from "mongoose";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
type Blog = {
  key: Number;
  title: string;
  description: string; // for preview
  image: string; // url for string in public
  date: Date;
  slug: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: () => new Date() },
});

// mongoose schema
const blogSchema = new Schema<Blog>({
  key: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: false, default: () => new Date() },
  slug: { type: String, required: true, unique: true },
  comments: { type: [commentSchema], default: [] },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
