import styles from './ProjectsSection.module.css';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import XLN from '../assets/XLN.png';
import SmartHome from '../assets/smarthome.png';
import MiniApps from '../assets/miniApps.png';

function ProjectsSection() {
    return (
        <section className={styles.projectsSection} id="projects">
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.sectionDescription}>
                Here are some of the projects I have worked on throughout my journey to fullfil my lifelong dream of becoming a full time developer one day. Click on the cards to view the source code.
            </p>
            <div className={styles.projectCards}>
                <ProjectCard
                    index={1}
                    link = "https://github.com/CCray21/XLN-case-duplicate-prevention"
                    color = "turquoise"
                    img={XLN}
                    title="Daisy communications duplicate case prevention system"
                    description="I worked with a small team to make a website for Daisy Communications. This includes (but not limited to) a PHP mailer bot and a staff hierarchy system."
                />
                <ProjectCard
                    index={2}
                    link="https://github.com/CCray21/Smart-home-system"
                    img={SmartHome}
                    color="lightblue"
                    title="Smart home system"
                    description="A console C++ app that simulates a smart home system with functions for adding, altering and removing devices. Loading and saving to a text file is also supported."
                />
                <ProjectCard
                    index={3}
                    link="https://github.com/CCray21/Mini-apps"
                    img={MiniApps}
                    color="red"
                    title="Mini apps"
                    description="For my first semester project, I created a console based application with a top level menu system, a trinary converter, a school roster and an ISBN code verifier"
                />
            </div>
        </section>
    );
}

export default ProjectsSection;