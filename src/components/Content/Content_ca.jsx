import React, { useState, useEffect } from "react";
import "./Content_ca.css";
import Product from "./Product.jsx";

const Content_ca = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "STREET TRENDING 2019";
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 550);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  // Theo dõi sự xuất hiện và biến mất của banner
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const banner = document.querySelector(".banner");
    if (banner) {
      observer.observe(banner);
    }

    return () => {
      if (banner) {
        observer.unobserve(banner);
      }
    };
  }, []);

  return (
    <div>
      <div className="sanpham">
        <div className="title">
          <h2>New Arrivals</h2>
        </div>
        <div className="products">
          <Product
            image="./image/img/products-1.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-2.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-3.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-4.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
        </div>
      </div>
      <div className="anh">
        <div className="anh_ct">
          <img src="image/img/baner_ca.png" alt="" className="overlay" />
          <div
            style={{
              width: 400,
              height: 600,
              position: "absolute",
              right: "10%",
              top: "50%",
            }}
          >
            <img
              src="image/img/avatar.png"
              style={{ width: "100%", height: "100%" }}
              alt=""
              className="sale-img"
            />
          </div>
        </div>
        <div className="text">
          <h3 className="chuchay">SUMMER EXCLUSIVE COLLECTION</h3>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "3rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {displayedText.split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </h1>
        </div>
      </div>
      <div className="sanpham" style={{ marginTop: 900 }}>
        <div className="title">
          <h2>New Arrivals</h2>
        </div>
        <div className="products">
          <Product
            image="./image/img/products-1.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-2.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-3.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-4.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
        </div>
      </div>
      <div className="sanpham">
        <div className="products">
          <Product
            image="./image/img/products-1.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-2.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-3.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
          <Product
            image="./image/img/products-4.jpg"
            name="DENSE SWEAT"
            category="Outerwear"
            price="$120.05"
          />
        </div>
      </div>
      <div className="banner" style={{ display: "flex" }}>
        <div
          className={`anh_L ${isVisible ? "slide-in-left" : ""}`}
          style={{ width: "50%" }}
        >
          <img src="image/img/banner_R.jpg" alt="" style={{ height: 500 }} />
        </div>
        <div
          className={`anh_R ${isVisible ? "slide-in-right" : ""}`}
          style={{ width: "50%" }}
        >
          <img src="image/img/banner1_L.jpg" alt="" style={{ height: 500 }} />
        </div>
      </div>
    </div>
  );
};

export default Content_ca;
