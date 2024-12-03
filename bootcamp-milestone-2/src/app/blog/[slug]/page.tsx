import React from "react";
import Image from "next/image";
import {BlogObject} from "@/database/blogSchema";
import Comment from "@/components/commentComponent";



type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {

    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
            cache: "no-store",
        })


        // Check if the get request was successful
        if (!res.ok) {
            throw new Error("Failed to fetch blog!");
        }

        return res.json();
    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }

}

export default async function Blog({ params: {slug} }: Props) {

    const blog: BlogObject = await getBlog(slug);



    return blog != null ? (
        <main>
            <h1 className="page-title">{blog.title}</h1>

            <div className="blog-container">
                <h2>{new Date(blog.date).toDateString()}</h2>
                <Image src={blog.image} alt={blog.imageAlt} width="504" height="378"></Image>
                                

            </div>

            <div className="blog-content">
                <p>
                    {blog.content}
                </p>
            </div>

            <div className="blog-comments">
                {blog.comments.map((comment, index) => (
                        <Comment key={index} comment={comment} />
                    ))}
            </div>


        </main>
    ) : (
        <main>
            <h1 className="page-title">404 - Blog Not Found</h1>

        </main>
    );



}