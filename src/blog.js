var blogs = [
    {
        title: "Underwater ceramic technician at a multimillion dollar corporation",
        date: "June 2026",
        description: "Acquired skills",
        image: "./hank3.png",
        imageAlt: "Ceramic technician image",
        slug: "job1",
    },
    {
        title: "Job Title",
        date: "June 2026",
        description: "Acquired experience",
        image: "./hank8.jpg",
        imageAlt: "Job image",
        slug: "job2",
    }
];
function appendBlog() {
    var blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        blogContainer.innerHTML = "";
        blogs.forEach(function (b) {
            var createEl = document.createElement("div");
            createEl.className = 'blog-post';
            createEl.innerHTML = "\n                <h2> <a href=\"blogs/".concat(b.slug, ".html\">").concat(b.title, "</h2>\n                <img src=\"").concat(b.image, "\" alt=\"").concat(b.imageAlt, "\"/>\n                <p>").concat(b.description, "</p>\n            ");
            blogContainer.appendChild(createEl);
        });
    }
}
appendBlog();
