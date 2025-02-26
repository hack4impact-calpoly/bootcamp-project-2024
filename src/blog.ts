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
    title: "Hello World! My First Blog Post",
    date: "10-24-2024",
    description:
      "Welcome to my first blog post :) Unfortunately, midterms are about to hit :(",
    image: "./images/pusheen-crying.png",
    imageAlt: "Pusheen the Cat crying",
    slug: "./blogs/first-post.html",
  },
  {
    title: "#2: more about me",
    date: "10-24-2024",
    description:
      "I'm a computer science student at Cal Poly SLO. I love cute characters and video games!",
    image: "./images/Cherrim.png",
    imageAlt: "A drawing Cherrim (my favorite Pokemon)",
    slug: "./blogs/about-me.html",
  },
  {
    title: "#3: Happy new year!",
    date: "1-5-2024",
    description:
      "It's a bit late though haha. Even though it jasn't been too long since new years, Cal Poly's winter quarter is about to start :O",
    image: "./images/dance-maltese.png",
    imageAlt: "A dog dancing",
    slug: "./blogs/happy-new-year.html",
  },
];

function blogAppend(blogs: Blog[]) {
  const blogContainer = document.getElementById("blog-container");
  if (!blogContainer) {
    console.error("No blog container found");
    return;
  }

  // append each blog to the blog container
  blogs.forEach((blog) => {
    // make div and assign it blog-container class
    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");
    // title
    const blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogPost.appendChild(blogTitle);
    // date
    const blogDate = document.createElement("p");
    blogDate.textContent = blog.date;
    blogPost.appendChild(blogDate);
    // description
    const blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;
    blogPost.appendChild(blogDesc);
    // image
    const blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    blogPost.appendChild(blogImg);
    // slug
    const blogSlug = document.createElement("a");
    blogSlug.href = blog.slug;
    blogSlug.textContent = "Full blog post";
    blogSlug.target = "_blank";
    blogPost.appendChild(blogSlug);

    // Append the blog post to the container
    blogContainer.appendChild(blogPost);
  });
}

blogAppend(blogs);
