import { useState } from 'react';
import styles from '../styles/BlogPost.module.css';

export default function BlogPost({ post, onClick, isExpanded }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <div 
      className={`${styles.blogPost} ${isExpanded ? styles.expanded : ''}`}
      onClick={onClick}
    >
      <div className={styles.header}>
        <div className={styles.dateBox}>
          <span>{formatDate(post.date)}</span>
        </div>
        <h3 className={styles.title}>{post.title}</h3>
      </div>
      
      {!isExpanded && (
        <p className={styles.summary}>{post.summary}</p>
      )}
      
      {isExpanded && (
        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
      )}
      
      <div className={styles.readMore}>
        {isExpanded ? 'Click to collapse' : 'Click to read more'}
      </div>
    </div>
  );
} 