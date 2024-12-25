import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Port = {
  img: string;
  title: string;
  text: string;
};

// mongoose schema
const portSchema = new Schema<Port>({
  img: { type: String, required: false },
  title: { type: String, required: false },
  text: { type: String, required: false },
});

// defining the collection and model
const plist = mongoose.models["plist"] || mongoose.model("plist", portSchema);

export default plist;
