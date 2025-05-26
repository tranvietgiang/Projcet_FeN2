import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Heart from "./components/ClothingSalePage/ClothingSalePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Content_ca from "./components/Content/Content_ca";
import Cart_page from "./components/Cart-page/Cart-page";
import Checkout from "./components/Checkout/Checkout";
import Success from "./components/Success/Success";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import All_product from "./components/All-product/AllProduct";
import Option_product from "./components/Total-product/option_product";
import Admin_login from "./components/Admin-login/Admin_login";
import Statistic from "./components/Statistical/Statistical";
import ONSale from "./components/On-sale/OnSale";
import Address from "./components/Branch-address/Address";

// Bọc Routes lại bằng 1 component để dùng `useLocation`
function AppWrapper() {
  const location = useLocation();
  const isAdminLogin = location.pathname === "/admin-login";
  const isStatistic = location.pathname === "/admin-statistic";

  // Scroll to top mỗi khi chuyển trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!isAdminLogin && <ScrollToTop />}
      {!isAdminLogin && !isStatistic && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Content />
              <Content_ca />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/Cart-page" element={<Cart_page />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/ProductDetailPage/:id" element={<ProductDetail />} />
        <Route path="/all-product" element={<All_product />} />
        <Route path="/option-product" element={<Option_product />} />
        <Route path="/on-sale" element={<ONSale />} />
        <Route path="/brands" element={<Address />} />

        {/* Trang đăng nhập Admin */}
        <Route path="/admin-login" element={<Admin_login />} />
        <Route path="/admin-statistic" element={<Statistic />} />
      </Routes>

      {!isAdminLogin}
      {!isStatistic}
    </>
  );
}

// App chính
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
