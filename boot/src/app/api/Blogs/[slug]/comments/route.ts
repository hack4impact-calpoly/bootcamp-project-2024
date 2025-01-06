import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

type Params = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { slug } = params;
    
    const { user, comment } = await req.json();

    if (!user || !comment) {
      return NextResponse.json({ error: 'Missing user or comment.' }, { status: 400 });
    }

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        $push: {
          comments: {
            user,
            comment,
            time: new Date(),
          },
        },
      },
      { new: true } 
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found.' }, { status: 404 });
    }

    return NextResponse.json(updatedBlog, { status: 201 });
  } catch (err) {
    console.error('Error posting comment:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
