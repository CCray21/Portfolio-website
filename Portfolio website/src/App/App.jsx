import Header from '../Header/Header.jsx'
import Card from '../Card/Card.jsx';
import styles from './App.module.css';
import ProjectsSection from '../ProjectsSection/ProjectsSection.jsx';
import ContactSection from '../ContactSection/ContactSection.jsx';

function App() {
  return(
    <>
    <section className={styles.header}>
      <Header/>
    </section>
    <section className = {styles.aboutMe} id="aboutMe">
      <Card/>
    </section>
    <section className = {styles.projects} id="projects">
      <ProjectsSection/>
    </section>
    <section className={styles.contact} id="contact">
      <ContactSection/>
    </section>
    </>
  );
}

export default App
