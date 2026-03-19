import { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
import Sidebar from "../components/SideBar";

const ProductList = () => {
  // Store products from backend
  const [products, setProducts] = useState([]);

  // Track loading state
  const [loading, setLoading] = useState(true);

  // Fetch products when component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);     // Save API data into state
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading products...</h3>;
  }

  return (
    <div className="container">
      <div className="row">

        {/* Sidebar */}
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar />
        </div>

        {/* Products */}
        <div className="col-lg-10 col-md-9">
          <h2 className="mb-3">All Products</h2>

          <div className="row">
            {products.map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductList;
``