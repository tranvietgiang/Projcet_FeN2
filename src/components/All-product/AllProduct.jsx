import React, { useState, useEffect } from "react";
import { Star, Heart, ShoppingCart, Eye, Zap, Sparkles } from "lucide-react";

const ProductEffectsShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedItems, setLikedItems] = useState(new Set());
  const [cartItems, setCartItems] = useState(new Set());
  const [viewCounts, setViewCounts] = useState({});

  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$299",
      image: "./image/img/img1.png",
      rating: 4.8,
      discount: 20,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$399",
      image: "./image/img/img2.png",
      rating: 4.9,
      discount: 15,
      badge: "New",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: "$149",
      image: "./image/img/img3.png",
      rating: 4.7,
      discount: 25,
      badge: "Hot Deal",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "$89",
      image: "./image/img/img2.png",
      rating: 4.6,
      discount: 30,
      badge: "Limited",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setViewCounts((prev) => {
        const newCounts = { ...prev };
        products.forEach((product) => {
          if (!newCounts[product.id])
            newCounts[product.id] = Math.floor(Math.random() * 100) + 50;
          else newCounts[product.id] += Math.floor(Math.random() * 3);
        });
        return newCounts;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleLike = (productId) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const toggleCart = (productId) => {
    setCartItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "linear-gradient(135deg, #fbbf24, #f97316)";
      case "New":
        return "linear-gradient(135deg, #34d399, #3b82f6)";
      case "Hot Deal":
        return "linear-gradient(135deg, #f87171, #ec4899)";
      case "Limited":
        return "linear-gradient(135deg, #a78bfa, #6366f1)";
      default:
        return "#6b7280";
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #581c87, #0f172a)",
      padding: "2rem",
      fontFamily: "system-ui, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "white",
      marginBottom: "1rem",
      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      color: "#d1d5db",
      fontSize: "1.125rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    productCard: {
      position: "relative",
      cursor: "pointer",
      transform: "scale(1)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 1,
    },
    productCardHovered: {
      transform: "scale(1.05)",
      zIndex: 10,
    },
    cardContainer: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px)",
      borderRadius: "1rem",
      overflow: "hidden",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      height: "256px",
    },
    productImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.7s ease-out",
    },
    productImageHovered: {
      transform: "scale(1.1)",
    },
    gradientOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    gradientOverlayVisible: {
      opacity: 1,
    },
    badge: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      padding: "0.5rem 0.75rem",
      borderRadius: "9999px",
      color: "white",
      fontSize: "0.75rem",
      fontWeight: "bold",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transform: "rotate(3deg)",
      transition: "transform 0.3s ease",
    },
    badgeHovered: {
      transform: "rotate(0deg)",
    },
    discountBadge: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      background: "#ef4444",
      color: "white",
      padding: "0.25rem 0.5rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: "bold",
      animation: "pulse 2s infinite",
    },
    floatingButtons: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0,
      transition: "all 0.3s ease",
      display: "flex",
      gap: "0.5rem",
    },
    floatingButtonsVisible: {
      opacity: 1,
    },
    floatingButton: {
      background: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(8px)",
      padding: "0.75rem",
      borderRadius: "50%",
      color: "white",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      transform: "scale(1)",
    },
    floatingButtonHovered: {
      background: "rgba(255, 255, 255, 0.3)",
      transform: "scale(1.1)",
    },
    shimmer: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      transform: "translateX(-100%) skewX(-12deg)",
      transition: "transform 1s ease",
    },
    shimmerActive: {
      transform: "translateX(100%) skewX(-12deg)",
    },
    content: {
      padding: "1.5rem",
    },
    productName: {
      color: "white",
      fontWeight: "600",
      fontSize: "1.125rem",
      marginBottom: "0.5rem",
      transition: "color 0.3s ease",
    },
    productNameHovered: {
      color: "#93c5fd",
    },
    rating: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.75rem",
    },
    stars: {
      display: "flex",
    },
    star: {
      width: "1rem",
      height: "1rem",
      transition: "color 0.2s ease",
    },
    starFilled: {
      color: "#fbbf24",
      fill: "#fbbf24",
    },
    starEmpty: {
      color: "#9ca3af",
    },
    ratingText: {
      color: "#d1d5db",
      fontSize: "0.875rem",
    },
    priceSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    price: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "white",
    },
    originalPrice: {
      color: "#9ca3af",
      textDecoration: "line-through",
      fontSize: "0.875rem",
    },
    viewCounter: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "1rem",
      color: "#d1d5db",
      fontSize: "0.875rem",
    },
    viewIcon: {
      width: "1rem",
      height: "1rem",
    },
    sparkle: {
      width: "1rem",
      height: "1rem",
      color: "#fbbf24",
      animation: "pulse 2s infinite",
    },
    cartButton: {
      width: "100%",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      border: "none",
      cursor: "pointer",
      transform: "scale(1)",
    },
    cartButtonDefault: {
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      color: "white",
      boxShadow: "0 0 0 rgba(139, 92, 246, 0)",
    },
    cartButtonAdded: {
      background: "#10b981",
      color: "white",
    },
    cartButtonHovered: {
      transform: "scale(1.05)",
      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.25)",
    },
    cartButtonActive: {
      transform: "scale(0.95)",
    },
    glow: {
      position: "absolute",
      inset: 0,
      borderRadius: "1rem",
      opacity: 0,
      transition: "opacity 0.5s ease",
      pointerEvents: "none",
    },
    glowVisible: {
      opacity: 1,
    },
    glowInner: {
      position: "absolute",
      inset: 0,
      borderRadius: "1rem",
      background:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(167, 139, 250, 0.2), rgba(244, 114, 182, 0.2))",
      filter: "blur(40px)",
    },
    particles: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    },
    particle: {
      position: "absolute",
      width: "8px",
      height: "8px",
      background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
      borderRadius: "50%",
      animation: "ping 1.5s infinite",
    },
    stats: {
      marginTop: "4rem",
      textAlign: "center",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
    },
    statCard: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px)",
      borderRadius: "0.75rem",
      padding: "1.5rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    statNumber: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "white",
      marginBottom: "0.5rem",
    },
    statLabel: {
      color: "#d1d5db",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: .5;
            }
          }
          
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Product ALL</h1>
        <p style={styles.subtitle}></p>
      </div>

      {/* Products Grid */}
      <div style={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              ...styles.productCard,
              ...(hoveredCard === product.id ? styles.productCardHovered : {}),
            }}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Container */}
            <div style={styles.cardContainer}>
              {/* Image Container with Overlay Effects */}
              <div style={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    ...styles.productImage,
                    ...(hoveredCard === product.id
                      ? styles.productImageHovered
                      : {}),
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  style={{
                    ...styles.gradientOverlay,
                    ...(hoveredCard === product.id
                      ? styles.gradientOverlayVisible
                      : {}),
                  }}
                />

                {/* Badge */}
                <div
                  style={{
                    ...styles.badge,
                    background: getBadgeColor(product.badge),
                    ...(hoveredCard === product.id ? styles.badgeHovered : {}),
                  }}
                >
                  {product.badge}
                </div>

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div style={styles.discountBadge}>-{product.discount}%</div>
                )}

                {/* Floating Action Buttons */}
                <div
                  style={{
                    ...styles.floatingButtons,
                    ...(hoveredCard === product.id
                      ? styles.floatingButtonsVisible
                      : {}),
                  }}
                >
                  <button
                    style={{
                      ...styles.floatingButton,
                      color: likedItems.has(product.id) ? "#ef4444" : "white",
                    }}
                    onClick={() => toggleLike(product.id)}
                    onMouseEnter={(e) =>
                      Object.assign(
                        e.target.style,
                        styles.floatingButtonHovered
                      )
                    }
                    onMouseLeave={(e) =>
                      Object.assign(e.target.style, styles.floatingButton)
                    }
                  >
                    <Heart
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        fill: likedItems.has(product.id) ? "#ef4444" : "none",
                      }}
                    />
                  </button>
                  <button
                    style={styles.floatingButton}
                    onMouseEnter={(e) =>
                      Object.assign(
                        e.target.style,
                        styles.floatingButtonHovered
                      )
                    }
                    onMouseLeave={(e) =>
                      Object.assign(e.target.style, styles.floatingButton)
                    }
                  >
                    <Eye style={{ width: "1.25rem", height: "1.25rem" }} />
                  </button>
                </div>

                {/* Shimmer Effect */}
                <div
                  style={{
                    ...styles.shimmer,
                    ...(hoveredCard === product.id ? styles.shimmerActive : {}),
                  }}
                />
              </div>

              {/* Content */}
              <div style={styles.content}>
                <h3
                  style={{
                    ...styles.productName,
                    ...(hoveredCard === product.id
                      ? styles.productNameHovered
                      : {}),
                  }}
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div style={styles.rating}>
                  <div style={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        style={{
                          ...styles.star,
                          ...(i < Math.floor(product.rating)
                            ? styles.starFilled
                            : styles.starEmpty),
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                  <span style={styles.ratingText}>({product.rating})</span>
                </div>

                {/* Price */}
                <div style={styles.priceSection}>
                  <span style={styles.price}>{product.price}</span>
                  {product.discount > 0 && (
                    <span style={styles.originalPrice}>
                      $
                      {Math.round(
                        parseInt(product.price.slice(1)) /
                          (1 - product.discount / 100)
                      )}
                    </span>
                  )}
                </div>

                {/* View Counter */}
                <div style={styles.viewCounter}>
                  <Eye style={styles.viewIcon} />
                  <span>{viewCounts[product.id] || 0} views</span>
                  <Sparkles style={styles.sparkle} />
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => toggleCart(product.id)}
                  style={{
                    ...styles.cartButton,
                    ...(cartItems.has(product.id)
                      ? styles.cartButtonAdded
                      : styles.cartButtonDefault),
                  }}
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, {
                      ...e.target.style,
                      ...styles.cartButtonHovered,
                    })
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, {
                      ...styles.cartButton,
                      ...(cartItems.has(product.id)
                        ? styles.cartButtonAdded
                        : styles.cartButtonDefault),
                    })
                  }
                  onMouseDown={(e) =>
                    Object.assign(e.target.style, styles.cartButtonActive)
                  }
                  onMouseUp={(e) =>
                    Object.assign(e.target.style, styles.cartButtonHovered)
                  }
                >
                  {cartItems.has(product.id) ? (
                    <>
                      <Zap style={{ width: "1.25rem", height: "1.25rem" }} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart
                        style={{ width: "1.25rem", height: "1.25rem" }}
                      />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>

              {/* Glow Effect */}
              <div
                style={{
                  ...styles.glow,
                  ...(hoveredCard === product.id ? styles.glowVisible : {}),
                }}
              >
                <div style={styles.glowInner} />
              </div>
            </div>

            {/* Floating Particles */}
            {hoveredCard === product.id && (
              <div style={styles.particles}>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.particle,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div style={styles.stats}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{likedItems.size}</div>
            <div style={styles.statLabel}>Items Liked</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{cartItems.size}</div>
            <div style={styles.statLabel}>Items in Cart</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {Object.values(viewCounts).reduce((a, b) => a + b, 0)}
            </div>
            <div style={styles.statLabel}>Total Views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEffectsShowcase;
