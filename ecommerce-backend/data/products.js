const products = [
  {
    id: 1,

    // Product name displayed in the card title
    name: "Running Shoes",

    // Product image shown at the top
    image: "http://localhost:5000/images/product2.jpg",

    // Current discounted price
    price: 1200,

    // Old price (will show as crossed out)
    oldPrice: 1500,

    // Rating out of 5 stars
    rating: 4,

    // Discount badge percentage (optional)
    discount: 20,

    // Product category
    category: "Clothing",
  },

  {
    id: 2,
    name: "Smart Watch",
    image: "http://localhost:4173/images/product1.png",
    price: 2500,
    oldPrice: 3000,
    rating: 5,
    discount: 15,
    category: "Electronics",
  },

  {
    id: 3,
    name: "Backpack",
    image: "http://localhost:4173/images/product3.jpg",
    price: 900,
    oldPrice: 1200,
    rating: 3,
    discount: 10,
    category: "Accessories",
  },
];

module.exports = products;
