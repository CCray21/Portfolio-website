import styles from './Header.module.css';
import react, { useState, useEffect } from 'react';

function Header()
{
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
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

    const toggleMenu = () => {
      setMenuOpen(prev => !prev)
      console.log('menuOpen')
    }

    return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
        </button>
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
            <li><a href="#aboutMe" onClick={() => setMenuOpen(false)}>About me</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="/CV.docx" download onClick={() => setMenuOpen(false)}>CV (download)</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header