import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactCard.module.css';

function ContactCard({link, text, img, color, index}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
    
    
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
          const node = ref.current;
          if (node) observer.unobserve(node);
        };
      }, []);


  return(
    <a href={link} rel='noopener noreferrer' target='_blank' className={styles.contactLink}>
            <div
                ref={ref}
                style={{
          '--accent': color,
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