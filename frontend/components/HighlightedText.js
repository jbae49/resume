import React from 'react';
import styles from '../styles/Home.module.css';

const HighlightedText = ({ text, keywords }) => {
  if (!keywords || keywords.length === 0) {
    return <span>{text}</span>;
  }

  // Escape regex special characters in keywords
  const escapedKeywords = keywords.map(keyword => 
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );

  // Create regex pattern for all keywords
  const pattern = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
  
  // Split text by keywords and create array of spans
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        // Check if this part matches any keyword (case insensitive)
        const isKeyword = keywords.some(keyword => 
          part.toLowerCase() === keyword.toLowerCase()
        );
        
        return isKeyword ? (
          <span key={i} className={styles.keyword} title={`Keyword: ${part}`}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
};

export default HighlightedText; 