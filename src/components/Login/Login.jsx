import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây
    console.log("Đăng nhập");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký tại đây
    console.log("Đăng ký");
  };

  return (
    <div className="login-container" id="container">
      <div className="login-form-container login-sign-up-container">
        <form className="login-form" onSubmit={handleSignUpSubmit}>
          <h1 className="login-h1">Create Account</h1>
          <div className="login-social-container">
            <a href="#" className="login-social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="login-social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="login-social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className="login-span">or use your email for registration</span>
          <input
            className="login-input"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            required
          />
          <button className="login-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>

      <div className="login-form-container login-sign-in-container">
        <form className="login-form" onSubmit={handleSignInSubmit}>
          <h1 className="login-h1">Sign In</h1>
          <div className="login-social-container">
            <a href="#" className="login-social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="login-social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="login-social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className="login-span">or use your account</span>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            required
          />
          <a href="#" className="login-forgot">
            Forgot your password?
          </a>
          <button className="login-button" type="submit">
            <Link to="/myAccount">Sign In</Link>
          </button>
        </form>
      </div>

      <div className="login-overlay-container">
        <div className="login-overlay">
          <div className="login-overlay-panel login-overlay-left">
            <h1 className="login-h1">Welcome Back!</h1>
            <p className="login-p">
              To keep connected with us please login with your personal info
            </p>
            <button className="login-button ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="login-overlay-panel login-overlay-right">
            <h1 className="login-h1">Hello, Friend!</h1>
            <p className="login-p">
              Enter your personal details and start your journey with us
            </p>
            <button className="login-button ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
