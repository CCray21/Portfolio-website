import Me from '../assets/Me.png';
import styles from './Card.module.css';

function Card()
{
    return(
        <div className={styles.card}>
            <img className = {styles.cardImage} src={Me} alt="A picture of me" />
            <h1 className = {styles.cardHeader}>Charlie Cray</h1>
            <p className = {styles.cardDesc}>I'm a computer science student with a passion for building games, software and web applications. I do my best to make everything with love {"<3"}</p>
        </div>
    );
}

export default Card;