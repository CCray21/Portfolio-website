import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactCard.module.css';

function ContactCard({link, text, img, color, index}) {
      const ref = useRef();
      const [isVisible, setIsVisible] = useState(false);
      const fadeStyle = isVisible
      ? { backgroundColor: color, transitionDelay: `${index * 0.2}s` }
      : { backgroundColor: color, transitionDelay: '0s'};
    
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          },
          { threshold: 0.2 }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) observer.unobserve(ref.current);
        };
      }, []);
    
      const delay = `${index * 0.2}s`;

    return(
        <a href={link} rel='noopener noreferrer' target='_blank' className={styles.contactLink}>
            <div
                ref={ref}
                style={{
                    backgroundColor: color,
                    '--delay': isVisible ? `${index * 0.2}s` : '0s',
                }}
                className={`${styles.contactCard} ${isVisible ? styles.contactCardVisible : ''}`}
            >
                <p className={styles.contactText}>{text}</p>
                <img className={styles.contactImg} src={img}/>
            </div>
        </a>
    );
}
export default ContactCard;