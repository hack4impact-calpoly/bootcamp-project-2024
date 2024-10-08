import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    blogID: string;
  };
};

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { blogID } = params; // another destructure
  console.log("in route:", blogID);

  try {
    const blog = await blogSchema.findOne({ blogID }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
