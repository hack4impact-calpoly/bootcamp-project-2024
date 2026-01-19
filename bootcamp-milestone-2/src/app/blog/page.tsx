import blogs from "../blogData";
import type { IBlog } from "@/database/blogSchema";
import BlogPreview from "@/components/blogPreview";
import style from "./blog.module.css"


export default async function Blog(){
    if (blogs !== null){
        return (
            <div className={style.main}>
                <h1 className={style.pageTitle}>Blogs</h1>
                {(await blogs)?.map((blog) => blog._doc).map((blog: IBlog) => 
                    <BlogPreview {...blog} key={blog.slug}/>)}
            </div>
            
        )
    }
    return (
        <p>No blogs.</p>
    )
}