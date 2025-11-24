import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreview(props: any) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <>
      <h2>
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>;
      </h2>
      <span className="post-container">
        <span className="description-container">
          <h3>Description:</h3>
          <div>
            {props.description}
            <div>{(props.date)}</div>
          </div>
        </span>

        <div className="image-container">
          <img src={props.image} alt={props.imageAlt} />
        </div>
      </span>
    </>

  );
}