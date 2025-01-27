import { NextRequest, NextResponse } from 'next/server';

interface Comment {
  user: string;
  comment: string;
  time: Date;
}

interface Blog {
  slug: string;
  title: string;
  content: string;
  comments: Comment[];
}

// Mock in-memory data for blogs
const blogs: Blog[] = [
  {
    slug: 'milestone1',
    title: 'Milestone 1',
    content: 'This is the content of milestone 1.',
    comments: [],
  },
];

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
  }

  try {
    const newComment: Comment = await req.json();

    blog.comments.push(newComment);

    return NextResponse.json({ message: 'Comment added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding comment', error }, { status: 500 });
  }
}
