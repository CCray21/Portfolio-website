import styles from './ContactCard.module.css';

function ContactCard({link, text, img, color}) {
    return(
        <a href={link} rel='noopener noreferrer' target='_blank' className={styles.contactLink}>
            <div style={{backgroundColor: color}}className={styles.contactCard}>
                <p className={styles.contactText}>{text}</p>
                <img className={styles.contactImg} src={img}/>
            </div>
        </a>
    );
}
export default ContactCard;