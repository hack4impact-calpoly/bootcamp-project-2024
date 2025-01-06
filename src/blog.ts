type Blog = {
    title : string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;

};

const blogs: Blog[] = [
    {
        title: "Underwater ceramic technician at a multimillion dollar corporation",
        date: "June 2026",
        description: "Acquired skills",
        image: "./hank3.png",
        imageAlt: "Ceramic technician image",
        slug: "job1",
    },
    {
        title: "Job Title",
        date: "June 2026",
        description: "Acquired experience",
        image: "./hank8.jpg",
        imageAlt: "Job image",
        slug: "job2",
    }
];

function appendBlog(){
    const blogContainer = document.getElementById('blog-container');
    if (blogContainer){
        
        blogContainer.innerHTML = "";
        blogs.forEach((b) => {
            const createEl = document.createElement("div")
            createEl.className = 'blog-post'
            createEl.innerHTML = `
                <h2> <a href="blogs/${b.slug}.html">${b.title}</h2>
                <img src="${b.image}" alt="${b.imageAlt}"/>
                <p>${b.description}</p>
            `;
            blogContainer.appendChild(createEl);
        })
    }

}
appendBlog();
