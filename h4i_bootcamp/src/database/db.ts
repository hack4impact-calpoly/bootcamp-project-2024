import mongoose from "mongoose";
import Blog from "./blogSchema";
import { MongoClient } from "mongodb";

const url = "mongodb+srv://deep:$Dsingh123@cluster0.d2p5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let connection: typeof mongoose;

const connectDB = async () => {
  try {
    if (!connection) {
      connection = await mongoose.connect(url);
      console.log("Connected to MongoDB");
    }
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

const uri = "mongodb+srv://deep:$Dsingh123@cluster0.d2p5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Set this in your .env file
let client: MongoClient;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  const db = client.db('myDatabase'); // Replace with your actual DB name
  return { db };
}

export const getBlogBySlug = async (slug: string) => {
  return Blog.findOne({ slug }).exec();
};

export default connectDB;
