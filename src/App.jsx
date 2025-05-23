import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Heart from "./components/ClothingSalePage/ClothingSalePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
