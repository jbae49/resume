import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavButtons.module.css';

const NavButtons = ({ language, toggleLanguage, showBlogLink = true }) => {
  return (
    <div className={styles.navButtons}>
      <button 
        onClick={toggleLanguage} 
        className={styles.toggleButton}
      >
        {language === 'en' ? 'KOR 🇰🇷' : 'ENG 🇺🇸'}
      </button>
      
      {showBlogLink && (
        <Link href="/blog" className={styles.blogButton}>
          {language === 'en' ? 'Blog' : '블로그'}
        </Link>
      )}
    </div>
  );
};

export default NavButtons; 