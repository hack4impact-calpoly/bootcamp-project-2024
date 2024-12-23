import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";



export async function GET(req: NextRequest) {
    await connectDB();
    const slug = req.nextUrl.pathname.split("/")[3];

    try {
        const blog = await blogSchema.findOne({slug}).orFail();
        return NextResponse.json(blog);


    } catch (err) {
        console.log(err);
        return NextResponse.json("Blog not found.", { status: 404});
    }

}