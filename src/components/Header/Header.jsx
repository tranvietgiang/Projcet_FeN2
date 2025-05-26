import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    {
      name: "Home",
      dropdown: ["Option 1", "Option 2"],
    },
    {
      name: "Shop",
      dropdown: ["All Products", "Categories", "Brands"],
    },
    {
      name: "Product",
      dropdown: ["New", "Popular"],
    },
    {
      name: "On Sale",
      dropdown: null, // không có dropdown
    },
    {
      name: "Blog",
      dropdown: ["Latest Posts", "Tags"],
    },
    {
      name: "Page",
      dropdown: [
        "About",
        "FAQ",
        <Link
          to="/MyAccount"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          MY ACCOUNT
        </Link>,
      ],
    },
    {
      name: (
        <Link
          to="/Contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Contact
        </Link>
      ),
      dropdown: null,
    },
  ];

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/image/logo.png" alt="Logo" className="logo-img" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="nav-item"
              onClick={() => setActive(item.name)}
            >
              <span
                className={`nav-link ${active === item.name ? "active" : ""}`}
              >
                {item.name}
              </span>
              {/* Nếu có dropdown thì render ra */}
              {item.dropdown && (
                <>
                  <span className="dropdown-arrow">▼</span>
                  <div className="dropdown-menu">
                    {item.dropdown.map((option, index) => (
                      <span key={index}>{option}</span>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="icons">
        <div className="container">
          <input
            type="text"
            name="text"
            className="input"
            required
            placeholder="Type to search..."
          />
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Search</title>
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
              ></path>
            </svg>
          </div>
        </div>
        <Link to="/login">
          <User className="icon" />
        </Link>
        <div className="icon-wrapper">
          <Heart className="icon" />
          <span className="badge">6</span>
        </div>
        <div>
          <button class="buttontb">
            <svg viewBox="0 0 448 512" class="bell">
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </button>
        </div>
        <div className="icon-wrapper">
          <ShoppingCart className="icon" />
          <span className="badge">0</span>
        </div>
      </div>
    </header>
  );
}
