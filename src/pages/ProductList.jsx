import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import Sidebar from "../components/SideBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // REQUIRED FEATURES STATE
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayedProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  if (loading) {
    return <h3 className="text-center mt-5">Loading products...</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">All Products</h2>

      {/* SEARCH + SORT */}
      <div className="row mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="priceLow">Price (Low to High)</option>
            <option value="priceHigh">Price (High to Low)</option>
            <option value="name">Product Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* FILTER */}
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar setCategory={setCategory} />
        </div>

        {/* PRODUCTS */}
        <div className="col-lg-10 col-md-9">
          <div className="row">
            {displayedProducts.length === 0 ? (
              <p className="text-muted">No products found.</p>
            ) : (
              displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                >
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;