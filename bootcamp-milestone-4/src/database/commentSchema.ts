import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

export default commentSchema;
