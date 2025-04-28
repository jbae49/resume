import React from 'react';
import styles from '../styles/LanguageToggle.module.css';

const LanguageToggle = ({ language, toggleLanguage }) => {
  return (
    <div className={styles.languageToggle}>
      <button 
        onClick={toggleLanguage} 
        className={styles.toggleButton}
      >
        {language === 'en' ? 'KOR 🇰🇷' : 'ENG 🇺🇸'}
      </button>
    </div>
  );
};

export default LanguageToggle;

