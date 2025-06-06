import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Cart.css";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(0);
  const [mainImage, setMainImage] = useState("/image/img/img1.png");
  const thumbnailsRef = useRef([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  useEffect(() => {
    if (thumbnailsRef.current[0]) {
      thumbnailsRef.current[0].classList.add("active");
      setMainImage(thumbnailsRef.current[0].src);
    }
  }, []);

  const changeImage = (index) => {
    thumbnailsRef.current.forEach((thumb) => {
      if (thumb) thumb.classList.remove("active");
    });
    thumbnailsRef.current[index].classList.add("active");
    setMainImage(thumbnailsRef.current[index].src);
  };

  const handleSubmit = (e) => {
    if (quantity > stock) {
      e.preventDefault();
      alert("Sản phẩm hiện tại đã hết hàng, xin vui lòng quay lại sau.");
    }
  };

  function showLightbox(src) {
    setLightboxSrc(src);
    setLightboxOpen(true);
  }

  function hideLightbox() {
    setLightboxOpen(false);
    setLightboxSrc("");
  }

  function demo123() {
    setStock;
  }

  demo123;

  // đánh rating
  const [reviews, setReviews] = useState([
    { name: "Nguyễn Văn A", rating: 5, comment: "Sản phẩm rất tốt!" },
    {
      name: "Trần Thị B",
      rating: 4,
      comment: "Giao hàng nhanh, chất lượng ổn.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  return (
    <div className="container">
      <div className="back-button">
        <a href="/" className="btn btn-outline-success">
          <i className="bi bi-arrow-left"></i> TIẾP TỤC MUA SẮM
        </a>
      </div>

      <div className="product-container">
        <div className="row">
          <div className="col-md-6">
            <div className="product-images">
              <img
                src={mainImage}
                alt="Main"
                className="main-image lightbox-img"
                id="mainImage"
                onClick={() => showLightbox(mainImage)}
              />

              <div className="thumbnail-container">
                {[
                  "/image/img/img1.png",
                  "/cart/cart-2.png",
                  "/cart/cart-3.png",
                  "/cart/cart-4.png",
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail"
                    ref={(el) => (thumbnailsRef.current[index] = el)}
                    onClick={() => changeImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="product-info">
              <h1 className="product-title">sản phẩm 1</h1>
              <div className="product-rating d-flex gap-3">
                <span className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </span>
                <span>5 start</span>
              </div>

              <div className="sales-info">
                <i className="bi bi-bag-check"></i> Đã bán 12
              </div>

              <div className="product-price">
                20000<sub>đ</sub>
              </div>

              <form id="form_immediately" onSubmit={handleSubmit} method="get">
                <div className="stock-info">
                  <label className="form-label">
                    Số lượng còn: <b id="amount_item">{stock}</b>
                  </label>
                </div>

                <div className="quantity-container">
                  <button
                    type="button"
                    className="btn btn-minus minus"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  >
                    −
                  </button>
                  <input
                    name="cart_quantity"
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="input-qty"
                  />
                  <button
                    type="button"
                    className="btn btn-plus plus"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cta-buttons ">
                  <div data-tooltip="Price:-20000đ" class="button-muangay">
                    <div class="button-wrapper-muangay">
                      <div class="text-muangay">Mua ngay</div>
                      <span class="icon-muangay">
                        <svg
                          viewBox="0 0 16 16"
                          class="bi bi-cart2-muangay"
                          fill="currentColor"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <button className="add-to-cart-button size-cart">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: 15,
                      }}
                      to="/Cart-page"
                    >
                      THÊM VÀO GIỎ
                    </Link>
                  </button>

                  <button class="btn-17-thich size-cart">
                    <span class="text-container-thich">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontSize: 15,
                        }}
                        to="/heart"
                      >
                        <span class="text-thich">Yêu thích</span>
                      </Link>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Lightbox - chỉ hiển thị khi mở */}
        {lightboxOpen && (
          <div className="lightbox" id="lightbox" onClick={hideLightbox}>
            <div className="lightbox-img">
              <img src={lightboxSrc} alt="Lightbox" />
            </div>
          </div>
        )}

        <div className="product-description">
          <h3 className="section-title">Mô tả sản phẩm</h3>
          <p>mô tả</p>
        </div>
      </div>

      <div className="product-container">
        <h3 className="section-title">Đánh giá từ khách hàng</h3>

        {reviews.map((review, index) => (
          <div key={index} className="review-box">
            <div className="review-header">
              <strong>{review.name}</strong>
              <span className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-star ${
                      i < review.rating ? "fa-solid" : "fa-regular"
                    }`}
                  ></i>
                ))}
              </span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}

        <div className="review-form mt-4">
          <h5>Gửi đánh giá của bạn</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!newReview.name || !newReview.comment) {
                alert("Vui lòng nhập tên và nội dung đánh giá.");
                return;
              }
              setReviews([...reviews, newReview]);
              setNewReview({ name: "", rating: 5, comment: "" });
            }}
          >
            <div class="rating">
              <input value="5" name="rate" id="star5" type="radio" />
              <label title="text" for="star5"></label>
              <input value="4" name="rate" id="star4" type="radio" />
              <label title="text" for="star4"></label>
              <input value="3" name="rate" id="star3" type="radio" checked="" />
              <label title="text" for="star3"></label>
              <input value="2" name="rate" id="star2" type="radio" />
              <label title="text" for="star2"></label>
              <input value="1" name="rate" id="star1" type="radio" />
              <label title="text" for="star1"></label>
            </div>

            <div className="mb-2">
              <input
                type="text"
                className=" input"
                placeholder="Tên của bạn"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
              />
            </div>

            <div className="mb-2">
              <select
                className="form-select"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    rating: parseInt(e.target.value),
                  })
                }
              >
                <option value={5}>5 sao</option>
                <option value={4}>4 sao</option>
                <option value={3}>3 sao</option>
                <option value={2}>2 sao</option>
                <option value={1}>1 sao</option>
              </select>
            </div>
            <div className="mb-2">
              <textarea
                className=" input"
                rows="3"
                placeholder="Nội dung đánh giá"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Gửi đánh giá
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
