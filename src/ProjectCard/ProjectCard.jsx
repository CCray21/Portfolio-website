import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, img, description, color, link, index }) {
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

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
    <div
    ref={ref}
    style={{
        backgroundColor: color,
        '--delay': isVisible ? `${index * 0.2}s` : '0s',
    }}
    className={`${styles.projectCard} ${isVisible ? styles.projectCardVisible : ''}`}
    >
        <img className={styles.projectImg} src={img} alt="" />
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
    </div>
    </a>
    )
}

export default ProjectCard;