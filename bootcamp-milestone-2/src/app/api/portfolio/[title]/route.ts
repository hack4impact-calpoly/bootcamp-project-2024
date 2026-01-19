import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/database/db'
import projectSchema from '@/database/projectSchema'


// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest){
		await connectDB() // function from db.ts before
		const title = req.url.split('/').slice(-1)[0] // another destructure
		console.log(title)
	   try {
	        const project = await projectSchema.findOne({"_id":title}).orFail()
			console.log(project)
	        return NextResponse.json(project)
	    } catch (err) {
			console.log(err)
	        return NextResponse.json('Blog not found.', { status: 404 })
        }
    }