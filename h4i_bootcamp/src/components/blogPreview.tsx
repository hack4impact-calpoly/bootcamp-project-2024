import React from 'react';
import style from './blogPreview.module.css';
import Image from 'next/image';

interface BlogPreviewProps {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, date, description, image, imageAlt, slug }) => {
  return (
    <div className={style.previewContainer}>
      <h3>{title}</h3>
      <Image src={image || "/placeholder.jpg"} alt={imageAlt} width={600} height={400} />
      <p>{description}</p>
      <p><small>Posted on: {new Date(date).toLocaleDateString()}</small></p>
      <a href={`/blogs/${slug}`}>Read More</a>
    </div>
  );
};

export default BlogPreview;
