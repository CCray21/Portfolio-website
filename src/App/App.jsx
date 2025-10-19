import {useEffect} from 'react';
import Header from '../Header/Header.jsx'
import Card from '../Profile card/Card.jsx';
import styles from './App.module.css';
import ProjectsSection from '../ProjectsSection/ProjectsSection.jsx';
import ContactSection from '../ContactSection/ContactSection.jsx';
import useSectionObserver from '../useSectionObserver.jsx';

function App() {
  const activeSection = useSectionObserver(['aboutMe','projects','contact']);
  useEffect(() => {
    let title = 'CCray ';
    if (activeSection == 'aboutMe') title += '| About me';
    if (activeSection == 'projects') title += '| Projects';
    if (activeSection == 'contact') title += '| Contact';
    document.title = title;
  },[activeSection]);
  return(
    <>
      <Header activeSection={activeSection} />
      <section className={styles.aboutMe} id="aboutMe">
        <div className="container">
          <Card/>
        </div>
      </section>
      <section className={styles.projects} id="projects">
        <div className="container">
          <ProjectsSection/>
        </div>
      </section>
      <section className={styles.contact} id="contact">
        <div className="container">
          <ContactSection/>
        </div>
      </section>
    </>
  );
}

export default App
