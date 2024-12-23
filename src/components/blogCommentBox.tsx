'use client'
import React from 'react';
import { useState } from 'react';
import style from './blogCommentBox.module.css'

interface BlogCommentBoxProps{
    slug: string;
}

export default function BlogCommentBox({ slug }: BlogCommentBoxProps) {
    const [formData, setFormData] = useState({
        name: "",
        comment: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async () => {
        try {
          await fetch(`https://bootcamp-project-2024.vercel.app/api/Blogs/${slug}`, {
            method: 'POST',
            body: JSON.stringify({
              user: formData.name,
              comment: formData.comment,
              date: new Date()
            }),
          });
          setFormData({ name: '', comment: '' });
        } catch {
            throw new Error('Failed to post comment');
        }
      };

    return (
    <div className={style.commentBox}>
      <h3>Add a Comment!</h3>
      <form id={style.commentForm} onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input
            className={style.topRow}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
        />
        </div>
        <label htmlFor="message">Comment</label>
        <textarea
          id={style.comment}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />
        <input id="contact-submit" type="submit"/>
      </form>
    </div>
  );
}