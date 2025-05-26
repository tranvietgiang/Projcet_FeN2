import React, { useState, useEffect } from "react";
import "./Address.css";

const BranchAddressInfo = () => {
  const [visibleBranches, setVisibleBranches] = useState(0);

  const addressData = [
    {
      id: 1,
      title: "Trụ sở chính",
      address: "123 Lê Lợi, Quận 1",
      city: "TP. Hồ Chí Minh",
      phone: "+84 28 1234 5678",
      email: "info@congty.vn",
    },
    {
      id: 2,
      title: "Chi nhánh Hà Nội",
      address: "456 Phố Huế, Hai Bà Trưng",
      city: "Hà Nội",
      phone: "+84 24 2345 6789",
      email: "hanoi@congty.vn",
    },
    {
      id: 3,
      title: "Chi nhánh Đà Nẵng",
      address: "789 Bạch Đằng, Hải Châu",
      city: "Đà Nẵng",
      phone: "+84 236 345 6789",
      email: "danang@congty.vn",
    },
    {
      id: 4,
      title: "Chi nhánh Cần Thơ",
      address: "321 Nguyễn Trãi, Ninh Kiều",
      city: "Cần Thơ",
      phone: "+84 292 456 7890",
      email: "cantho@congty.vn",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBranches((prev) => {
        if (prev < addressData.length) {
          return prev + 1;
        }
        return 0;
      });
    }, 1000); // 60 giây

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="branch-container">
      <div className="floating-leaves leaf-1"></div>
      <div className="floating-leaves leaf-2"></div>
      <div className="floating-leaves leaf-3"></div>
      <div className="floating-leaves leaf-4"></div>

      <div className="title-header">
        <h1>Hệ thống chi nhánh</h1>
        <p>Tìm chúng tôi tại các chi nhánh trên toàn quốc</p>
      </div>

      <div className="tree-trunk"></div>

      {[1, 2, 3, 4].map((num) => (
        <div
          key={`branch-${num}`}
          className={`branch-line branch-${num}`}
          style={{ opacity: visibleBranches >= num ? 1 : 0 }}
        ></div>
      ))}

      {[1, 2, 3, 4].map((num) => (
        <div
          key={`line-${num}`}
          className={`connection-line line-${num} ${
            visibleBranches >= num ? "visible" : ""
          }`}
        ></div>
      ))}

      {addressData.map((location, index) => (
        <div
          key={location.id}
          className={`address-card card-${index + 1} ${
            visibleBranches > index ? "visible" : ""
          }`}
        >
          <div className="card-title">{location.title}</div>
          <div className="card-info">
            <i>📍</i>
            <span>{location.address}</span>
          </div>
          <div className="card-info">
            <i>🏙️</i>
            <span>{location.city}</span>
          </div>
          <div className="card-info">
            <i>📞</i>
            <span>{location.phone}</span>
          </div>
          <div className="card-info">
            <i>✉️</i>
            <span>{location.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BranchAddressInfo;
