import React from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimized images
import styles from './blogPreview.module.css'; // Make sure the CSS path is correct

// Define props type based on your Blog type
type BlogPreviewProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
};

// Pass props to the component function
const BlogPreview: React.FC<BlogPreviewProps> = ({ title, date, description, image, imageAlt }) => {
  return (
    <div className={styles.div}> {/* Make sure 'div' is a valid class in your CSS module */}
      <h3>{title}</h3>
      <div>
        <Image src={image} alt={imageAlt} width={500} height={300} layout="responsive" />
        <p>{description}</p>
        <p>Posted on: {date}</p>
      </div>
    </div>
  );
};

export default BlogPreview;
