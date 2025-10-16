//Define the Blog type; representing the structure of a blog post
type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

// Array of data for blog posts
const blogs: Blog[] = [
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
    const blogContainer = document.getElementById("blog-container");
    if (!blogContainer) return;

    // Go through each blog post and create HTML elements to display them
    blogs.forEach((blog) => {
        //create a wrapper div
        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");

        // Create elements for blog post element
	    const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        
        const title = document.createElement("h2");
        title.textContent = blog.title;
        
        const date = document.createElement("p");
        date.textContent = blog.date;

        const description = document.createElement("p");
        description.textContent = blog.description;
        
        const link = document.createElement("a");
        link.href = `blogs/${blog.slug}.html`;
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

