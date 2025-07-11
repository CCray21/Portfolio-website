import styles from './Header.module.css';
import react, { useState, useEffect } from 'react';

function Header()
{
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        function handleScroll() {
          console.log("scrolled:", window.scrollY);
          if (window.scrollY > 1) {
            setScrolled(true);
            console.log("scrolled");
          } else if (window.scrollY < 1) {
            setScrolled(false);
            console.log("unscrolled");
          }
        }
          
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
            <ul className={styles.navList}>
            <li><a href="#aboutMe">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/CV.docx" download>CV (download)</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header