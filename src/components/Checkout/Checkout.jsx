import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const cartItems = [
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

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert(`✅ Đặt hàng thành công! Cảm ơn bạn, ${form.name}.`);
  //   };

  return (
    <div className="checkout-container">
      <h2>🧾 Thanh Toán Đơn Hàng</h2>
      <div className="checkout-content">
        <div className="checkout-left">
          <h3>🛍 Sản phẩm</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>
                  {item.quantity} × {item.price.toLocaleString()}₫
                </p>
              </div>
            </div>
          ))}
          <h3>Tổng tiền: {total.toLocaleString()}₫</h3>
        </div>

        <div className="checkout-right">
          <h3>📦 Thông tin giao hàng</h3>
          <section>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Địa chỉ giao hàng"
              value={form.address}
              onChange={handleChange}
              required
            />
            <h4>💳 Phương thức thanh toán</h4>
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={form.payment === "cod"}
                onChange={handleChange}
              />
              Thanh toán khi nhận hàng (COD)
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={form.payment === "bank"}
                onChange={handleChange}
              />
              Chuyển khoản ngân hàng
            </label>
            <button>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: 15,
                }}
                to="/success"
              >
                Xác nhận đơn hàng
              </Link>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
