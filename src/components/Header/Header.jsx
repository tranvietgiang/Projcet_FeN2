import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

import "./Header.css";

export default function Header() {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      dropdown: [
        { label: "Option 1", path: "/option1" },
        { label: "Option 2", path: "/option2" },
      ],
    },
    {
      name: "Shop",
      dropdown: [
        { label: "Categories", path: "/option-product" },
        { label: "Brands", path: "/brands" },
      ],
    },
    {
      name: "Product",
      dropdown: [
        { label: "All Products", path: "/all-product" },
        { label: "Popular", path: "/products/popular" },
      ],
    },
    {
      name: "On Sale",
      path: "/on-sale",
      dropdown: null,
    },
    {
      name: "Blog",
      dropdown: [
        { label: "Latest Posts", path: "/blog/latest" },
        { label: "Tags", path: "/blog/tags" },
      ],
    },
    {
      name: "Page",
      dropdown: [
        { label: "About", path: "/about" },
        { label: "FAQ", path: "/faq" },
        { label: "404", path: "/404" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
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
              onClick={() => {
                setActive(item.name);
                // Điều hướng đến đường dẫn tương ứng
                if (item.path) navigate(item.path);
              }}
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
                      <span
                        key={index}
                        onClick={() => navigate(option.path)}
                        className="dropdown-item"
                      >
                        {option.label}
                      </span>
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
        <div className="icon-wrapper">
          <Link to="/login">
            <User className="icon" />
          </Link>
        </div>
        <div className="icon-wrapper">
          <Link to="/heart">
            <Heart className="icon" />
          </Link>
          <span className="badge">6</span>
        </div>
        <div className="icon-wrapper">
          <Link to="/cart">
            <ShoppingCart className="icon" />
          </Link>
          <span className="badge">0</span>
        </div>
      </div>
    </header>
  );
}
