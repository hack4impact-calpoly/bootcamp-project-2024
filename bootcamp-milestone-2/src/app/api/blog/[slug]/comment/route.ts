import { NextRequest, NextResponse } from "next/server";
import Blog from "@/components/blog/blogContent";
import { connectToDB } from "@/utils/database";

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    // Connect to the database
    await connectToDB();

    // Extract the slug from the URL params
    const { slug } = params;

    // Extract the comment data from the request body
    const body = await req.json();
    const { user, comment } = body;

    // Validate the comment data
    if (!user || !comment) {
      return NextResponse.json({ error: "Invalid comment data" }, { status: 400 });
    }

    // Create a new comment object
    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    // Find the blog by slug and update it by pushing the new comment to the comments array
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    );

    // If the blog wasn't found, return an error
    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Return the updated blog post with the new comment
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("Error posting comment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
