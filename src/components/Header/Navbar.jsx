import { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="text-3xl font-bold italic">
          Striz
        </a>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 mx-auto">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-red-500 font-medium hover:text-red-700">
              HOME
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="text-gray-800 font-medium hover:text-red-500"
            >
              SHOP
            </a>
          </li>
          <li>
            <a
              href="/product"
              className="text-gray-800 font-medium hover:text-red-500"
            >
              PRODUCT
            </a>
          </li>
          <li>
            <a
              href="/on-sale"
              className="text-gray-800 font-medium hover:text-red-500"
            >
              ON SALE
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-gray-800 font-medium hover:text-red-500"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              href="/page"
              className="text-gray-800 font-medium hover:text-red-500"
            >
              PAGE
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-800 font-medium hover:text-red-500"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Right side icons */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="/search" className="text-gray-700 hover:text-red-500">
          <Search size={20} />
        </a>
        <a href="/account" className="text-gray-700 hover:text-red-500">
          <User size={20} />
        </a>
        <a
          href="/favorites"
          className="text-gray-700 hover:text-red-500 relative"
        >
          <Heart size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </a>
        <a href="/cart" className="text-gray-700 hover:text-red-500 relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </a>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <a href="/" className="text-red-500 font-medium block">
                HOME
              </a>
            </li>
            <li className="py-2">
              <a href="/shop" className="text-gray-800 font-medium block">
                SHOP
              </a>
            </li>
            <li className="py-2">
              <a href="/product" className="text-gray-800 font-medium block">
                PRODUCT
              </a>
            </li>
            <li className="py-2">
              <a href="/on-sale" className="text-gray-800 font-medium block">
                ON SALE
              </a>
            </li>
            <li className="py-2">
              <a href="/blog" className="text-gray-800 font-medium block">
                BLOG
              </a>
            </li>
            <li className="py-2">
              <a href="/page" className="text-gray-800 font-medium block">
                PAGE
              </a>
            </li>
            <li className="py-2">
              <a href="/contact" className="text-gray-800 font-medium block">
                CONTACT
              </a>
            </li>
            <li className="py-2 border-t mt-2 pt-4">
              <div className="flex items-center space-x-8">
                <a href="/search" className="text-gray-700">
                  <Search size={20} />
                </a>
                <a href="/account" className="text-gray-700">
                  <User size={20} />
                </a>
                <a href="/favorites" className="text-gray-700 relative">
                  <Heart size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    0
                  </span>
                </a>
                <a href="/cart" className="text-gray-700 relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    0
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
