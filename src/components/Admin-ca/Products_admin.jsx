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
    <div className="admin-product-ca-container">
      <div className="admin-product-ca-sidebar">
        <h1 className="admin-product-ca-title">Trang Admin</h1>
        <p className="admin-product-ca-greeting">Xin chào Admin: Phạm Cả</p>
        <h2 className="admin-product-ca-section-title">QUẢN LÝ SẢN PHẨM</h2>
        <ul className="admin-product-ca-nav-list">
          <li>
            <a href="" className="admin-product-ca-nav-link">
              Quản lý sản phẩm
            </a>
          </li>
          <li>
            <a href="/admin-cate" className="admin-product-ca-nav-link">
              Quản lý loại
            </a>
          </li>
          <li>
            <a href="/admin-statistic" className="admin-product-ca-nav-link">
              Thống kê
            </a>
          </li>
          <li>
            <a href="/admin-login" className="admin-product-ca-nav-link">
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>

      <div className="admin-product-ca-main-content">
        <h2 className="admin-product-ca-main-title">QUẢN LÝ SẢN PHẨM</h2>

        <div className="admin-product-ca-search-add-container">
          <div className="admin-product-ca-search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={handleSearch}
              className="admin-product-ca-search-input"
            />
            <button className="admin-product-ca-search-button">Tìm kiếm</button>
          </div>
          <button className="admin-product-ca-add-button">THÊM SẢN PHẨM</button>
        </div>

        <table className="admin-product-ca-product-table">
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
              <tr key={product.id} className="admin-product-ca-product-row">
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="admin-product-ca-product-image"
                  />
                </td>
                <td className="admin-product-ca-product-name">
                  {product.name}
                </td>
                <td className="admin-product-ca-product-price">
                  {product.price}
                </td>
                <td className="admin-product-ca-product-type">
                  {product.type}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="admin-product-ca-edit-button"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="admin-product-ca-delete-button"
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
