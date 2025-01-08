var blogs = [
  {
    title: "Green Thai Tea Recipe",
    date: "2024-06-15",
    description: "Green Thai Tea Recipe",
    image: "greenthaitea.jpg", // Replace with a real image URL
    imageAlt: "Simple to follow instructions to create Green Thai Tea",
    slug: "green-thai-tea",
  },
  {
    title: "Vietnamese Coffee Recipe",
    date: "2024-07-01",
    description: "Vietnamese Coffee Recipe",
    image: "vietcoffee.jpg", // Replace with a real image URL
    imageAlt: "Simple to follow instructions to create Viet Coffee",
    slug: "viet-coffee",
  },
];

function displayBlogs(blogs) {
  var blogContainer = document.getElementById("blog-container");
  if (!blogContainer) return;

  blogContainer.innerHTML = "";

  blogs.forEach(function (blog) {
    var div = document.createElement("div");
    div.classList.add("blog-entry");

    var link = document.createElement("a");
    link.href = `/Users/hc/Desktop/bootcamp-project-2024/blogs/${blog.slug}.html`; // Set link to individual blog page
    link.classList.add("blog-link");

    var h1 = document.createElement("h1");
    h1.textContent = blog.title;

    var img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imageAlt;

    var p = document.createElement("p");
    p.textContent = blog.description;

    link.appendChild(h1);
    link.appendChild(img);
    link.appendChild(p);
    div.appendChild(link);
    blogContainer.appendChild(div);
  });
}

displayBlogs(blogs);
