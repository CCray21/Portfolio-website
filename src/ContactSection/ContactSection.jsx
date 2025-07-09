import styles from './ContactSection.module.css';
import ContactCard from '../ContactCard/ContactCard';
import LinkedIn from '../assets/LinkedIn.png';
import GitHub from '../assets/GitHub.png';
import Email from '../assets/Email.png';

function ContactSection() {
    return (
        <section className={styles.contactSection} id="contact">
            <h3 className={styles.contactTitle}>Contact</h3>
            <p className={styles.contactDescription}>Here you can find my Linkedin and GitHub profiles and email. Do not hesitate to get in touch {":)"}</p>
            <div className={styles.contactCards}>
                <ContactCard
                    index = {1}
                    link="https://www.linkedin.com/in/charlie-cray-905196336/"
                    text="LinkedIn"
                    img={LinkedIn}
                    color="#0077B5"
                />
                <ContactCard 
                    index={2}
                    link="https://github.com/CCray21"
                    text="GitHub"
                    img={GitHub}
                    color="#333"
                />
                <ContactCard
                    index={3}
                    link="mailto:charlie.bcray@gmail.com"
                    text="Email"
                    img={Email}
                    color="#D14836"
                />
            </div>
        </section>
    );
}
export default ContactSection;