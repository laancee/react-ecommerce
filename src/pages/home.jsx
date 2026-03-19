// src/pages/Home.jsx
import React from 'react';

// NOTE: Make sure these paths & casing match your actual files:
import ProductCard from '../components/productCard';
import Sidebar from '../components/SideBar';

import HeroCarousel from '../components/HeroCarousel';

// Import your hero images (put them in src/assets/images/)
import hero1 from '../assets/images/carousel1.jpg';
import hero2 from '../assets/images/carousel2.jpg';
import hero3 from '../assets/images/carousel3.jpg';

const products = [
  {
    name: "Gaming Laptop",
    oldPrice: 2000,
    price: 1499,
    discount: 25,
    rating: 4,
    image: "/src/assets/images/product2.jpg" // (Optional) better to import like above
  },
  {
    name: "Wireless Headphones",
    oldPrice: 1000,
    price: 799,
    discount: 20,
    rating: 5,
    image: "/src/assets/images/product1.png"
  }
];

const Home = () => {
  const heroImages = [hero1, hero2, hero3];

  return (
    <div className="container">
      {/* Replaced the single banner <img> with the Bootstrap-style carousel */}
      <HeroCarousel images={heroImages} interval={4500} />

      <h2 className="mb-3">Featured Products</h2>

      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;