import React from "react";

const HeroCarousel = ({
  id = "heroCarousel",
  images = [],
  interval = 5000,
  title = "Level Up Your Gaming Setup",
  subtitle = "Premium gaming gear and electronics",
  buttonText = "Shop Now",
  buttonLink = "/products",
}) => {
  if (!images.length) return null;

  return (
    <div
      id={id}
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
            data-bs-interval={interval}
          >
            {/* Background Image */}
            <img
              src={src}
              className="d-block w-100"
              style={{ height: "450px", objectFit: "cover" }}
              alt={`Slide ${idx + 1}`}
            />

            {/* Overlay */}
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h1 className="fw-bold">{title}</h1>
              <p className="lead">{subtitle}</p>

              <a href={buttonLink} className="btn btn-primary btn-lg mt-2">
                {buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default HeroCarousel;