// Array of data for blog posts
var blogs = [
    {
        title: "Durrlennium Falcon!",
        date: "October 14, 2025",
        description: "I built this spinoff the Lego Fortnite Durr Buger based off the iconic Star Wars Millennium Falcon!",
        image: "images/durrlennium_falcon.jpg",
        imageAlt: "Image of the Lego Durrlennium Falcon I built!",
        slug: "durrlennium-falcon-build"
    },
    {
        title: "Feeding Fuzzy Llama",
        date: "October 14, 2025",
        description: "I fed a furry creature at SLO Ranch!",
        image: "images/feeding.jpg",
        imageAlt: "Image of me feeding a furry creature at SLO Ranch!",
        slug: "feeding-fuzzy-llama"
    }
];
// Function to append blog container to the DOM in order to display blog posts
function appendBlogContainer() {
    //blog list element from the HTML
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer)
        return;
    // Go through each blog post and create HTML elements to display them
    blogs.forEach(function (blog) {
        //create a wrapper div
        var blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        // Create elements for blog post element
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var title = document.createElement("h2");
        title.textContent = blog.title;
        var date = document.createElement("p");
        date.textContent = blog.date;
        var description = document.createElement("p");
        description.textContent = blog.description;
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html");
        link.textContent = "Read more";
        // Logic for creating and appending blog elements...
        blogPost.appendChild(image);
        blogPost.appendChild(title);
        blogPost.appendChild(date);
        blogPost.appendChild(description);
        blogPost.appendChild(link);
        //to append the whole blogPost to the blog container
        blogContainer.appendChild(blogPost);
    });
}
appendBlogContainer();
