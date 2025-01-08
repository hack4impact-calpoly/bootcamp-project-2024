import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const blogs = await blogSchema.find();
    return NextResponse.json(blogs);
  } catch (err) {
    console.error("Error fetching all blogs:", err);
    return NextResponse.json(
      { error: "Failed to fetch blogs." },
      { status: 500 }
    );
  }
}
