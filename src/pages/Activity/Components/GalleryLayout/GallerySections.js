// GallerySections.jsx
import React from 'react';
import styles from './GallerySections.module.css';
const GallerySections = ({ galleryNum, imgCount }) => {
  return (
    <div id="gallerysubsection">
      {Array.from({ length: galleryNum }).map((_, index) => (
        <section key={index} className={styles.gallery}>
          <div className={styles.galleryHeader}>
            <a className={styles.galleryClose} onClick={() => closeAll()}>
              ×
            </a>
          </div>
          <div className={styles.galleryImagePrimary}>
            <div
              className={styles.galleryImagePrimary}
              style={{ backgroundImage: `url(src/asset/highlights/0${index + 1}.JPG)` }}
            ></div>
            <div className={styles.description}>Description</div>
          </div>
          <div className={styles.galleryImages}>
            {[...Array(imgCount[index])].map((_, imageIndex) => (
              <div key={imageIndex} className={styles.galleryImage}></div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default GallerySections;
