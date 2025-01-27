"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blogs = [
    {
        title: "Downtown",
        date: new Date("10/16/2024"),
        description: "Went downtown to eat some Thai food",
        slug: "downtown",
        content: "This is a blog post about my trip downtown to enjoy some Thai food. The experience was delightful.",
        comments: [] 
    },
    {
        title: "Milestone 1",
        date: new Date("10/19/2024"),
        description: "First milestone in H4I bootcamp",
        slug: "milestone1",
        content: "In this post, I reflect on completing the first milestone of the Hack4Impact bootcamp.",
        comments: []
    }
];
document.addEventListener("DOMContentLoaded", function () {
    var blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogDiv = document.createElement("div");
            var blogTitle = document.createElement("h1");
            var blogImage = document.createElement("img");
            var blogDescription = document.createElement("p");
            var blogHREF = document.createElement("a");
            blogTitle.textContent = blog.title;
            blogImage.src = blog.image || "placeholder.jpg";
            blogImage.alt = blog.imageAlt;
            blogDescription.textContent = blog.description;
            blogHREF.href = "src/app/blogs/".concat(blog.slug, ".html");
            blogHREF.textContent = "MORE";
            blogDiv.appendChild(blogTitle);
            blogDiv.appendChild(blogImage);
            blogDiv.appendChild(blogDescription);
            blogDiv.appendChild(blogHREF);
            blogContainer.appendChild(blogDiv);
        });
    }
    else {
        console.error("Blog container not found!");
    }
});


async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

exports.default = blogs;
