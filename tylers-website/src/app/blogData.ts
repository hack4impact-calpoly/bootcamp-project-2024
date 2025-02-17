export type Blog = {
	title: string;
	date: string;
	description: string;
    image: string;
    imageAlt: string;
    slug: string;  // A slug is a URL name used to redirect to a specific page 
};

export const blogs: Blog[] = [
    {
        title: "First Date",
        date: "August 1st, 2023",
        description: "Today I asked out IU on a date to go to a flower garden and she said yes!!",
        image: "/images/iu flower.jpg",
        imageAlt: "alt/path",
        slug: "https://www.instagram.com/dlwlrma/?hl=en",
    },
    {
        title: "ENGAGED!!!",
        date: "November 14th, 2023",
        description: "I have nothing to say but thank you god",
        image: "/images/iu puffy.jpg",
        imageAlt: "alt/path",
        slug: "https://www.instagram.com/dlwlrma/?hl=en",
    },
    {
        title: "We got married!!!!!!",
        date: "Feburary 14th, 2023",
        description: "I wanna thank my mom, and my dad, and my dog, and my sweater, and my cow.",
        image: "/images/iu white.jpg",
        imageAlt: "alt/path",
        slug: "https://www.instagram.com/dlwlrma/?hl=en",
    }
]


// function appendBlogsToContainer(blogs: Blog[]) {
//     const blogContainer = document.getElementById('blog-container');

//     if (!blogContainer) {
//         console.error('Blog container not found :(');
//         return;
//     }

//     blogs.forEach(blog => {
//         const blogDiv = document.createElement('div');
//         blogDiv.classList.add('blog');

//         // make a title element with h1 styling and append it as a child
//         const title = document.createElement('h1');
//         title.textContent = blog.title;
//         blogDiv.appendChild(title);

//         // the same as the title element but with p styling
//         const date = document.createElement('p');
//         date.textContent = blog.date;
//         blogDiv.appendChild(date);

//         const description = document.createElement('p');
//         description.textContent = blog.description;
//         blogDiv.appendChild(description);

//         const image = document.createElement('img');
//         image.src = blog.image;
//         image.alt = blog.imageAlt;
//         blogDiv.appendChild(image);

//         const readMoreLink = document.createElement('a');
//         readMoreLink.href = `/blog/${blog.slug}`;
//         readMoreLink.textContent = 'This is her instagram. Go follow her';
//         blogDiv.appendChild(readMoreLink);

//         // append this div for the blog with all the child elements to the blogContainer
//         blogContainer.appendChild(blogDiv);
//     });
// }

