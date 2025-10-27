// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import './snapgallery.css';

const images = [
  {
    src: 'https://picsum.photos/id/1015/800/600',
    alt: 'Mountain lake',
    caption: 'A peaceful mountain lake',
  },
  {
    src: 'https://picsum.photos/id/1016/800/600',
    alt: 'Forest trees',
    caption: 'Sunlight through forest trees',
  },
  {
    src: 'https://picsum.photos/id/1018/800/600',
    alt: 'City skyline',
    caption: 'City skyline at dusk',
  },
  {
    src: 'https://picsum.photos/id/1020/800/600',
    alt: 'Desert road',
    caption: 'A long road through the desert',
  },
  {
    src: 'https://picsum.photos/id/1024/800/600',
    alt: 'Ocean waves',
    caption: 'Waves crashing on the shore',
  },
  {
    src: 'https://picsum.photos/id/1027/800/600',
    alt: 'Snowy mountains',
    caption: 'Snow-covered mountains under clear sky',
  },
];

const Snapgallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setAutoPlay(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Auto slideshow
  useEffect(() => {
    let interval = null;
    if (autoPlay && currentIndex !== null) {
      interval = setInterval(showNext, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  return (
    <>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <p className="lightbox-caption">{images[currentIndex].caption}</p>

            <button className="close-button" onClick={closeLightbox}>✖</button>
            <button className="nav-button prev" onClick={showPrev}>←</button>
            <button className="nav-button next" onClick={showNext}>→</button>

            <button
              className="slideshow-button"
              onClick={() => setAutoPlay(!autoPlay)}
            >
              {autoPlay ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Snapgallery;
