import React from 'react';
import style from './blogPreview.module.css'
import type { IBlog } from '@/database/blogSchema';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreview(props: IBlog) {
  const date: string[] = props.date.toString().split(" ");
  const dateFormat: string = date[1] + " " + date[2] + ", " + date[3];
  console.log("slug:", props.slug)
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.main}>
      <Link href={"/blog/" + props.slug}>
        <div className={style.blog}>
          <h3 className={style.h1}>{props.title}</h3>
          <p className={style.date}>Posted on {dateFormat}.</p>
          <div>
            <Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
            <div className={style.text}>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </Link>
	  </div>
  );
}