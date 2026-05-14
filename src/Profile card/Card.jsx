import Me from '../assets/Me.png';
import styles from './Card.module.css';

function Card()
{
    return(
        <div className={styles.card}>
            <img className = {styles.cardImage} src={Me} alt="A picture of me" />
            <h1 className = {styles.cardHeader}>Charlie Cray</h1>
            <p className = {styles.cardDesc}>I'm a computer science student with a passion for building games, software and web applications.</p>
        </div>
    );
}

export default Card;