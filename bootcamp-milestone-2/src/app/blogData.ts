import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

// export type Blog = {
//     title: string;
//     date: string;
//     description: string;
//     image: string;
//     imageAlt: string;
//     slug: string;
// }
// const blogs: Blog[] = [
//     {
//         title: "First Blog",
//         date: "10/21/24",
//         description: "This is the first blog",
//         image: "/rainbowrate.png",
//         imageAlt: "it's an image of rainbowrate",
//         slug: "rainbow-rate-post",
//     },
//     {
//         title: "About PurelyYou",
//         date: "8/21/23",
//         description: "This is the next blog about purelyyou",
//         image: "/purelyyou.png",
//         imageAlt: "description of new image",
//         slug: "purely-you-post",
//     },
//     {
//         title: "UFO Data",
//         date: "10/21/24",
//         description: "This is the final blog",
//         image: "/ufo.png",
//         imageAlt: "description of last image",
//         slug: "ufo-post",
//     }
// ]

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
		console.log(err)
	    return null
	}
}

const blogs = getBlogs();
export default blogs;