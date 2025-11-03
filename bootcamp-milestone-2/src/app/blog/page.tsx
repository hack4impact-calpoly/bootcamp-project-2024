import BlogPreview from '@/src/components/blogPreview';
import blogs from '../blogData';


export default function Blog() {
    return (

    <>
    <div id = "blog-events">
    {blogs.map(blog => 
      <BlogPreview 
        key={blog.slug} 
        title = {blog.title}
        description={blog.description}
        image={blog.image}
        date={blog.date}
        slug ={blog.slug}
        />
	)}
    </div>
    </>
    )
}