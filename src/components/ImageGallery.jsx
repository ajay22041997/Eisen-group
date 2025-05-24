import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  
  { src: '/images/img13.jpeg', caption: 'Inductotherm Group ' },
  {src: '/images/img14.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img15.jpeg ', caption: 'NRB Bearing Conveyor  '},
  { src: '/images/img13.jpeg', caption: 'Inductotherm Group ' },
  {src: '/images/img14.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img15.jpeg ', caption: 'NRB Bearing Conveyor  '},
  { src: '/images/img13.jpeg', caption: 'Inductotherm Group ' },
  {src: '/images/img14.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img15.jpeg ', caption: 'NRB Bearing Conveyor  '},
  { src: '/images/img13.jpeg', caption: 'Inductotherm Group ' },
  {src: '/images/img14.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img15.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img13.jpeg', caption: 'Inductotherm Group ' },
  {src: '/images/img14.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img15.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img13.jpeg', caption: 'Inductotherm Group ' },
  {src: '/images/img14.jpeg ', caption: 'NRB Bearing Conveyor  '},
  {src: '/images/img15.jpeg ', caption: 'NRB Bearing Conveyor  '},
  
  
  
  
  
  
  
  
  
];

const ImageGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const openLightbox = (index) => {
      setCurrentIndex(index);
      setLightboxOpen(true);
    };
    
    const closeLightbox = () => {
      setLightboxOpen(false);
    };
    
    const showPrev = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    
    const showNext = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    

  return (
    <div className="gallery-wrapper">
      <header className="gallery-header">
        <h1>Projects Snaps </h1>
        <p>
         Want to see more 
        </p>
      </header>

      <section>
       
        <div className="gallery-grid">
        {images.map((img, index) => (
  <div className="gallery-card" key={index} onClick={() => openLightbox(index)}>
    <img src={img.src} alt={`Gallery ${index}`} />
    <div className="caption">{img.caption}</div>
  </div>
))}

        </div>
      </section>

      

      {lightboxOpen && (
  <div className="lightbox-overlay" onClick={closeLightbox}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <button className="nav-btn prev-btn" onClick={showPrev}>‹</button>
      <img src={images[currentIndex].src} alt="Enlarged" />
      <p>{images[currentIndex].caption}</p>
      <button className="nav-btn next-btn" onClick={showNext}>›</button>
      <button className="close-btn" onClick={closeLightbox}>✕</button>
    </div>
  </div>
)}
 
    </div>
  );
};

export default ImageGallery;
