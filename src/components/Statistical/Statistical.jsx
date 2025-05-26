import React, { useState, useEffect } from "react";

const ClothingWebsiteStats = () => {
  const [timeRange, setTimeRange] = useState("7days");
  const [animatedStats, setAnimatedStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalVisitors: 0,
    conversionRate: 0,
  });

  // Sample data for different time ranges
  const statsData = {
    "7days": {
      totalSales: 45680,
      totalOrders: 234,
      totalVisitors: 12450,
      conversionRate: 1.88,
      chartData: [
        { day: "Mon", sales: 6200, visitors: 1800 },
        { day: "Tue", sales: 7100, visitors: 1950 },
        { day: "Wed", sales: 5800, visitors: 1700 },
        { day: "Thu", sales: 8200, visitors: 2100 },
        { day: "Fri", sales: 9300, visitors: 2300 },
        { day: "Sat", sales: 4800, visitors: 1600 },
        { day: "Sun", sales: 4280, visitors: 1000 },
      ],
      topProducts: [
        { name: "Summer Dress Collection", sales: 89, revenue: 8900 },
        { name: "Casual T-Shirts", sales: 76, revenue: 3800 },
        { name: "Denim Jeans", sales: 45, revenue: 6750 },
        { name: "Athletic Wear", sales: 34, revenue: 5100 },
      ],
    },
    "30days": {
      totalSales: 189520,
      totalOrders: 967,
      totalVisitors: 48300,
      conversionRate: 2.0,
      chartData: [
        { day: "Week 1", sales: 42000, visitors: 11000 },
        { day: "Week 2", sales: 48500, visitors: 12200 },
        { day: "Week 3", sales: 51020, visitors: 13100 },
        { day: "Week 4", sales: 48000, visitors: 12000 },
      ],
      topProducts: [
        { name: "Summer Dress Collection", sales: 234, revenue: 23400 },
        { name: "Casual T-Shirts", sales: 198, revenue: 9900 },
        { name: "Denim Jeans", sales: 156, revenue: 23400 },
        { name: "Athletic Wear", sales: 123, revenue: 18450 },
      ],
    },
  };

  const currentStats = statsData[timeRange];

  // Animate numbers when stats change
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        totalSales: Math.floor(currentStats.totalSales * easeOutQuart),
        totalOrders: Math.floor(currentStats.totalOrders * easeOutQuart),
        totalVisitors: Math.floor(currentStats.totalVisitors * easeOutQuart),
        conversionRate: +(currentStats.conversionRate * easeOutQuart).toFixed(
          2
        ),
      });

      currentStep++;
      if (currentStep > steps) {
        clearInterval(interval);
        setAnimatedStats(currentStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [timeRange]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-6 fw-bold text-dark mb-0">
                Fashion Store Analytics
              </h1>
              <div>
                <a href="/admin-login">Đăng xuất</a>
              </div>
            </div>
            <div className="d-flex gap-2">
              <select
                className="form-select"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                style={{ width: "auto" }}
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="row mb-4">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-muted mb-1 small">Total Sales</p>
                  <h3 className="fw-bold mb-0 text-success">
                    {formatCurrency(animatedStats.totalSales)}
                  </h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> +12.5%
                  </small>
                </div>
                <div className="text-success fs-1 opacity-75">
                  <i className="bi bi-currency-dollar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-muted mb-1 small">Total Orders</p>
                  <h3 className="fw-bold mb-0 text-primary">
                    {formatNumber(animatedStats.totalOrders)}
                  </h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> +8.2%
                  </small>
                </div>
                <div className="text-primary fs-1 opacity-75">
                  <i className="bi bi-bag-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-muted mb-1 small">Website Visitors</p>
                  <h3 className="fw-bold mb-0 text-info">
                    {formatNumber(animatedStats.totalVisitors)}
                  </h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> +15.7%
                  </small>
                </div>
                <div className="text-info fs-1 opacity-75">
                  <i className="bi bi-people"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-muted mb-1 small">Conversion Rate</p>
                  <h3 className="fw-bold mb-0 text-warning">
                    {animatedStats.conversionRate}%
                  </h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> +0.3%
                  </small>
                </div>
                <div className="text-warning fs-1 opacity-75">
                  <i className="bi bi-graph-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row mb-4">
        {/* Sales Chart */}
        <div className="col-lg-8 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">Sales & Visitors Trend</h5>
            </div>
            <div className="card-body">
              <div style={{ height: "300px", position: "relative" }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <defs>
                    <pattern
                      id="grid"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="#e9ecef"
                        strokeWidth="0.1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />

                  {/* Sales line */}
                  <polyline
                    points={currentStats.chartData
                      .map(
                        (item, index) =>
                          `${
                            (index / (currentStats.chartData.length - 1)) * 90 +
                            5
                          },${
                            95 -
                            (item.sales /
                              Math.max(
                                ...currentStats.chartData.map((d) => d.sales)
                              )) *
                              80
                          }`
                      )
                      .join(" ")}
                    fill="none"
                    stroke="#0d6efd"
                    strokeWidth="0.5"
                  />

                  {/* Visitors line */}
                  <polyline
                    points={currentStats.chartData
                      .map(
                        (item, index) =>
                          `${
                            (index / (currentStats.chartData.length - 1)) * 90 +
                            5
                          },${
                            95 -
                            (item.visitors /
                              Math.max(
                                ...currentStats.chartData.map((d) => d.visitors)
                              )) *
                              80
                          }`
                      )
                      .join(" ")}
                    fill="none"
                    stroke="#20c997"
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Chart labels */}
                <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-between px-3">
                  {currentStats.chartData.map((item, index) => (
                    <small key={index} className="text-muted">
                      {item.day}
                    </small>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-center gap-4 mt-3">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-primary rounded-circle me-2"
                    style={{ width: "12px", height: "12px" }}
                  ></div>
                  <small className="text-muted">Sales</small>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="bg-info rounded-circle me-2"
                    style={{ width: "12px", height: "12px" }}
                  ></div>
                  <small className="text-muted">Visitors</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="col-lg-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">Top Selling Products</h5>
            </div>
            <div className="card-body">
              {currentStats.topProducts.map((product, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between mb-3"
                >
                  <div className="flex-grow-1">
                    <div className="fw-medium">{product.name}</div>
                    <small className="text-muted">
                      {product.sales} units sold
                    </small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold text-success">
                      {formatCurrency(product.revenue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats Row */}
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">Traffic Sources</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Organic Search</span>
                  <span className="text-muted">45.2%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "45.2%" }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Social Media</span>
                  <span className="text-muted">28.7%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "28.7%" }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Direct Traffic</span>
                  <span className="text-muted">18.3%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "18.3%" }}
                  ></div>
                </div>
              </div>

              <div className="mb-0">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Email Marketing</span>
                  <span className="text-muted">7.8%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "7.8%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">Customer Insights</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="text-center p-3">
                    <h4 className="text-primary mb-1">68%</h4>
                    <small className="text-muted">Returning Customers</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3">
                    <h4 className="text-success mb-1">$195</h4>
                    <small className="text-muted">Avg. Order Value</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3">
                    <h4 className="text-info mb-1">3.2</h4>
                    <small className="text-muted">Items per Order</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3">
                    <h4 className="text-warning mb-1">4.7★</h4>
                    <small className="text-muted">Customer Rating</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
      />

      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default ClothingWebsiteStats;
