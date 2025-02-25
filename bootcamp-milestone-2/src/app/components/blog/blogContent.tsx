import React from "react";
import Link from "next/link";
import styles from "./blogContent.module.css";

type BlogContentProps = {
  blogs: { slug: string; title: string; description: string }[];
};

const BlogContent: React.FC<BlogContentProps> = ({ blogs }) => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <div key={blog.slug} className={styles.blogCard}>
            <h2 className={styles.blogName}>{blog.title}</h2>
            <p className={styles.blogDescription}>{blog.description}</p>
            <Link href={`/blog/${blog.slug}`} className={styles.blogLink}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;




// // /app/blogs/page.tsx

// import React from "react";
// import styles from "./blogContent.module.css";
// import Link from "next/link";
// import connectDB from "@/app/database/db";
// import Blog from "@/app/database/blogschema"; // Assuming you have a Blog model

// // Fetch blogs from the MongoDB database
// async function getBlogs() {
//   await connectDB(); // Make sure the DB connection is established

//   try {
//     // Query for all blogs and sort by date
//     const blogs = await Blog.find().sort({ date: -1 }).orFail();
//     return blogs;
//   } catch (err) {
//     console.error("Error fetching blogs:", err);
//     return null; // Return null if no blogs are found or there's an error
//   }
// }

// type BlogProps = {
//   blogs:
//     | {
//         slug: string;
//         title: string;
//         description: string;
//       }[]
//     | null;
// };

// const BlogPage: React.FC<BlogProps> = ({ blogs }) => {
//   if (!blogs) {
//     return <p>No blogs available at the moment.</p>;
//   }

//   return (
//     <main className={styles.blogContainer}>
//       <h1 className={styles.blogTitle}>Blog</h1>
//       <div className={styles.blogList}>
//         {blogs.map((blog) => (
//           <div key={blog.slug} className={styles.blogCard}>
//             <h2 className={styles.blogName}>{blog.title}</h2>
//             <p className={styles.blogDescription}>{blog.description}</p>
//             <Link href={`/blogs/${blog.slug}`} className={styles.blogLink}>
//               Read More
//             </Link>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// // This function will run on the server before rendering the page
// export async function getServerSideProps() {
//   const blogs = await getBlogs(); // Fetch blogs from the DB
//   return {
//     props: { blogs }, // Pass the blogs data as props to the BlogPage component
//   };
// }

// export default BlogPage;
