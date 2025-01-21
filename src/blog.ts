// Blog type definition
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// Example blog data
const blogs: Blog[] = [
  {
    title: "Understanding TypeScript",
    date: "2024-10-20",
    description: "Learning about TypeScript and its power T-T",
    image: "groot.jpg",
    imageAlt: "My goat Groot",
    slug: "typescript-understanding",
  },
  {
    title: "the-goat-groot",
    date: "2024-10-18",
    description: "my favoriite marvel character",
    image: "goat.jpg",
    imageAlt: "another goated pic of groot",
    slug: "my-goat-groot",
  },
];

function displayBlogs(blogPosts: Blog[]) {
  const blogContainer = document.getElementById("blog-posts-container");

  if (!blogContainer) {
    console.error("Blog container not found.");
    return;
  }

  blogPosts.forEach((blog) => {
    const blogElement = document.createElement("article");
    blogElement.classList.add("blog-post");

    blogElement.innerHTML = `
      <h2 class="post-title"><a href="blogs/${blog.slug}.html">${blog.title}</h2>
      <p class="post-date">${blog.date}</p>
      <img src="${blog.image}" alt="${blog.imageAlt}" class="post-image"/>
      <p class="post-description">${blog.description}</p>
      <a href="${blog.slug}?slug=${blog.slug}" class="read-more">Read more</a>
    `;

    blogContainer.appendChild(blogElement);
  });
}

displayBlogs(blogs);
