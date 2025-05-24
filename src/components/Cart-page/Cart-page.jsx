import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Cart-page.css";

const initialCart = [
  {
    id: 1,
    name: "Áo Hoodie Unisex",
    price: 350000,
    quantity: 2,
    image: "./image/img/img1.png",
  },
  {
    id: 2,
    name: "Quần Jogger Thể Thao",
    price: 290000,
    quantity: 1,
    image: "./image/img/img2.png",
  },
];

const Cart_page = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>Giá: {item.price.toLocaleString()}₫</p>
                  <div className="quantity">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Tổng tiền: {total.toLocaleString()}₫</h3>
            <div className="cart-actions">
              <button className="btn-continue">
                <Link style={{ textDecoration: "none" }} to="/">
                  ← Tiếp tục mua
                </Link>
              </button>
              <button className="btn-checkout">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontSize: 15,
                  }}
                  to="/checkout"
                >
                  Thanh toán
                </Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart_page;
