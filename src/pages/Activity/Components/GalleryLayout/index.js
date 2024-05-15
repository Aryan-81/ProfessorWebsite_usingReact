// MainComponent.jsx
import React from 'react';
import GridOfCards from './GridOfCards';
import GallerySections from './GallerySections';

const MainComponent = () => {
  const galleryNum = 3;
  const imgCount = [10, 9, 9];
  const eventsName = ["CPCB", "Teacher's Day", "Visits"];

  return (
    <section  class="page-section">
      <h2>Captured Moments</h2>
      <GridOfCards galleryNum={galleryNum} imgCount={imgCount} eventsName={eventsName} />
      <GallerySections galleryNum={galleryNum} imgCount={imgCount} />
    </section>
  );
};

export default MainComponent;
