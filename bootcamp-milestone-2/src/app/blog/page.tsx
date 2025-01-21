import React from 'react';
import BlogPreview from '../components/blogPreview';
import { blogs } from '../blogdata/blog';
import styles from './blog.module.css'; 

const Page = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.blogList}>
        {blogs.map(blog => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Page;
