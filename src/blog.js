var blogs = [
    {
        title: "Travel",
        date: "Summer 2024",
        description: "Places I've been this past summer",
        image: "Camping.jpg",
        imageALT: "Picture of a forest",
        slug: "travel-summer-2024",
    },
    {
        title: "Food",
        date: "Summer 2024",
        description: "My favorite meals that I've eaten/cooked this past summer",
        image: "Food.jpg",
        imageALT: "Picture of a meal I made",
        slug: "food-summer-2024",
    },
];

function appendingBlog() {
    var blogContainer = document.getElementById('blog-container');

    if (blogContainer) { // make sure we only do this to blogs
        blogs.forEach(function (blog) {
            var blogPost = document.createElement('div'); // make div
            blogPost.className = 'blog-post'; // enable styling

            var title = document.createElement('h1'); // make title
            title.textContent = blog.title; // ^
            var titleLink = document.createElement('a');
            titleLink.href = blog.slug + '.html';
            titleLink.appendChild(title);

            var date = document.createElement('p');
            date.textContent = 'Date Posted: ' + blog.date;

            var image = document.createElement('img'); // Deal with images
            image.src = blog.image; // ^
            image.alt = blog.imageALT; // Alt images

            var description = document.createElement('p'); // p for description
            description.textContent = blog.description; // ^

            blogPost.appendChild(titleLink); // append everything to blogDiv
            blogPost.appendChild(date);
            blogPost.appendChild(image);
            blogPost.appendChild(description);

            blogContainer.appendChild(blogPost); // append blogDiv to cont
        });
    }
}

appendingBlog();
