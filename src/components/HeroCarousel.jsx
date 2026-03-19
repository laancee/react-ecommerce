// src/components/HeroCarousel.jsx
import React from 'react';

const HeroCarousel = ({
  id = 'carouselExampleIndicators',
  images = [],           // e.g., [hero1, hero2, hero3]
  altPrefix = 'Slide',   // used for alt text
  interval = 5000        // per-slide interval in ms
}) => {
  if (!images.length) return null;

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <button
            key={`ind-${idx}`}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {images.map((src, idx) => (
          <div
            key={`item-${idx}`}
            className={`carousel-item ${idx === 0 ? 'active' : ''}`}
            data-bs-interval={interval}
          >
            <img src={src} className="d-block w-100" alt={`${altPrefix} ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;