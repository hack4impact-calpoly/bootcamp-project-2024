import Head from 'next/head';
import BlogPreview from '../components/blogPreview';
import blogs from '../blogData';

export default function Blog() {
  return (
    <div>
            
        <Head>
            <title className = 'title'> Blog Page </title>
        </Head>


            <h1 className = 'title'>
                Blog 
            </h1>

            <div id = "blog-container"> 

            </div>

            <script src= "C:\Users\sotiv\Documents\Computer Projects\bootcamp-project-2024\src\blog.js" > </script>

            {blogs.map(blog => (
          <BlogPreview 
            key={blog.title}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
          />
        ))}

        
    </div>

  );
}