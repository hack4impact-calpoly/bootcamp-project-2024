"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//would throw error in inspector with the line above not commented out
const blogs = [
    {
        title: "Happy Birthday Dominic",
        date: "9/19/2025",
        description: "Here was my attempted college dorm kitchen cake for Dominic's 19th birthday! May it be a great year!",
        image: "DominicsBday.png",
        imageAlt: "Image of a birthday cake",
        slug: "",
    },
    {
        title: "Pismo Beach Adventure",
        date: "10/11/2025",
        description: "A beautiful sunset at Pismo beach for my birthday weekend with friends!",
        image: "PismoBeach.jpg",
        imageAlt: "Image of a sunset at pismo beach",
        slug: "",
    },
    {
        title: "Running In France",
        date: "8/21/2025",
        description: "This summer I visited family in France and got to go on a lot of mountain runs with my uncle!",
        image: "Runningpfp1.jpg",
        imageAlt: "Image of me running",
        slug: "",
    },
];
const blogPostContainer = document.getElementById("blog-events");
if (blogPostContainer) {
    blogs.forEach((blog) => {
        const title = document.createElement("h2");
        title.textContent = blog.title;
        blogPostContainer.appendChild(title);
        const container = document.createElement("span");
        container.className = "post-container";
        blogPostContainer.appendChild(container);
        const descriptionContainer = document.createElement("span");
        descriptionContainer.className = "description-container";
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";
        const descriptionHeader = document.createElement("h3");
        descriptionHeader.textContent = "Description:";
        const description = document.createElement("div");
        description.textContent = blog.description;
        const date = document.createElement("div");
        date.textContent = blog.date;
        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        descriptionContainer.appendChild(descriptionHeader);
        descriptionContainer.appendChild(description);
        description.appendChild(date);
        imageContainer.appendChild(image);
        container.appendChild(descriptionContainer);
        container.appendChild(imageContainer);
    });
}
//# sourceMappingURL=blog.js.map