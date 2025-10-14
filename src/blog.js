"use strict";
const Blogs = [
  {
    title: "Entry # 1",
    date: "2025",
    description: "The text of the blog",
    image: "./imports/istockphoto-517188688-612x612.jpg",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry1",
  },
  {
    title: "Entry # 2",
    date: "2024",
    description: "The text of the blog",
    image: "./imports/landscape-with-a-lake-1493481278Ed8.jpg",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry2",
  },
  {
    title: "Entry # 3",
    date: "2023",
    description: "The text of the blog",
    image: "./imports/photo-1506744038136-46273834b3fb.jpg",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry3",
  },
  {
    title: "Entry # 4",
    date: "2022",
    description: "The text of the blog",
    image: "./imports/Yifeng-Ding-1800x1192.avif",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry4",
  },
];
const blogContainer = document.getElementById("card-list");
if (blogContainer) {
  Blogs.forEach((blog) => {
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    const article = document.createElement("article");
    article.classList.add("card");
    const header = document.createElement("header");
    header.classList.add("card-header");
    const paragraph = document.createElement("p");
    paragraph.textContent = blog.date;
    const header2 = document.createElement("h2");
    header2.textContent = blog.title;
    const description = document.createElement("a");
    description.href = `./blogs/${blog.slug}.html`;
    description.innerText = "Click Here To Veiw...";
    const blog_image = document.createElement("img");
    blog_image.classList.add("blog-image");
    blog_image.src = blog.image;
    blog_image.alt = blog.imageAlt;
    article.appendChild(header);
    header.appendChild(paragraph);
    header.appendChild(header2);
    header.appendChild(description);
    header.appendChild(blog_image);
    blogContainer.appendChild(article);
  });
}
//# sourceMappingURL=blog.js.map
