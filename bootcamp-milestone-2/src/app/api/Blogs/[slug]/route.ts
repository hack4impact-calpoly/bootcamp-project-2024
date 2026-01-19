import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/database/db'
import blogSchema from "@/database/blogSchema"


// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest){
    await connectDB() // function from db.ts before
		const slug = req.url.split('/').slice(-1)[0] // another destructure
		console.log(slug)
	   try {
	        const blog = await blogSchema.findOne({slug}).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
			console.log(slug)
			console.log(err)
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}
