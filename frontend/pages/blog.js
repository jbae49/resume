import Head from 'next/head';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import styles from '../styles/Blog.module.css';
import { content } from '../translations';
import BlogPost from '../components/BlogPost';
import NavButtons from '../components/NavButtons';

export default function Blog() {
  const [language, setLanguage] = useState('en');
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const handlePostClick = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  const t = content[language];
  
  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...t.blog.posts].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Descending order (newest first)
    });
  }, [t.blog.posts]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Jooyoung (Julia) Bae</title>
        <meta name="description" content="Jooyoung (Julia) Bae's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavButtons language={language} toggleLanguage={toggleLanguage} showBlogLink={false} />

      <main className={styles.main}>
        <div className={styles.blogPage}>
          <header className={styles.header}>
            <h1 className={styles.title}>Jooyoung (Julia) Bae</h1>
            <div className={styles.navigation}>
              <Link href="/" className={styles.navLink}>
                {language === 'en' ? 'Resume' : '이력서'}
              </Link>
            </div>
          </header>

          <section className={styles.blogSection}>
            <h2>{t.sections.blog}</h2>
            <div className={styles.blogContainer}>
              {sortedPosts.map((post, index) => (
                <BlogPost
                  key={index}
                  post={post}
                  onClick={() => handlePostClick(index)}
                  isExpanded={expandedPostIndex === index}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Jooyoung (Julia) Bae</p>
      </footer>
    </div>
  );
} 