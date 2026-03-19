const express = require("express");
const cors = require("cors");
const path = require("path");
const products = require("./data/products");

const app = express();

app.use(cors());

// Parse JSON bodies for future POST/PUT
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Health check (optional)
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "ecommerce-backend" });
});

// GET /api/products -> return all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// (Optional) GET /api/products/:id -> a single product
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// GET /api/categories -> return unique categories
app.get("/api/categories", (req, res) => {
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];
  res.status(200).json(categories);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
