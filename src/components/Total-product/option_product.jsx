import React, { useState, useMemo } from "react";
import { ChevronDown, Star, TrendingUp } from "lucide-react";

const ProductSelector = () => {
  // Sample product data
  const [products] = useState([
    {
      id: "P001",
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      salesCount: 1250,
      rating: 4.8,
      image: "./image/img/img1.png",
      category: "Electronics",
    },
    {
      id: "P002",
      name: "Smart Fitness Watch",
      price: 199.99,
      salesCount: 980,
      rating: 4.6,
      image: "./image/img/img1.png",
      category: "Electronics",
    },
    {
      id: "P003",
      name: "Organic Coffee Beans",
      price: 24.99,
      salesCount: 2100,
      rating: 4.9,
      image: "./image/img/img1.png",
      category: "Food",
    },
    {
      id: "P004",
      name: "Yoga Mat Premium",
      price: 45.99,
      salesCount: 850,
      rating: 4.7,
      image: "./image/img/img1.png",
      category: "Sports",
    },
    {
      id: "P005",
      name: "Stainless Steel Water Bottle",
      price: 29.99,
      salesCount: 1800,
      rating: 4.5,
      image: "./image/img/img1.png",
      category: "Lifestyle",
    },
    {
      id: "P006",
      name: "Wireless Charging Pad",
      price: 34.99,
      salesCount: 720,
      rating: 4.4,
      image: "./image/img/img1.png",
      category: "Electronics",
    },
    {
      id: "P007",
      name: "Premium Backpack",
      price: 89.99,
      salesCount: 1500,
      rating: 4.8,
      image: "./image/img/img1.png",
      category: "Accessories",
    },
    {
      id: "P008",
      name: "LED Desk Lamp",
      price: 55.99,
      salesCount: 650,
      rating: 4.3,
      image: "./image/img/img1.png",
      category: "Home",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("best-selling");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sort options
  const sortOptions = [
    { value: "best-selling", label: "Best Selling", icon: TrendingUp },
    { value: "price-low-high", label: "Price: Low to High", icon: null },
    { value: "price-high-low", label: "Price: High to Low", icon: null },
    { value: "rating", label: "Highest Rated", icon: Star },
    { value: "name", label: "Name A-Z", icon: null },
  ];

  // Sorted products based on selected option
  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (sortOption) {
      case "best-selling":
        return sorted.sort((a, b) => b.salesCount - a.salesCount);
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  }, [products, sortOption]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsDropdownOpen(false);
  };

  const getCurrentSortLabel = () => {
    const option = sortOptions.find((opt) => opt.value === sortOption);
    return option ? option.label : "Select Sort Option";
  };

  const getBestSellingBadge = (product) => {
    const maxSales = Math.max(...products.map((p) => p.salesCount));
    return product.salesCount === maxSales;
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "24px",
      backgroundColor: "#ffffff",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "32px",
      textAlign: "center",
    },
    section: {
      marginBottom: "24px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "8px",
    },
    sortGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "8px",
    },
    sortButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "12px 16px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    sortButtonActive: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    sortButtonInactive: {
      backgroundColor: "#f3f4f6",
      color: "#374151",
    },
    dropdownContainer: {
      position: "relative",
    },
    dropdownButton: {
      width: "100%",
      padding: "12px 16px",
      textAlign: "left",
      backgroundColor: "#ffffff",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      cursor: "pointer",
      fontSize: "16px",
      transition: "border-color 0.2s ease",
    },
    dropdownButtonHover: {
      borderColor: "#9ca3af",
    },
    dropdownContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    dropdownText: {
      color: "#111827",
    },
    dropdownPlaceholder: {
      color: "#6b7280",
    },
    selectedProductInfo: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    productName: {
      fontWeight: "500",
    },
    productPrice: {
      color: "#2563eb",
    },
    bestSellerBadge: {
      backgroundColor: "#fef2f2",
      color: "#dc2626",
      fontSize: "12px",
      padding: "4px 8px",
      borderRadius: "9999px",
    },
    chevron: {
      width: "20px",
      height: "20px",
      color: "#9ca3af",
      transition: "transform 0.2s ease",
    },
    chevronRotated: {
      transform: "rotate(180deg)",
    },
    dropdown: {
      position: "absolute",
      zIndex: 10,
      width: "100%",
      marginTop: "4px",
      backgroundColor: "#ffffff",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      maxHeight: "320px",
      overflowY: "auto",
    },
    dropdownInner: {
      padding: "8px",
    },
    sortInfo: {
      fontSize: "12px",
      color: "#6b7280",
      padding: "4px 8px",
      marginBottom: "8px",
      backgroundColor: "#f9fafb",
      borderRadius: "4px",
    },
    productItem: {
      width: "100%",
      padding: "12px",
      textAlign: "left",
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    productItemHover: {
      backgroundColor: "#eff6ff",
    },
    productItemContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    productInfo: {
      flex: 1,
    },
    productHeader: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "4px",
    },
    productNameItem: {
      fontWeight: "500",
      color: "#111827",
    },
    productDetails: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      fontSize: "14px",
      color: "#6b7280",
    },
    productPriceItem: {
      fontWeight: "600",
      color: "#2563eb",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    star: {
      width: "14px",
      height: "14px",
      color: "#fbbf24",
      fill: "#fbbf24",
    },
    categoryBadge: {
      fontSize: "12px",
      backgroundColor: "#f3f4f6",
      padding: "2px 8px",
      borderRadius: "4px",
    },
    productId: {
      fontSize: "12px",
      color: "#9ca3af",
      fontFamily: "monospace",
    },
    detailsCard: {
      background: "linear-gradient(to right, #eff6ff, #e0e7ff)",
      borderRadius: "12px",
      padding: "24px",
      border: "1px solid #bfdbfe",
    },
    detailsTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "16px",
    },
    detailsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    },
    productTitleSection: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
    },
    productTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
    },
    bestSellerBadgeDetails: {
      backgroundColor: "#ef4444",
      color: "#ffffff",
      fontSize: "12px",
      padding: "4px 8px",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    productMeta: {
      color: "#6b7280",
      marginBottom: "8px",
    },
    productMetaValue: {
      fontFamily: "monospace",
      fontWeight: "500",
    },
    statsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    statRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    statLabel: {
      color: "#6b7280",
    },
    statValue: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2563eb",
    },
    ratingValue: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    ratingNumber: {
      fontWeight: "600",
    },
    salesValue: {
      fontWeight: "600",
      color: "#059669",
    },
    summaryGrid: {
      marginTop: "32px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
    },
    summaryCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
    },
    summaryTitle: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#6b7280",
      marginBottom: "4px",
    },
    summaryValue: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1f2937",
    },
    summaryValueRed: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#dc2626",
    },
    summaryValueBlue: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#2563eb",
    },
    summaryValueYellow: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#eab308",
    },
    topBadge: {
      backgroundColor: "#fed7aa",
      color: "#ea580c",
      fontSize: "12px",
      padding: "4px 8px",
      borderRadius: "9999px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Selector & Sort</h1>

      {/* Sort Options */}
      <div style={styles.section}>
        <label style={styles.label}>Sort Products By:</label>
        <div style={styles.sortGrid}>
          {sortOptions.map((option) => {
            const IconComponent = option.icon;
            const isActive = sortOption === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setSortOption(option.value)}
                style={{
                  ...styles.sortButton,
                  ...(isActive
                    ? styles.sortButtonActive
                    : styles.sortButtonInactive),
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "#e5e7eb";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "#f3f4f6";
                  }
                }}
              >
                {IconComponent && <IconComponent size={16} />}
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Dropdown */}
      <div style={styles.section}>
        <label style={styles.label}>Select Product:</label>
        <div style={styles.dropdownContainer}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={styles.dropdownButton}
            onMouseEnter={(e) => (e.target.style.borderColor = "#9ca3af")}
            onMouseLeave={(e) => (e.target.style.borderColor = "#d1d5db")}
          >
            <div style={styles.dropdownContent}>
              <span
                style={
                  selectedProduct
                    ? styles.dropdownText
                    : styles.dropdownPlaceholder
                }
              >
                {selectedProduct ? (
                  <div style={styles.selectedProductInfo}>
                    <span>
                      <img src={selectedProduct.image} alt="" />
                    </span>
                    <span style={styles.productName}>
                      {selectedProduct.name}
                    </span>
                    <span style={styles.productPrice}>
                      (${selectedProduct.price})
                    </span>
                    {getBestSellingBadge(selectedProduct) && (
                      <span style={styles.bestSellerBadge}>Best Seller</span>
                    )}
                  </div>
                ) : (
                  "Choose a product..."
                )}
              </span>
              <ChevronDown
                style={{
                  ...styles.chevron,
                  ...(isDropdownOpen ? styles.chevronRotated : {}),
                }}
              />
            </div>
          </button>

          {isDropdownOpen && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownInner}>
                <div style={styles.sortInfo}>
                  Sorted by: {getCurrentSortLabel()}
                </div>
                {sortedProducts.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    style={styles.productItem}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#eff6ff")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    <div style={styles.productItemContent}>
                      <div style={styles.productInfo}>
                        <div style={styles.productHeader}>
                          <span style={styles.productNameItem}>
                            {product.name}
                          </span>
                          {getBestSellingBadge(product) && (
                            <span style={styles.bestSellerBadge}>
                              #1 Best Seller
                            </span>
                          )}
                          {index < 3 && sortOption === "best-selling" && (
                            <span style={styles.topBadge}>Top 3</span>
                          )}
                        </div>
                        <div style={styles.productDetails}>
                          <span style={styles.productPriceItem}>
                            ${product.price}
                          </span>
                          <span style={styles.ratingContainer}>
                            <Star style={styles.star} />
                            {product.rating}
                          </span>
                          <span>
                            {product.salesCount.toLocaleString()} sold
                          </span>
                          <span style={styles.categoryBadge}>
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div style={styles.productId}>{product.id}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Selected Product Details */}
      {selectedProduct && (
        <div style={styles.detailsCard}>
          <h3 style={styles.detailsTitle}>Selected Product Details</h3>
          <div style={styles.detailsGrid}>
            <div>
              <div style={styles.productTitleSection}>
                <h4 style={styles.productTitle}>{selectedProduct.name}</h4>
                {getBestSellingBadge(selectedProduct) && (
                  <span style={styles.bestSellerBadgeDetails}>
                    <TrendingUp size={12} />
                    Best Seller
                  </span>
                )}
              </div>
              <p style={styles.productMeta}>
                Product ID:{" "}
                <span style={styles.productMetaValue}>
                  {selectedProduct.id}
                </span>
              </p>
              <p style={styles.productMeta}>
                Category:{" "}
                <span style={styles.productMetaValue}>
                  {selectedProduct.category}
                </span>
              </p>
            </div>
            <div>
              <div style={styles.statsContainer}>
                <div style={styles.statRow}>
                  <span style={styles.statLabel}>Price:</span>
                  <span style={styles.statValue}>${selectedProduct.price}</span>
                </div>
                <div style={styles.statRow}>
                  <span style={styles.statLabel}>Rating:</span>
                  <div style={styles.ratingValue}>
                    <Star size={16} style={styles.star} />
                    <span style={styles.ratingNumber}>
                      {selectedProduct.rating}/5
                    </span>
                  </div>
                </div>
                <div style={styles.statRow}>
                  <span style={styles.statLabel}>Total Sales:</span>
                  <span style={styles.salesValue}>
                    {selectedProduct.salesCount.toLocaleString()} units
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Statistics */}
      <div style={styles.summaryGrid}>
        <div style={styles.summaryCard}>
          <h4 style={styles.summaryTitle}>Total Products</h4>
          <p style={styles.summaryValue}>{products.length}</p>
        </div>
        <div style={styles.summaryCard}>
          <h4 style={styles.summaryTitle}>Best Seller</h4>
          <p style={styles.summaryValueRed}>
            {products
              .find((p) => getBestSellingBadge(p))
              ?.name.split(" ")
              .slice(0, 2)
              .join(" ")}
          </p>
        </div>
        <div style={styles.summaryCard}>
          <h4 style={styles.summaryTitle}>Price Range</h4>
          <p style={styles.summaryValueBlue}>
            ${Math.min(...products.map((p) => p.price))} - $
            {Math.max(...products.map((p) => p.price))}
          </p>
        </div>
        <div style={styles.summaryCard}>
          <h4 style={styles.summaryTitle}>Avg Rating</h4>
          <p style={styles.summaryValueYellow}>
            {(
              products.reduce((sum, p) => sum + p.rating, 0) / products.length
            ).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;
