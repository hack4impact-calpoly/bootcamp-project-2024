type Blog {
    title: string;
    date: string;

    description: string;
    image: string;
    imageAlt: string;
    slug: string;

};

const blogs: Blog[] = [ //ending here...next step is to "dynamically append..."
    {
        title: "First Post",
        date: "October 19th, 2024",
        description: "Today, I finally solved the problem about compiling the tsfile, so I'm happy about that. " +
        "I also wrote down some debugging things on a random notepad so that I don't make the same errors again!",
        image: "C:/Users/sotiv/Documents/Library/Pictures/Mental-Mapping.jpg", // Use forward slashes
        imageAlt: "Mental Mapping Diagram",
        slug: "Blog-1.html"
    },

    {
        title: "Second Post",
        date: "October 20th, 2024",
        description: "Today, I gotta lock in! I plan on studying for my calculus midterm" + 
        " and catch up on assignments I've been putting off." + 
        " This project is always a fun break though...",
        image: "C:/Users/sotiv/Documents/Library/Pictures/JS-File.png", // Use forward slashes
        imageAlt: "Picture of a JS file",
        slug: "Blog-2.html"
    }
];





//blogs.forEach(blog => {


//logBlogs(blogs);

function logBlogs(blogs: Blog[]): void{ //appending all the bogs
    const blogContainer = document.getElementById('blog-container');

    blogs.forEach(blog => {

        const blogPost = document.createElement('div')
        blogPost.className = 'blog-post'


        const titleEl = document.createElement('h3')
        titleEl.innerHTML = blog.title;
        blogPost?.appendChild(titleEl);

        const dateEl = document.createElement('h5');
        dateEl.innerHTML = blog.date;
        blogPost?.appendChild(dateEl)

        const descEl = document.createElement('p');
        descEl.innerHTML = blog.description;
        blogPost?.appendChild(descEl);

        const imgEl = document.createElement('img');
        imgEl.src = blog.image;
        imgEl.alt = blog.imageAlt;
        blogPost.appendChild(imgEl);

        
        const linkEl = document.createElement('a');
        linkEl.href = blog.slug;
        linkEl.innerHTML = "Read more";
        linkEl.target = "_blank"; 
        blogPost.appendChild(linkEl);
        
        blogContainer?.appendChild(blogPost);
    });
}

logBlogs(blogs);


