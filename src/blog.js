// Blog Data
var blogs = [
    {
        title: "Grand Trip to the Grand Canyon",
        date: "September 11, 2025",
        description: "Here's the beautiful Grand Canyon in the sunset! While my video recording the sunset has been ruined by an old man standing in front of my camera, I was so glad I was able to witness it through my own eyes! We ended up camping the night there as well, and I was underprepared with my single hoodie and sleeping bag. The night was fun though, as we sat around the bonfire, reminiscing the days where life used to be much simpler than taking two midterms back to back.",
        image: "./gc.jpg",
        slug: "rand trip to the Grand Canyon",
    },
    {
        title: "Visiting Marina Bay (again)",
        date: "August 12, 2025",
        description: "Singapore, if you haven't known, is a tiny island country located on the peninsular tip of Malaysia. In fact, Singapore is so small that you'd have to look at the world map through a microscope to find where it's located. It's a country where you could get from one end to the other while watching a Coldplay concert (yikes!)... unless you end up behind a truck doing 40 on the passing lane. Putting my witty metaphors aside, I'll admit, it does get pretty hot out there. Anyway, here's a pic of the famous Marina Bay Sands Hotel, which I've taken about a thousand times considering Singapore's my home for the past 12 years. (I love elderly women screaming at me for taking a seat on the bus!)",
        image: "./mbs1.JPG",
        slug: "Visiting Marina Bay (again)",
    }
];
// DOM work
var blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    blogs.forEach(function (blog) {
        var blogLink = document.createElement('a');
        blogLink.href = "./blogs/".concat(blog.slug, ".html");
        blogLink.className = 'blog-post-link';
        var blogPostDiv = document.createElement('div');
        blogPostDiv.className = 'floating-tile';
        var image = document.createElement('img');
        image.src = blog.image;
        image.className = 'tile-image';
        var textWrapperDiv = document.createElement('div');
        textWrapperDiv.className = 'tile-text';
        var title = document.createElement('h2');
        title.textContent = blog.title;
        var date = document.createElement('p');
        date.textContent = blog.date;
        date.className = 'blog-date';
        var description = document.createElement('p');
        description.textContent = blog.description;
        description.className = 'blog-description';
        textWrapperDiv.appendChild(title);
        textWrapperDiv.appendChild(date);
        textWrapperDiv.appendChild(description);
        blogPostDiv.appendChild(textWrapperDiv);
        blogPostDiv.appendChild(image);
        blogLink.appendChild(blogPostDiv);
        blogContainer.appendChild(blogLink);
    });
}
