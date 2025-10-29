type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;      
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My First Blog Post",
    date: "2025-10-28",
    description: "This is my first blog post where I share what I learned starting the bootcamp.",
    image: "./images/first-post.png",
    imageAlt: "Screenshot of my first blog project",
    slug: "my-first-blog-post"
  },
  {
    title: "Learning TypeScript",
    date: "2025-10-27",
    description: "A quick overview of how TypeScript makes JavaScript safer and easier to maintain.",
    image: "./images/learning-ts.png",
    imageAlt: "TypeScript logo and code snippet",
    slug: "learning-typescript"
  }
];