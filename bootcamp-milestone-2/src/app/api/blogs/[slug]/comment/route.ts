import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";
import { IComment } from "@/database/blogSchema";


type IParams = {
    params: {
        slug: string
    }
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();

    const { slug } = params;
    const comment: IComment = req.body;


    try {
        // Get the blog we are adding a comment to and push the comment onto it
        const blog = await blogSchema.findOneAndUpdate({slug}, 
            {$push: {"comments": comment}}
        ).orFail();

        


        return NextResponse.json(blog);
    } catch (err) {
        console.log(err);
        return NextResponse.json("Blog not found.", { status: 404});
    }
    

}

