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
    title: "Exploring the Beautiful Beaches of Hawaii",
    date: "2024-06-15",
    description:
      "Join us on a journey to explore the stunning beaches of Hawaii, from the crystal-clear waters of Waikiki to the serene shores of Maui.",
    image: "https://example.com/hawaii-beach.jpg", // Replace with a real image URL
    imageAlt: "A beautiful beach in Hawaii with clear blue water",
    slug: "exploring-hawaii-beaches",
  },
  {
    title: "Top 10 Hiking Trails in California",
    date: "2024-07-01",
    description:
      "Discover the best hiking trails in California, perfect for both beginners and experienced hikers.",
    image: "https://example.com/california-hiking.jpg", // Replace with a real image URL
    imageAlt: "A scenic hiking trail in California",
    slug: "top-hiking-trails-california",
  },
];

function displayBlogs(blogs: Blog[]): void {
  const blogContainer = document.getElementById("blog-container");
  if (!blogContainer) return;
  blogContainer.innerHTML = "";

  blogs.forEach((blog) => {
    const div = document.createElement("div");
    div.classList.add("blog-entry");
    const h1 = document.createElement("h1");
    h1.textContent = blog.title;
    const img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imageAlt;
    const p = document.createElement("p");
    p.textContent = blog.description;

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);

    blogContainer.appendChild(div);
  });
}
displayBlogs(blogs);
