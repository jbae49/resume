import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import LanguageToggle from '../components/LanguageToggle';
import { content } from '../translations/content';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [language, setLanguage] = useState('en');
  
  const handleSectionHover = (section) => {
    setActiveSection(section);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const t = content[language];

  return (
    <div className={styles.container}>
      <Head>
        <title>Jooyoung (Julia) Bae | Resume</title>
        <meta name="description" content="Jooyoung (Julia) Bae's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />

      <main className={styles.main}>
        <div className={styles.resume}>
          <header className={styles.header}>
            <h1 className={styles.name}>Jooyoung (Julia) Bae</h1>
            <div className={styles.contact}>
              <p>Email: <a href="mailto:jooyoungmmm@gmail.com">jooyoungmmm@gmail.com</a></p>
              <p>Mobile: +82-10-6435-6299</p>
            </div>
          </header>

          <section 
            className={`${styles.section} ${activeSection === 'education' ? styles.activeSection : ''}`}
            onMouseEnter={() => handleSectionHover('education')}
            onMouseLeave={() => handleSectionHover('')}
          >
            <h2>{t.sections.education}</h2>
            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <h3>{t.education.title}</h3>
                <span>{t.education.period}</span>
              </div>
              <p>{t.education.description}</p>
            </div>
          </section>

          <section 
            className={`${styles.section} ${activeSection === 'certifications' ? styles.activeSection : ''}`}
            onMouseEnter={() => handleSectionHover('certifications')}
            onMouseLeave={() => handleSectionHover('')}
          >
            <h2>{t.sections.licenses}</h2>
            {t.licenses.map((license, index) => (
              <div className={styles.entry} key={index}>
                <div className={styles.entryHeader}>
                  <h3>{license.title}</h3>
                  <span>{license.period}</span>
                </div>
              </div>
            ))}
          </section>

          <section 
            className={`${styles.section} ${activeSection === 'experience' ? styles.activeSection : ''}`}
            onMouseEnter={() => handleSectionHover('experience')}
            onMouseLeave={() => handleSectionHover('')}
          >
            <h2>{t.sections.experience}</h2>
            
            {t.experience.map((exp, index) => (
              <div className={styles.entry} key={index}>
                <div className={styles.entryHeader}>
                  <h3>{exp.company}</h3>
                  <span>{exp.location}</span>
                </div>
                <div className={styles.entrySubheader}>
                  <h4>{exp.role}</h4>
                  <span>{exp.period}</span>
                </div>
                <ul>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section 
            className={`${styles.section} ${activeSection === 'awards' ? styles.activeSection : ''}`}
            onMouseEnter={() => handleSectionHover('awards')}
            onMouseLeave={() => handleSectionHover('')}
          >
            <h2>{t.sections.awards}</h2>
            
            {t.awards.map((award, index) => (
              <div className={styles.entry} key={index}>
                <div className={styles.entryHeader}>
                  <h3>{award.title}</h3>
                  <span>{award.period}</span>
                </div>
                <div className={styles.entrySubheader}>
                  <h4>{award.award}</h4>
                </div>
                <p>{award.description}</p>
                {award.demoLink && (
                  <p className={styles.demoLink}>
                    <span>{award.demoLabel}</span> <a href={award.demoLink} target="_blank" rel="noopener noreferrer">{award.demoText}</a>
                  </p>
                )}
              </div>
            ))}
          </section>

          <section 
            className={`${styles.section} ${activeSection === 'leadership' ? styles.activeSection : ''}`}
            onMouseEnter={() => handleSectionHover('leadership')}
            onMouseLeave={() => handleSectionHover('')}
          >
            <h2>{t.sections.leadership}</h2>
            
            {t.leadership.map((item, index) => (
              <div className={styles.entry} key={index}>
                <div className={styles.entryHeader}>
                  <h3>{item.title}</h3>
                  <span>{item.period}</span>
                </div>
                <p>{item.description}</p>
                {item.link && (
                  <p className={styles.demoLink}>
                    <span>{item.linkLabel}</span> <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a>
                  </p>
                )}
              </div>
            ))}
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Jooyoung (Julia) Bae</p>
      </footer>
    </div>
  );
} 