import { NextRequest, NextResponse } from "next/server";

type Comment = {
  user: string;
  comment: string;
  time: Date;
};

type Blog = {
  title: string;
  slug: string;
  content: string;
  comments: Comment[];
};

// Mock blog data
const blogs: Blog[] = [
  {
    slug: "milestone1",
    title: "Milestone 1",
    content: "This is the content of milestone 1.",
    comments: [
      {
        user: "John",
        comment: "Great blog!",
        time: new Date(),
      },
    ],
  },
  {
    slug: "downtown",
    title: "Downtown Blog",
    content: "This is the downtown blog content.",
    comments: [
      {
        user: "Alice",
        comment: "Very informative!",
        time: new Date(),
      },
    ],
  },
];

export async function GET(_request: NextRequest,
    { params }: { params: Promise<{ slug: string[] }> },
  ) {
  const slug = (await params).slug[0];
  const blog = blogs.find((b) => b.slug === slug);

  if (blog) {
    return NextResponse.json(blog);
  } else {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
}

export async function POST(_request: NextRequest,
    { params }: { params: Promise<{ slug: string[] }> },
  ) {
  const slug = (await params).slug[0];

  const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return new Response("Blog not found", { status: 404 });
  }

  try {
    const newComment: Comment = await _request.json();
    blog.comments.push(newComment);

    updateBlog(slug, blog);

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error adding comment", { status: 500 });
  }
}

function updateBlog(slug: string, updatedBlog: Blog) {
  const blogIndex = blogs.findIndex((b) => b.slug === slug);

  if (blogIndex !== -1) {
    blogs[blogIndex] = updatedBlog;
  }
}
