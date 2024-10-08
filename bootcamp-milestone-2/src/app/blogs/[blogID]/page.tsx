import React from "react";
import style from "./blog.module.css";
import Image from "next/image";
import { IComment } from "@/database/blogSchema";
import Comment from "@/components/comment";

type Props = {
  params: { blogID: string };
};

async function getBlog(blogID: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blogs/${blogID}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    const res_j = await res.json();
    return res_j;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { blogID } }: Props) {
  const blog = await getBlog(blogID);
  const blogDate = new Date(blog?.date);

  if (blog) {
    return (
      <div>
        <h1 className={style.pageTitle}>{blog?.title}</h1>
        <h2 className={style.pageDate}>
          <em>{blogDate.toDateString()}</em>
        </h2>

        <div className={style.pageContents}>
          <ul className={style.paragraphList}>
            {blog.content.map((paragraph: string, index: number) => (
              <React.Fragment key={index}>
                <li className={style.paragraph}>{paragraph}</li>
                <br />
              </React.Fragment>
            ))}
          </ul>
          <div className={style.pageComments}>
            <div className={style.pageUploadedComments}>
              <h3 className={style.pageCommentsHeader}>Comments</h3>
              {blog?.comments?.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className={style.pageImages}>
          <Image
            src="/cinque_terre_1.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_2.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_3.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_4.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_sunrise.jpg"
            alt="sunrise at the first town, Monterosso"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_water.jpg"
            alt="picture of crystal-clear water from the hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_me.jpg"
            alt="me at Riomaggiore on the second day"
            className={style.blogPic}
            width="350"
            height="350"
          />
        </div>
      </div>
    );
  } else {
    return <div> not found :( </div>;
  }
}
