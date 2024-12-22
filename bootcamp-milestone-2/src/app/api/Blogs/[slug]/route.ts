import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/app/database/db"
import blogSchema from "@/app/database/blogSchema"

// fetching the blog
{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
export async function GET(req: NextRequest, context: { params: any }) {
    await connectDB(); // function from db.ts before
		const { slug } = context.params as { slug: string };

	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail();
	        return NextResponse.json(blog);
	    } catch (err) {
			console.error("Error fetching blogs:", err); // Log the error
	        return NextResponse.json('Blog not found.', { status: 404 });
	    }
}
