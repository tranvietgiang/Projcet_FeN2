import React, { useState } from "react";
import "./ClothingSalePage.css";

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

  return (
    <div className="clothing-sale-page">
      <h2>🔥 Khuyến mãi quần áo</h2>
      <div className="product-list">
        {clothingItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} className="main-image" />
              <img src={item.image2} alt={item.name} className="hover-image" />
            </div>
            <h3>{item.name}</h3>
            <p className="price">
              <span className="original-price">
                {item.price.toLocaleString()}đ
              </span>
              <span className="sale-price">
                {item.salePrice.toLocaleString()}đ
              </span>
            </p>
            <button
              className={likedItems.includes(item.id) ? "heart liked" : "heart"}
              onClick={() => toggleLike(item.id)}
            >
              ♥
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClothingSalePage;
