// Define the shape of a blog post
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// Blog data
const blogs: Blog[] = [
  {
    title: "My First Blog Post",
    date: "2025-10-28",
    description: "This is my first blog post where I talk about blog stuff!",
    image: "./images/tennisbird.webp",
    imageAlt: "Tennis bird",
    slug: "my-first-blog-post",
  },
  {
    title: "My Second Blog Post",
    date: "2025-10-27",
    description: "This is my second blog post where I talk about more blog stuff",
    image: "./images/learning-ts.png",
    imageAlt: "second image",
    slug: "learning-typescript",
  },
  {
    title: "My Third Blog Post",
    date: "2025-10-27",
    description: "This is my third blog post where I talk about more blog stuff",
    image: "./images/learning-ts.png",
    imageAlt: "third image",
    slug: "learning-typescript",
  },
];

// On load, populate the blog list ONLY if we're on blog.html
// (post.html won't have #blog-container, so this won't run there)
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-container");

  if (container) {
    blogs.forEach((blog) => {
      const div = document.createElement("div");
      div.className = "blog-card";
      div.innerHTML = `
        <a href="./blogs/post.html?slug=${blog.slug}" class="blog-link">
          <h2>${blog.title}</h2>
          <p>${blog.date}</p>
          <img src="${blog.image}" alt="${blog.imageAlt}">
        </a>
      `;
      container.appendChild(div);
    });
  }
});