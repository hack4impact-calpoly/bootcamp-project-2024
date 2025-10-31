var blogs = [
    {
        title: "My First Blog Post",
        date: "2025-10-28",
        description: "This is my first blog post where I share what I learned starting the bootcamp.",
        image: "./images/first-post.png",
        imageAlt: "Screenshot of my first blog project",
        slug: "my-first-blog-post"
    },
    {
        title: "Learning TypeScript",
        date: "2025-10-27",
        description: "A quick overview of how TypeScript makes JavaScript safer and easier to maintain.",
        image: "./images/learning-ts.png",
        imageAlt: "TypeScript logo and code snippet",
        slug: "learning-typescript"
    }
];
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('blog-container');
    if (container) {
        blogs.forEach(function (blog) {
            var div = document.createElement('div');
            div.className = 'blog-card';
            div.innerHTML = "\n  <a href=\"./blogs/".concat(blog.slug, ".html\" class=\"blog-link\">\n    <h2>").concat(blog.title, "</h2>\n    <p>").concat(blog.date, "</p>\n    <img src=\"").concat(blog.image, "\" alt=\"").concat(blog.imageAlt, "\">\n    <p>").concat(blog.description, "</p>\n  </a>\n      ");
            container.appendChild(div);
        });
    }
});
