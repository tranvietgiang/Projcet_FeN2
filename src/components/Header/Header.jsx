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
      dropdown: ["About", "FAQ", "404"],
    },
    {
      name: "Contact",
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
        <Search className="icon" />
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
