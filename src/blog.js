// Example blog data
var blogs = [
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
function displayBlogs(blogPosts) {
    var blogContainer = document.getElementById("blog-posts-container");
    if (!blogContainer) {
        console.error("Blog container not found.");
        return;
    }
    blogPosts.forEach(function (blog) {
        var blogElement = document.createElement("article");
        blogElement.classList.add("blog-post");
        blogElement.innerHTML = "\n      <h2 class=\"post-title\"><a href=\"blogs/".concat(blog.slug, ".html\">").concat(blog.title, "</h2>\n      <p class=\"post-date\">").concat(blog.date, "</p>\n      <img src=\"").concat(blog.image, "\" alt=\"").concat(blog.imageAlt, "\" class=\"post-image\"/>\n      <p class=\"post-description\">").concat(blog.description, "</p>\n      <a href=\"").concat(blog.slug, "?slug=").concat(blog.slug, "\" class=\"read-more\">Read more</a>\n    ");
        blogContainer.appendChild(blogElement);
    });
}
displayBlogs(blogs);
