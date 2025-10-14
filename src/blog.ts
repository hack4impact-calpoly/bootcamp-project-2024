type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const Blogs: Blog[] = [
  {
    title: "Entry # 1",
    date: "The date of the post",
    description: "The text of the blog",
    image: "./imports/IMG_5318.jpeg",
    imageAlt: "A picture of a guy on a chair",
    slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
  },
  {
    title: "Entry # 2",
    date: "The date of the post",
    description: "The text of the blog",
    image: "./imports/IMG_5318.jpeg",
    imageAlt: "A picture of a guy on a chair",
    slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
  },
  {
    title: "Entry # 3",
    date: "The date of the post",
    description: "The text of the blog",
    image: "./imports/IMG_5318.jpeg",
    imageAlt: "A picture of a guy on a chair",
    slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
  },
  {
    title: "Entry # 4",
    date: "The date of the post",
    description: "The text of the blog",
    image: "./imports/IMG_5318.jpeg",
    imageAlt: "A picture of a guy on a chair",
    slug: "https://example.com/blogs/how-to-build-a-react-application-in-2024",
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

    const description = document.createElement("p");
    description.textContent = "Click to see the full text..";

    const blog_image: HTMLImageElement = document.createElement("img");
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
