import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogModel, { BlogType } from "@/database/blogSchema";

// If { params } looks confusing, check the note below this code block
export async function GET() {
  await connectDB(); // function from db.ts before

  try {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
    const blogs: BlogType[] = await BlogModel.find()
      .sort({ date: -1 })
      .orFail();
    return NextResponse.json(blogs);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blogs not found.", { status: 404 });
  }
}
