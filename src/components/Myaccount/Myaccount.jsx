import React, { useState } from "react";
import "./MyAccount.css";

const MyAccount = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = e.currentTarget;

    const x = (clientX / offsetWidth - 0.5) * 40; // Điều chỉnh độ nhạy
    const y = (clientY / offsetHeight - 0.5) * -40; // Điều chỉnh độ nhạy

    setRotateX(y);
    setRotateY(x);
  };

  return (
    <div className="my-account">
      <div className="container1" onMouseMove={handleMouseMove}>
        <h1 className="myac" style={{ fontSize: 40 }}>
          MY ACCOUNT
        </h1>
        <div style={{ display: "flex" }}>
          <div className="avatar">
            <img
              src="image/img/avatar.jpg"
              alt="User Avatar"
              style={{
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transition: "transform 0.1s",
              }}
            />
          </div>
          <div className="textmyac">
            <h3 className="hello">Hello: Cả</h3>
            <p>Email: capham18@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="shopping-options">
        <div className="categories">
          <h2 className="twinkle-text">SHOPPING OPTIONS</h2>
          <h3>CATEGORY</h3>
          <ul>
            <li>NIKIE</li>
            <li>ADIDAS</li>
            <li>PUMA</li>
          </ul>
          <h3>COLOR</h3>
          <ul>
            <li>RED</li>
            <li>GREEN</li>
            <li>PINK</li>
            <li>BLACK</li>
          </ul>
        </div>
        <div className="details">
          <div className="detail-item">
            <h4>ORDER HISTORY AND DETAILS</h4>
          </div>
          <div className="detail-item1">
            <h4>MY CREDIT SLIPS</h4>
          </div>
          <div className="detail-item2">
            <h4>MY ADDRESS</h4>
          </div>
          <div className="detail-item3">
            <h4>MY PERSONAL INFORMATION</h4>
          </div>

          <button class="btn3d">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
