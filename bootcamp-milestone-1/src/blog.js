var blogs = [
    {
        title: "Cinque Terre",
        date: "10/21/2023",
        description: "My first weekend trip exploring another part of Italy!",
        image: "./images/cinque_terre_1.jpg",
        imageAlt: "cinque terre view",
        slug: "cinque-terre.html",
    },
    {
        title: "Tuscany",
        date: "10/21/2023",
        description: "The program-organized event, covering Flourence and Pisa",
        image: "./images/tuscany_group.jpg",
        imageAlt: "tuscany view",
        slug: "tuscany.html",
    },
];
function addBlogs() {
    var blogContainer = document.getElementById("blog-list");
    blogs.forEach(function (blog) {
        var blogPreview = document.createElement("div");
        var blogTitle = document.createElement("h2");
        var blogImage = document.createElement("img");
        var blogDescription = document.createElement("p");
        var blogDate = document.createElement("p");
        var blogLink = document.createElement("a");
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        blogDescription.innerText = blog.description;
        blogDate.innerText = blog.date;
        blogLink.innerText = blog.title;
        blogLink.href = blog.slug;
        blogPreview.classList.add("blogPreview");
        blogTitle.classList.add("blogTitle");
        blogDescription.classList.add("blogDescription");
        blogImage.classList.add("blogImage");
        blogDate.classList.add("blogDate");
        blogLink.classList.add("blogLink");
        blogTitle.appendChild(blogLink);
        blogPreview.appendChild(blogTitle);
        blogPreview.appendChild(blogDescription);
        // blogPreview.appendChild(blogImage);  // don't like the formatting rn
        blogPreview.appendChild(blogDate);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPreview);
    });
}
addBlogs();
