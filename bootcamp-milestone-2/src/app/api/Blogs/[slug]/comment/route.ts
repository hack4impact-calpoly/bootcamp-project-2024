import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/database/db'
import blogSchema from "@/database/blogSchema"

export async function POST(req: NextRequest) {
	const body = await req.json()
    console.log(body)
	const BlogSlug = body["slug"];
	// validate body
	if (body == null || !body["user"] || !body["date"]) {
        return NextResponse.json('Comment is empty', {status: 400})
	}
    try{
        await connectDB();
        // const updatedBlog = await blogSchema.findOne(BlogSlug)
        // push comment object to document
        blogSchema.collection.updateOne(
            {"slug": BlogSlug},
            {
                $addToSet: {
                    comments: {
                        user: body["user"],
                        comment: body["comment"],
                        date: body["date"]
                    }
                }
            }
        )
        return NextResponse.json("Comment added!", {status: 200})
    } catch(err){
        console.log(err)
        return NextResponse.json('Error occurred', {status: 404})
    }
   
}