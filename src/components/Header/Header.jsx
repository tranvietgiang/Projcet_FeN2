import React from "react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b px-10 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png" // Thay bằng đường dẫn logo của bạn
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 text-sm font-bold uppercase">
        {["Home", "Shop", "Product", "On Sale", "Blog", "Page", "Contact"].map(
          (item) => (
            <div key={item} className="relative group cursor-pointer">
              <span
                className={`hover:text-red-500 ${
                  item === "Home" ? "text-red-500" : ""
                }`}
              >
                {item}
              </span>
              {/* Dropdown icon nếu cần */}
              {["Home", "Shop", "Product", "Blog", "Page"].includes(item) && (
                <span className="ml-1 text-xs">▼</span>
              )}
            </div>
          )
        )}
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="w-5 h-5" />
        </div>
        <div className="relative">
          <User className="w-5 h-5" />
        </div>
        <div className="relative">
          <Heart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            6
          </span>
        </div>
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
