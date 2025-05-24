import React from "react";
import "./ProductCard.css";

const Product = ({ image, name, category, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" width={300} />
      <div className="button-container">
        {/* <a href="#" className="add">
          Add to Cart
        </a> */}
        <button type="button" class="button add">
          <span class="button__text">Add Item</span>
          <span class="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              class="svg"
            >
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </span>
        </button>
      </div>
      <div className="product-info">
        {/* <span className="stock-status">In Stock</span> */}

        <input id="toggle-heart" type="checkbox" />
        <label htmlFor="toggle-heart" aria-label="like">
          ❤
        </label>
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <span className="product-price">{price}</span>
      </div>{" "}
    </div>
  );
};

export default Product;
