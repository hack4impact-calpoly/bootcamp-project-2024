import React from "react";
import Image from "next/image";
import {BlogObject} from "@/database/blogSchema";
import Comment from "@/components/commentComponent";
import CommentBox from "@/components/commentBoxComponent";
import { IComment } from "@/database/blogSchema";



async function postComment(slug: string, comment: IComment){
    "use server"
    try {

        // CALL POST  
        const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000`;
        const res = await fetch(`${url}/api/blogs/${slug}/comment`, {
            method: "POST",
            body: JSON.stringify(comment),
            cache: "no-store"
        });

         // Check if the post request was successful
         if (!res.ok) {
            throw new Error("Failed to fetch blog!");
        }

        return res.json();



    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }


}


async function getBlog(slug: string) {

    try {
        const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000`;
        const res = await fetch(`${url}/api/blogs/${slug}`, {
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

export default async function Blog({ params }: { params: Promise<{slug: string}>}){

    const { slug } = await params;

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
                <h2>Comments</h2>

                <h3>Leave a comment:</h3>
                <CommentBox postComment={postComment} slug={slug}></CommentBox>
                


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