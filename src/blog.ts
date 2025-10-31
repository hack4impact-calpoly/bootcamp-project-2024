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

document.addEventListener('DOMContentLoaded', () => { // safety measure 
  const container = document.getElementById('blog-container');
  if (container) {
    blogs.forEach((blog) => {
      const div = document.createElement('div');
      div.className = 'blog-card';
      div.innerHTML = `
  <a href="./blogs/${blog.slug}.html" class="blog-link">
    <h2>${blog.title}</h2>
    <p>${blog.date}</p>
    <img src="${blog.image}" alt="${blog.imageAlt}">
    <p>${blog.description}</p>
  </a>
      `;
      container.appendChild(div);
    });
  }
});