import React, { useState } from "react";
import "./ProductAdmin.css";

const Product_admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "image/img/products-1.jpg",
      name: "Asics Gel-Kayano 28",
      price: "4,700,000 VND",
      type: "Messi",
    },
    {
      id: 2,
      image: "image/img/products-2.jpg",
      name: "Adidas Yeezy Boost 350 V2",
      price: "5,000,000 VND",
      type: "Footwear",
    },
    {
      id: 3,
      image: "image/img/products-3.jpg",
      name: "Puma Suede Classic",
      price: "2,200,000 VND",
      type: "Jewelery",
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (id) => {
    alert(`Đang sửa sản phẩm với ID: ${id}`);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h1 className="admin-title">Trang Admin</h1>
        <p className="admin-greeting">Xin chào Admin: Phạm Cả</p>
        <h2 className="section-title">QUẢN LÝ SẢN PHẨM</h2>
        <ul className="nav-list">
          <li>
            <a href="" className="nav-link">
              Quản lý sản phẩm
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Quản lý loại
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Thống kê
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h2 className="main-title">QUẢN LÝ SẢN PHẨM</h2>

        <div className="search-add-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <button className="search-button">Tìm kiếm</button>
          </div>
          <button className="add-button">THÊM SẢN PHẨM</button>
        </div>

        <table className="product-table">
          <thead>
            <tr>
              <th>HÌNH ẢNH</th>
              <th>TÊN SẢN PHẨM</th>
              <th>GIÁ</th>
              <th>LOẠI</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="product-row">
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td className="product-name">{product.name}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-type">{product.type}</td>
                <td>
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="edit-button"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="delete-button"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product_admin;
