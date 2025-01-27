import blog from "@/database/blogSchema";
import connectDB from "@/database/db";

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
    title: "Downtown",
    date: "10/16/2024",
    description: "Went downtown to eat some Thai food",
    image: "",
    imageAlt: "Image of Downtown",
    slug: "downtown",
  },
  {
    title: "Milestone 1",
    date: "10/19/2024",
    description: "First milestone in H4I bootcamp",
    image: "",
    imageAlt: "Milestone 1 Image",
    slug: "milestone1",
  },
];

const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    const blogTitle = document.createElement("h1");
    const blogImage = document.createElement("img");
    const blogDescription = document.createElement("p");
    const blogHREF = document.createElement("a");

    blogTitle.textContent = blog.title;
    blogImage.src = blog.image || "placeholder.jpg";
    blogImage.alt = blog.imageAlt;
    blogDescription.textContent = blog.description;

    blogHREF.href = `src/app/blogs/${blog.slug}.html`;
    blogHREF.textContent = "MORE";

    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogImage);
    blogDiv.appendChild(blogDescription);
    blogDiv.appendChild(blogHREF);

    blogContainer.appendChild(blogDiv);
  });
} else {
  console.error("Blog container not found!");
}

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default blogs;
