export interface Blog {              // type also works
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt?: string;
    slug?: string;
}

const blogs: Blog[] = [
    {
        title: "First Post",
        date: "October 19th, 2024",
        description: "Today, I finally solved the problem about compiling the tsfile, so I'm happy about that. " +
        "I also wrote down some debugging things on a random notepad so that I don't make the same errors again!",
        image: "/Mental-Mapping.jpg", // Use forward slashes
        imageAlt: "Mental Mapping Diagram",
        slug: "Blog-1.html"
    },

    {
        title: "Second Post",
        date: "October 20th, 2024",
        description: "Today, I gotta lock in! I plan on studying for my calculus midterm" + 
        " and catch up on assignments I've been putting off." + 
        " This project is always a fun break though...",
        image: "/JS-File.png", // Use forward slashes
        imageAlt: "Picture of a JS file",
        slug: "Blog-2.html"
    }
];

export default blogs; // This will allow us to access this data anywhere!