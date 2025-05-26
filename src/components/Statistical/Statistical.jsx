import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistical = () => {
  const [timeRange, setTimeRange] = useState("7days");
  const [animatedStats, setAnimatedStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalVisitors: 0,
    conversionRate: 0,
  });

  const statsData = {
    "7days": {
      totalSales: 45680,
      totalOrders: 234,
      totalVisitors: 12450,
      conversionRate: 1.88,
    },
    "30days": {
      totalSales: 189520,
      totalOrders: 967,
      totalVisitors: 48300,
      conversionRate: 2.0,
    },
  };

  const currentStats = statsData[timeRange];

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      const progress = currentStep / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        totalSales: Math.floor(currentStats.totalSales * ease),
        totalOrders: Math.floor(currentStats.totalOrders * ease),
        totalVisitors: Math.floor(currentStats.totalVisitors * ease),
        conversionRate: +(currentStats.conversionRate * ease).toFixed(2),
      });

      currentStep++;
      if (currentStep > steps) {
        clearInterval(interval);
        setAnimatedStats(currentStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [timeRange]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num);

  const chartData = [
    {
      name: "Sales",
      value: animatedStats.totalSales,
    },
    {
      name: "Orders",
      value: animatedStats.totalOrders,
    },
    {
      name: "Visitors",
      value: animatedStats.totalVisitors,
    },
    {
      name: "Conversion",
      value: animatedStats.conversionRate,
    },
  ];

  return (
    <div className="container py-4">
      <a href="/admin-product">home</a>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Fashion Store Analytics</h1>
        <select
          className="form-select w-auto"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
        </select>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <p className="text-muted mb-1">Total Sales</p>
            <h4 className="text-success mb-0">
              {formatCurrency(animatedStats.totalSales)}
            </h4>
            <small className="text-success">+12.5%</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <p className="text-muted mb-1">Total Orders</p>
            <h4 className="text-primary mb-0">
              {formatNumber(animatedStats.totalOrders)}
            </h4>
            <small className="text-success">+8.2%</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <p className="text-muted mb-1">Website Visitors</p>
            <h4 className="text-info mb-0">
              {formatNumber(animatedStats.totalVisitors)}
            </h4>
            <small className="text-success">+15.7%</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border rounded shadow-sm">
            <p className="text-muted mb-1">Conversion Rate</p>
            <h4 className="text-warning mb-0">
              {animatedStats.conversionRate}%
            </h4>
            <small className="text-success">+0.3%</small>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistical;
