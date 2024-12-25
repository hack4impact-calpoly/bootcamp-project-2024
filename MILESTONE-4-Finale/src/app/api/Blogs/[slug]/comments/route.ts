import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

//Handles Comment Posting
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();
  const { slug } = await context.params;

  try {
    const body = await req.json(); //Get comment request
    const { user, comment, time } = body;

    if (!user || !comment || !time) {
      return NextResponse.json(
        { error: "Invalid request. Missing required fields." },
        { status: 400 }
      );
    }

    const blog = await blogSchema.findOne({ slug }); //get blog

    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    const newComment = { user, comment, time };
    blog.comments.push(newComment); //Add to IComment array

    await blog.save(); //Update Blog Values

    return NextResponse.json(blog); //return success
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "An error occurred while adding the comment." },
      { status: 500 }
    );
  }
}
