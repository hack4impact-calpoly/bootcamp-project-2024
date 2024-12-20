// Define Blog interface for type safety
export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageALT: string;
    slug: string;
}

// Array of blog objects (mimicking database structure)
const blogs: Blog[] = [
    {
        title: "Travel",
        date: "Summer 2024",
        description: "Places I've been this past summer",
        image: "/images/Camping.jpg",  // Make sure images are in the public folder
        imageALT: "Picture of a forest",
        slug: "travel-summer-2024",
    },
    {
        title: "Food",
        date: "Summer 2024",
        description: "My favorite meals that I've eaten/cooked this past summer",
        image: "/images/Food.jpg",  // Make sure images are in the public folder
        imageALT: "Picture of a meal I made",
        slug: "food-summer-2024",
    },
];

// Exporting blogs to allow access in other parts of the application
export default blogs;
