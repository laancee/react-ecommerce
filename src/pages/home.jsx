// src/pages/Home.jsx
import React from "react";

import ProductCard from "../components/productCard";
import SideBar from "../components/SideBar";
import HeroCarousel from "../components/HeroCarousel";

import hero1 from "../assets/images/carousel1.jpg";
import hero2 from "../assets/images/carousel2.jpg";
import hero3 from "../assets/images/carousel3.jpg";

<HeroCarousel
  images={[hero1, hero2, hero3]}
  title="Welcome to GameGrid"
  subtitle="Build. Play. Dominate."
  buttonText="Shop Now"
  buttonLink="/products"
/>
const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    oldPrice: 2000,
    price: 1499,
    discount: 25,
    rating: 4,
    image: "/src/assets/images/product2.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    oldPrice: 1000,
    price: 799,
    discount: 20,
    rating: 5,
    image: "/src/assets/images/product1.png",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    oldPrice: 750,
    price: 599,
    discount: 20,
    rating: 4,
    image: "/src/assets/images/product3.jpg",
  },
  {
    id: 4,
    name: "27” Gaming Monitor",
    oldPrice: 500,
    price: 399,
    discount: 20,
    rating: 4,
    image: "/src/assets/images/product4.jpg",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    oldPrice: 1800,
    price: 1499,
    discount: 17,
    rating: 5,
    image: "/src/assets/images/product5.jpg",
  },
  {
    id: 6,
    name: "RGB Speaker",
    oldPrice: 2200,
    price: 1899,
    discount: 14,
    rating: 4,
    image: "/src/assets/images/product6.jpg",
  },
  {
    id: 7,
    name: "USB-C Hub",
    oldPrice: 900,
    price: 699,
    discount: 22,
    rating: 5,
    image: "/src/assets/images/product7.jpg",
  },
];

const Home = () => {
  const heroImages = [hero1, hero2, hero3];

  return (
    <div className="container">
      <HeroCarousel images={heroImages} interval={4500} />

      <h2 className="mb-3">Featured Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;