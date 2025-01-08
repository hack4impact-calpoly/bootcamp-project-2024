import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: params.slug },
      {
        $push: {
          comments: {
            user,
            comment,
            time: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBlog.comments);
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Error adding comment" },
      { status: 500 }
    );
  }
}
