// GridOfCards.jsx
import React from 'react';
import { useState } from 'react';
import styles from './GridOfCards.module.css'; // Import your CSS module

const GridOfCards = ({ galleryNum, imgCount, eventsName }) => {
  const [activeCard, setActiveCard] = useState(null);

  const openGallery = (id) => {
    setActiveCard(id);
  };

  const closeAll = () => {
    setActiveCard(null);
  };

  return (
    <section className={styles.gridSection}>
      {Array.from({ length: 1 }).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.grid}>
          {Array.from({ length: galleryNum }).map((_, colIndex) => {
            const id = colIndex + 1;
            return (
              <div key={id} className={`${styles.card} ${activeCard === id ? styles.active : ''}`}>
                <div className={styles.cardThumb}>
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className={styles.cardShadow}></div>
                  ))}
                  <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(../../../../asset/highlights/0${id}.JPG)` }}
                  ></div>
                </div>
                <div className={styles.cardTitle}>{eventsName[colIndex]}</div>
                <div className={styles.cardExplore}>Explore More Pictures</div>
                <button className={`${styles.cardButton} ${styles.viewMore}`} onClick={() => openGallery(id)}>
                  View More
                </button>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default GridOfCards;
