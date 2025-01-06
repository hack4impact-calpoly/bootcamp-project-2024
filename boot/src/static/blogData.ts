export type Blog  = {
    title : string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;

};

export const blogs: Blog[] = [
    {
        title: "Underwater ceramic technician at a multimillion dollar corporation",
        date: "June 2026",
        description: "Acquired skills",
        image: "https://i.imgur.com/2vWD43c.jpeg",
        imageAlt: "Ceramic technician image",
        slug: "job1",
    },
    {
        title: "Job Title",
        date: "June 2026",
        description: "Acquired experience",
        image: "https://i.imgur.com/2vWD43c.jpeg",
        imageAlt: "Job image",
        slug: "job2",
    }
];

//function appendBlog(){
//    const blogContainer = document.getElementById('blog-container');
//    if (blogContainer){
//        
//        blogContainer.innerHTML = "";
//        blogging.forEach((b) => {
//            const createEl = document.createElement("div")
//            createEl.className = 'blog-post'
//            createEl.innerHTML = `
//                <h2> <a href="blogs/${b.slug}.html">${b.title}</h2>
//                <img src="${b.image}" alt="${b.imageAlt}"/>
//                <p>${b.description}</p>
//            `;
//           blogContainer.appendChild(createEl);
//        })
//    }
//
//}
//appendBlog();