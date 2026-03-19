// src/components/Navbar.jsx
import React, { useContext, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';

// ⬇️ Import the CartContext so we can read cart items
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  // ⬇️ Access cart array from global context
  const { cart } = useContext(CartContext);

  // ⬇️ Derive total items for the badge (sum of qty)
  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">MyStore</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">
                Contact
              </NavLink>
            </li>

            {/* New: Policies */}
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/policies">
                Policies
              </NavLink>
            </li>

            {/* 🔥 New: Cart icon with badge (from your screenshot’s idea) */}
            <li className="nav-item ms-lg-2">
              {/* You can use Link or NavLink; Link is fine here */}
              <Link className="nav-link position-relative" to="/cart" aria-label="Cart">
                <i className="fa fa-shopping-cart"></i>
                {totalItems > 0 && (
                  <span
                    className="badge bg-danger ms-1 position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: '0.7rem' }}
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;