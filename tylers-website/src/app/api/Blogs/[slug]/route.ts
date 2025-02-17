import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/database/db'
import blogSchema from "@/database/blogSchema"
import BlogModel from "@/database/blogSchema";

// Ensure the correct structure is followed
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  console.log("called api hook");
  await connectDB(); // Ensure the database is connected

  const { slug } = await params; // Destructure slug from params

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Error finding blog:", err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  console.log("POST request to add a comment");
  await connectDB(); // Ensure MongoDB is connected

  const { slug } = await params; // Destructure slug from params
  const body = await req.json(); // Parse the request body

  try {
    // Validate the body
    const { user, comment, time } = body;
    if (!user || !comment || !time) {
      return NextResponse.json({ error: "Invalid comment data" }, { status: 400 });
    }

    // Construct the comment object
    const newComment = {
      user,
      comment,
      time: new Date(time), // Ensure time is a Date object
    };

    // Update the blog with the new comment
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true, useFindAndModify: false } // Return the updated document
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Comment added successfully", blog: updatedBlog });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


// type IParams = {
// 		params: {
// 			slug: string
// 		}
// }

// // If { params } looks confusing, check the note below this code block
// export async function GET(req: NextRequest, { params }: IParams) {
// 	console.log("called api hook")
//     await connectDB() // function from db.ts before
// 		const { slug } = params // another destructure

// 	   try {
// 	        const blog = await blogSchema.findOne({ slug }).orFail()
// 	        return NextResponse.json(blog)
// 	    } catch (err) {
//           console.error("Error finding blog:", err);
// 	        return NextResponse.json('Blog not found.', { status: 404 })
// 	    }
// }

// // POST Request: Add a comment to a blog
// export async function POST(req: NextRequest, { params }: IParams) {
//   console.log("POST request to add a comment");
//   await connectDB(); // Ensure MongoDB is connected

//   const { slug } = params;
//   const body = await req.json(); // Parse request body

//   try {
//     // Validate the body
//     const { user, comment, time } = body;
//     if (!user || !comment || !time) {
//       return NextResponse.json({ error: "Invalid comment data" }, { status: 400 });
//     }

//     // Construct the comment object
//     const newComment = {
//       user,
//       comment,
//       time: new Date(time), // Ensure time is a Date object
//     };

//     // Update the blog with the new comment
//     const updatedBlog = await BlogModel.findOneAndUpdate(
//       { slug },
//       { $push: { comments: newComment } },
//       { new: true, useFindAndModify: false } // Return the updated document
//     );

//     if (!updatedBlog) {
//       return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Comment added successfully", blog: updatedBlog });
//   } catch (err) {
//     console.error("Error adding comment:", err);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }
