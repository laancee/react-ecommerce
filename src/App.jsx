import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      
      <Footer />
      
    </>
  );
};

export default App;

``