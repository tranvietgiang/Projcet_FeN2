import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <h2>🎉 Thanh toán thành công!</h2>
        <p>
          Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xử lý đơn hàng của bạn trong thời
          gian sớm nhất.
        </p>
        <div className="success-buttons">
          <Link to="/" className="btn btn-home">
            ⬅️ Về trang chủ
          </Link>
          <Link to="/cart" className="btn btn-order">
            📦 Xem đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
