import mongoose, { Schema } from "mongoose";


type IComment = {
    user: string;
    comment: string;
    time: Date;
  };

  const commentSchema = new Schema<IComment>({
    user:    { type: String, required: true },
    comment: { type: String, required: true },
    time:    { type: Date,   required: true },
  });

type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;

    comments: IComment[];

};

const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    imageAlt: { type: String, required: true },
    comments:    {
        type: [commentSchema],
        default: [],
      },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);
export default Blog;
