import mongoose, { Schema } from "mongoose";

// defining IComment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
}

type Portfolio = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    comments: IComment[]; // array for comments
};

const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  slug: { type: String },
  date: { type: Date, required: false, default: new Date()},
  description: { type: String },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, default: Date.now },
    },
  ],
});

const Portfolio = mongoose.models['portfolios'] || 
    mongoose.model("portfolios", portfolioSchema);

    export default Portfolio;