import connectDB from "./database/db"; // Import the database connection function
import Blog from "./database/blogSchema"; // Import the Blog model


// typescript type called Blog
// export type Blog = {
//     title: string;
//     date: Date;
//     description: string;
//     image: string;
//     image_alt: string;
//     slug: string;
// };

// fetching from database

export async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    console.error("Error fetching blogs:", err); // Log the error
    	return null;
	}
}

// list of Blogs
// const blogs: Blog[] = [
// 	{
// 		title: "My first blog",
//         date: new Date("10-15-2023"),
//         description: "This is my first blog to write",
//         image: "/images/smiski.jpg",
//         image_alt: "image from home",
//         slug: "My first blog",
//         content: "My first blog. Hi :)",
//         comments: [],
// 	},
// 	{
// 		title: "My second blog",
//         date: new Date("10-15-2023"),
//         description: "This is my second blog to write :)",
//         image: "/images/smiski.jpg",
//         image_alt: "image from home",
//         slug: "My second blog",
//         content: "My first blog. Hi :)",
//         comments: [],
// 	},
// ];



//export default blogs