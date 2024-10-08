import React from "react";
import styles from "./blogPreview.module.css";
import Link from "next/link";
import Image from "next/image";

type IProps = {
  title: string;
  date: Date;
  description: string;
  blogID: string;
  image: string;
  imageAlt: string;
};

export default function BlogPreview(props: IProps) {
  return (
    <div className={styles.blogPreview}>
      <h3 className={styles.blogPreviewTitle}>
        <Link href={`/blogs/${props.blogID}`}>{props.title}</Link>{" "}
      </h3>
      <div className={styles.blogPreviewInfo}>
        <Image
          className={styles.blogPreviewPic}
          src={props.image}
          alt={props.imageAlt}
          width="500"
          height="500"
        ></Image>
        <p className={styles.blogPreviewDescription}>{props.description}</p>
        <p className={styles.blogPreviewDate}>
          <strong>Posted on:</strong> {props.date.toDateString()}
        </p>
      </div>
    </div>
  );
}
