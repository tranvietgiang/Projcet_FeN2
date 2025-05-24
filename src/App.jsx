import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Trang chủ */}
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

        {/* Các trang khác không có Content_ca hoặc Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/Cart-page" element={<Cart_page />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/ProductDetailPage/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
