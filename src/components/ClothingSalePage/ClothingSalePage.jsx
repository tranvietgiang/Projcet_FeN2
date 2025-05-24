import React, { useState } from "react";
import "./ClothingSalePage.css";

import Api from "./Api";

const clothingItems = [
  {
    id: 1,
    name: "Áo thun nam",
    image: "/image/img/img1.png",
    image2: "/image/img/img2.png",
    price: 200000,
    salePrice: 150000,
  },
  {
    id: 2,
    name: "Váy nữ",
    image: "/image/img/img2.png",
    image2: "/image/img/img1.png",
    price: 350000,
    salePrice: 270000,
  },
  {
    id: 3,
    name: "Quần jeans",
    image: "/image/img/img3.png",
    image2: "/image/img/img2.png",
    price: 400000,
    salePrice: 320000,
  },
];

function ClothingSalePage() {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(Api);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const result = Api.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  return (
    <div className="clothing-sale-page-heart">
      <h2>🔥 Khuyến mãi quần áo</h2>
      <div className="product-list-heart">
        {clothingItems.map((item) => (
          <div key={item.id} className="product-card-heart">
            <div className="image-wrapper-heart">
              <img
                src={item.image}
                alt={item.name}
                className="main-image-heart"
              />
              <img
                src={item.image2}
                alt={item.name}
                className="hover-image-heart"
              />
            </div>
            <h3 style={{ fontSize: 20 }}>{item.name}</h3>
            <p className="price-heart">
              <span className="original-price-heart">
                {item.price.toLocaleString()}đ
              </span>
              <span className="sale-price-heart">
                {item.salePrice.toLocaleString()}đ
              </span>
            </p>
            <button
              className={
                likedItems.includes(item.id)
                  ? "heart-heart liked-heart"
                  : "heart-heart"
              }
              onClick={() => toggleLike(item.id)}
            >
              ♥
            </button>
          </div>
        ))}
      </div>

      <section className="mt-5">
        <div class="grid-search-heart"></div>
        <div id="poda-search-heart">
          <div class="glow-search-heart"></div>
          <div class="darkBorderBg-search-heart"></div>
          <div class="darkBorderBg-search-heart"></div>
          <div class="darkBorderBg-search-heart"></div>

          <div class="white-search-heart"></div>

          <div class="border-search-heart"></div>

          <div id="main-search-heart">
            <input
              placeholder="Search..."
              type="text"
              id="search-heart"
              value={search}
              onChange={handleSearch}
              name="search-heart"
              class="input-search-heart"
            />
            <div id="input-mask-search-heart"></div>
            <div id="pink-mask-search-heart"></div>
            <div class="filterBorder-search-heart"></div>
            <div id="filter-icon-search-heart">
              <svg
                preserveAspectRatio="none"
                height="27"
                width="27"
                viewBox="4.8 4.56 14.832 15.408"
                fill="none"
              >
                <path
                  d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                  stroke="#d6d6e6"
                  stroke-width="1"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div id="search-icon-search-heart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                height="24"
                fill="none"
                class="feather-search-heart feather-search-search-heart"
              >
                <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                <line
                  stroke="url(#searchl)"
                  y2="16.65"
                  y1="22"
                  x2="16.65"
                  x1="22"
                ></line>
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stop-color="#f8e7f8" offset="0%"></stop>
                    <stop stop-color="#b6a9b7" offset="50%"></stop>
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stop-color="#b6a9b7" offset="0%"></stop>
                    <stop stop-color="#837484" offset="50%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        {search !== "" && (
          <ul>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.price.toLocaleString()}đ
                </li>
              ))
            ) : (
              <li>Không tìm thấy sản phẩm nào</li>
            )}
          </ul>
        )}
      </section>
    </div>
  );
}

export default ClothingSalePage;
