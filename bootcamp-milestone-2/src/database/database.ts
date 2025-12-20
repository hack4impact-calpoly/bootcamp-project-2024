// db.ts
import mongoose from "mongoose";
import Project from "../database/projectSchema";

const blog_url: string = process.env.MONGO_URI_BLOG as string;
const project_url: string = process.env.MONGO_URI_PROJECT as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async (blogs = true) => {
  console.log("Connecting to database...");
  if (!connection) {
    //if (blogs){
    connection = await mongoose.connect(blog_url);
    //}
    //else{
    //  connection = await mongoose.connect(project_url);
    //}
    
    console.log("db:", mongoose.connection.name);          // BlogsDB
    console.log("collection:", Project.collection.name);      // Blogs
    console.log("count:", await Project.countDocuments({}));  // should be 3

    return connection;
  }
};

export default connectDB;
