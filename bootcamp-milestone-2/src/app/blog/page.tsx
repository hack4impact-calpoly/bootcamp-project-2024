// /app/blog/page.tsx

import React from "react";
import BlogContent from "../components/blog/blogContent"; // Import the BlogContent component
import connectDB from "@/app/database/db"; // MongoDB connection
import Blog from "../database/blogschema"; // MongoDB Blog model

// Function to fetch blog data from the database
async function getBlogs() {
  await connectDB(); // Ensure DB connection is made
  try {
    // Fetch all blogs, sorted by date
    const blogs = await Blog.find().sort({ date: -1 }).lean(); // Use lean() to get plain JavaScript objects
    // Transform the data to include only the required fields (slug, title, description)
    const formattedBlogs = blogs.map((blog) => ({
      slug: blog.slug,
      title: blog.title,
      description: blog.description,
    }));
    return formattedBlogs; // Return the transformed blogs
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; // Return null if there's an error fetching blogs
  }
}

// Define the BlogPage component
const BlogPage: React.FC = async () => {
  const blogs = await getBlogs(); // Fetch blogs directly in the component

  if (!blogs) {
    return <p>No blogs available at the moment.</p>; // Display if no blogs are available
  }

  return (
    <div>
      <h1>Blog</h1>
      <BlogContent blogs={blogs} />{" "}
      {/* Pass the blogs to the BlogContent component */}
    </div>
  );
};

export default BlogPage;


// import React from "react";
// import Blog from "../components/blog/blogContent";

// const BlogPage: React.FC = () => {
//   return (
//     <div>
//       <Blog />
//     </div>
//   );
// };

// export default BlogPage;
