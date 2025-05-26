import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import Content_ca from "./components/Content/Content_ca";
import Footer from "./components/Footer/Footer";
import MyAccount from "./components/Myaccount/Myaccount";
import Contact from "./components/Contact/Contact";
import Product_admin from "./components/Admin/Products_admin";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Content />
              <Content_ca />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Product_admin /> */}
      <Footer />
    </Router>
  );
}

export default App;
