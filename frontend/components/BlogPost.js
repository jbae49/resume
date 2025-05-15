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

  // Function to process content and allow HTML content
  const renderContent = (content) => {
    // Check if content contains HTML tags or image references
    if (content.includes('<img') || content.includes('<p>') || content.includes('<h')) {
      // If it contains HTML, use dangerouslySetInnerHTML to render it
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    } else {
      // Otherwise, split by double newlines to separate paragraphs (old behavior)
      const paragraphs = content.split(/\n\n+/);
      
      return paragraphs.map((paragraph, index) => {
        // Skip empty paragraphs
        if (!paragraph.trim()) return null;
        
        return (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        );
      });
    }
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
          {renderContent(post.content)}
        </div>
      )}
      
      <div className={styles.readMore}>
        {isExpanded ? 'Click to collapse' : 'Click to read more'}
      </div>
    </div>
  );
} 