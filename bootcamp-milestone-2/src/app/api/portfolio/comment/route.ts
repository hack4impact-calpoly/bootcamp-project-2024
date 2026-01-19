import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/database/db'
import projectSchema from '@/database/projectSchema'

export async function POST(req: NextRequest) {
	const body = await req.json()
    console.log(body)
	const projectTitle = body["title"];
	// validate body
	if (body == null || !body["user"] || !body["comment"]) {
        return NextResponse.json('Comment is empty', {status: 400})
	}
    try{
        await connectDB();
        // const updatedBlog = await blogSchema.findOne(BlogSlug)
        // push comment object to document
        projectSchema.collection.updateOne(
            {"title": projectTitle},
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