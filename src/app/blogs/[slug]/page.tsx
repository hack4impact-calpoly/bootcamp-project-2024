import React from 'react';
import Image from 'next/image';
import styles from "./page.module.css"
import Comment from '@/components/comments';
import BlogCommentBox from '@/components/blogCommentBox'

type IComment = {
    user: string;
    comment: string;
    date: Date;
}

async function getBlog(slug: string) {
    try {
        const res = await fetch(`/api/Blogs/${slug}`, {
        cache: 'no-store',
        });        
        if (!res.ok) throw new Error('Failed to fetch blog');
        return res.json();
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
        return null;
    }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const awaitedParams = await params;
	const slug = awaitedParams.slug;
    const blog = await getBlog(slug); 

    if (!blog) {
        return <div>Blog not found.</div>;
    }

    return (
        <div>
            <h1 className={styles.pageTitle}>{blog.title}</h1>
            <p className={styles.blogDate}>{blog.date}</p>
            <div className={styles.blogDiv}>
                <p>{blog.description}</p>
                <Image 
                className={styles.blogImage}
                src={blog.image} 
                alt={blog.imageAlt}
                width={300}
                height={300}/>
            </div>
            <div>
                <BlogCommentBox slug={(await params).slug}/>
                <h3>{blog.comments.length === 1 ? "1 Comment" : `${blog.comments.length + " Comments"}`}</h3>
                <div className={styles.commentBox}>
                    {blog.comments.map((comment : IComment, index : number) => (
                        <Comment key={index} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
}
