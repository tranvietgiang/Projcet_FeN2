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
        <div className="icon-wrapper">
          <ShoppingCart className="icon" />
          <span className="badge">0</span>
        </div>
      </div>
    </header>
  );
}
