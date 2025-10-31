const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const blog = blogs.find(b => b.slug === slug);

  document.getElementById("post-title").textContent = blog.title;
  document.getElementById("post-page-title").textContent = blog.title;
  document.getElementById("post-date").textContent = blog.date;

  const img = document.getElementById("post-image");
  img.src = blog.image;          
  img.alt = blog.imageAlt;       

  document.getElementById("post-content").textContent = blog.description;
