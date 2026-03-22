import React, { useContext, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useWishlist();
  const { dark, setDark } = useTheme();

  const totalCartItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  return (
    <nav
      className={`navbar navbar-expand-lg mb-3 ${
        dark ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          GameGrid
        </NavLink>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/policies">Policies</NavLink>
            </li>

            {/* Wishlist */}
            <li className="nav-item ms-lg-3">
              <Link className="nav-link position-relative" to="/wishlist">
                <i className="fa fa-heart"></i>
                {wishlist.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item ms-lg-3">
              <Link className="nav-link position-relative" to="/cart">
                <i className="fa fa-shopping-cart"></i>
                {totalCartItems > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            </li>

            {/* Theme */}
            <li className="nav-item ms-lg-4">
              <button onClick={() => setDark(!dark)} className="btn btn-outline-secondary btn-sm">
                {dark ? "☀ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;