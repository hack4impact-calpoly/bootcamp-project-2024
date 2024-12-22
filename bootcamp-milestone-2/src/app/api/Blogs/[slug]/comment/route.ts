import { NextRequest, NextResponse } from "next/server";
import Blog from "@/app/database/blogSchema";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { blogSlug } = req.query; // Extract the blogSlug from the query params
//   const { user, comment } = req.body; // Extract user and comment from the request body

//   if (!user || !comment) {
//     return res.status(400).json({ error: 'Invalid input: user and comment are required.' });
//   }

//   try {
//     await connectDB(); // Ensure the MongoDB connection is established

//     // Find the blog by slug and add the comment
//     const result = await Blog.findOneAndUpdate(
//       { slug: blogSlug }, // Match the blog by slug
//       {
//         $push: {
//           comments: {
//             _id: new Date().toISOString(),
//             user,
//             comment,
//             time: new Date().toISOString(),
//           },
//         },
//       },
//       { new: true, upsert: false } // Return the updated document, do not create a new one
//     );

//     if (!result) {
//       return res.status(404).json({ error: 'Blog not found.' });
//     }

//     res.status(201).json({ message: 'Comment added successfully.', comments: result.comments });
//   } catch (error) {
//     console.error('Error adding comment:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


export async function POST(req: NextRequest) {
  try {
    // Get the body of the request
    const body = await req.json();
    
    // Extract slug, user, and comment from the request body
    const { slug, user, comment } = body;

    // Validate incoming comment body
    if (!user || !comment) {
      return NextResponse.json(
        { message: "User and comment are required." },
        { status: 400 }
      );
    }

    // Find the blog post by slug
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found." },
        { status: 404 }
      );
    }

    // Create a new comment object
    const newComment = {
      user: user,
      comment: comment,
      time: new Date(), // Set the current time for the comment
    };

    // Push the new comment to the blog's comments array
    blog.comments.push(newComment);

    // Save the blog post with the new comment
    await blog.save();

    return NextResponse.json(
      { message: "Comment added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/Blog/[slug]/comment:", error);
    return NextResponse.json(
      { message: "Server error." },
      { status: 500 }
    );
  }
}
