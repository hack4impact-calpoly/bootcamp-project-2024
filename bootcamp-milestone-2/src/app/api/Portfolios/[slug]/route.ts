import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/app/database/db"
import portfolioSchema from "@/app/database/portfolioSchema"

{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
export async function GET(req: NextRequest, context: { params: any }) {
    await connectDB(); // function from db.ts before
		const { slug } = context.params as { slug: string };

	   try {
	        const blog = await portfolioSchema.findOne({ slug }).orFail();
	        return NextResponse.json(blog);
	    } catch (err) {
			console.error("Error fetching portfolios:", err); // Log the error
	        return NextResponse.json('Portfolio not found.', { status: 404 });
	    }
}