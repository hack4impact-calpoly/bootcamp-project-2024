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
      title: "Mantou's Craving for Food",
      date: "2024-10-21",
      description: "Mantou is a glutton who uses his big, watery eyes to beg for food—no one can resist him. He even stands up when he knows I'm grabbing food for him.",
      image: "./images/craving.jpg",
      imageAlt: "Mantou looking eagerly at the food with big watery eyes",
      slug: "mantou-craving-for-food",
    },
    {
      title: "Tiffany's Adventures in Cat Sitting",
      date: "2024-10-21",
      description: "Look at this gorgeous lady! Tiffany keeps sending me pictures of the Ragdoll cat to show off. It's not even hers—it's her cousin's cat, and she's just taking care of it while they're away.",
      image: "./images/ragdoll.jpg",
      imageAlt: "A beautiful Ragdoll cat, taken care of by Tiffany for her cousin.",
      slug: "ragdoll-pic-from-tiff",
    },
  ];
  
  const blogContainer = document.getElementById("blog-container");
  
  blogs.forEach(blog => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
  
    const blogTitle = document.createElement("h2");
    blogTitle.innerText = blog.title;
  
    const blogDate = document.createElement("p");
    blogDate.innerText = `Published on: ${blog.date}`;
  
    const blogDescription = document.createElement("p");
    blogDescription.innerText = blog.description;
  
    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
  
    const blogLink = document.createElement("a");
    blogLink.href = `blogs/${blog.slug}.html`; 
    blogLink.innerText = "Read more";
  
    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogDate);
    blogDiv.appendChild(blogImage);
    blogDiv.appendChild(blogDescription);
    blogDiv.appendChild(blogLink);
  
    blogContainer?.appendChild(blogDiv);
  });
  