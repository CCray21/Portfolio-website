import styles from './Header.module.css';
import React, { useState, useEffect } from 'react';

function Header()
{
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100 && !scrolled) {
              setScrolled(true);
            } else if (window.scrollY < 60 && scrolled) {
              setScrolled(false);
            }
          }
          
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
            <ul className={styles.navList}>
            <li><a href="#aboutMe">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/CV.docx" download>CV (download)</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Header