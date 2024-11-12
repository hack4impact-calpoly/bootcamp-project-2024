var blogs = [
    {
        title: "First Post",
        date: "October 19th, 2024",
        description: "Today, I finally solved the problem about compiling the tsfile, so I'm happy about that. " +
            "I also wrote down some debugging things on a random notepad so that I don't make the same errors again!",
        image: "C:/Users/sotiv/Documents/Library/Pictures/Mental-Mapping.jpg", // Use forward slashes
        imageAlt: "Diagram of a mental mapping scenario",
        slug: "Blog-1.html"
    },
    {
        title: "Second Post",
        date: "October 20th, 2024",
        description: "Today, I gotta lock in! I plan on studying for my calculus midterm" +
            " and catch up on assignments I've been putting off." +
            " This project is always a fun break though...",
        image: "C:/Users/sotiv/Documents/Library/Pictures/JS-File.png", // Use forward slashes
        imageAlt: "Picture of  JS file",
        slug: "Blog-2.html"
    }
];
//blogs.forEach(blog => {
//logBlogs(blogs);
function logBlogs(blogs) {
    var blogContainer = document.getElementById('blog-container');
    blogs.forEach(function (blog) {
        var blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        var titleEl = document.createElement('h3');
        titleEl.innerHTML = blog.title;
        blogPost === null || blogPost === void 0 ? void 0 : blogPost.appendChild(titleEl);
        var dateEl = document.createElement('h5');
        dateEl.innerHTML = blog.date;
        blogPost === null || blogPost === void 0 ? void 0 : blogPost.appendChild(dateEl);
        var descEl = document.createElement('p');
        descEl.innerHTML = blog.description;
        blogPost === null || blogPost === void 0 ? void 0 : blogPost.appendChild(descEl);
        var imgEl = document.createElement('img');
        imgEl.src = blog.image;
        imgEl.alt = blog.imageAlt;
        blogPost.appendChild(imgEl);
        // Create and append link
        var linkEl = document.createElement('a');
        linkEl.href = blog.slug;
        linkEl.innerHTML = "Read more";
        linkEl.target = "_blank"; // Open link in a new tab
        blogPost.appendChild(linkEl);
        // Append the blog post to the container
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPost);
    });
}
logBlogs(blogs);
