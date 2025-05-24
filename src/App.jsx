import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Heart from "./components/ClothingSalePage/ClothingSalePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Content_ca from "./components/Content/Content_ca";

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
      </Routes>
    </Router>
  );
}

export default App;
