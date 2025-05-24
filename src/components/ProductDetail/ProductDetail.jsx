import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Áo sơ mi", price: 250000, image: "/image/img/img1.png" },
  { id: 2, name: "Quần jean", price: 350000, image: "/image/img/img2.png" },
  { id: 3, name: "Giày sneaker", price: 800000, image: "/image/img/img3.png" },
  { id: 4, name: "Áo thun", price: 200000, image: "/image/img/img1.png" },
  { id: 5, name: "Quần short", price: 180000, image: "/image/img/img1.png" },
  { id: 6, name: "Mũ lưỡi trai", price: 120000, image: "/image/img/img1.png" },
  { id: 7, name: "Balo", price: 400000, image: "/image/img/img1.png" },
  { id: 8, name: "Vớ thể thao", price: 50000, image: "/image/img/img1.png" },
  { id: 9, name: "Áo khoác", price: 600000, image: "/image/img/img1.png" },
  { id: 10, name: "Thắt lưng da", price: 150000, image: "/image/img/img1.png" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 style={{ padding: 20 }}>Sản phẩm không tồn tại.</h2>;
  }

  return (
    <>
      <div style={{ padding: 40 }}>
        <h2>{product.name}</h2>
        <p>
          <img src={product.image} alt={product.name} style={{ width: 300 }} />
        </p>
        <p>Giá: {product.price.toLocaleString()}đ</p>
      </div>
      <button>
        <Link to="/heart">search</Link>
      </button>
    </>
  );
};

export default ProductDetail;
