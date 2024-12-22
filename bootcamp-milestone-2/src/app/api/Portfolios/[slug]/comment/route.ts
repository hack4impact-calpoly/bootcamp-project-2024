import { NextRequest, NextResponse } from "next/server";
import Portfolio from "@/app/database/portfolioSchema";

export async function POST(req: NextRequest) {
  try {
    // Get the body of the request
    const body = await req.json();
    
    // slug, user, and comment from the request body
    const { slug, user, comment } = body;

    // Validate incoming comment body
    if (!user || !comment) {
      return NextResponse.json(
        { message: "User and comment are required." },
        { status: 400 }
      );
    }

    // Find the blog post by slug
    const blog = await Portfolio.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { message: "portfolio not found." },
        { status: 404 }
      );
    }

    // Create a new comment object
    const newComment = {
      user: user,
      comment: comment,
      time: Date.now(),
    };

    // Push the new comment to the blog's comments array
    blog.comments.push(newComment);

    // Save the blog post with the new comment
    await blog.save();

    return NextResponse.json(
      { message: "Comment added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/Blog/[slug]/comment:", error);
    return NextResponse.json(
      { message: "Server error." },
      { status: 500 }
    );
  }
}
