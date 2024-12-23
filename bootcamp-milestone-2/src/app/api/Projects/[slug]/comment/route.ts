import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();
  const { slug } = await context.params;

  try {
    const body = await req.json();
    const { user, comment, time } = body;

    if (!user || !comment || !time) {
      return NextResponse.json(
        { error: "Invalid request. Missing required fields." },
        { status: 400 }
      );
    }

    const project = await projectSchema.findOne({ slug });
    if (!project) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    const newComment = { user, comment, time: new Date(time) };
    project.comments.push(newComment);

    await project.save();

    return NextResponse.json(project);
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "An error occurred while adding the comment." },
      { status: 500 }
    );
  }
}
