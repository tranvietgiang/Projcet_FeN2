import "./Admin_login.css";
import { Link } from "react-router-dom";
export default function Admin_login() {
  return (
    <>
      <form class="login-admin-form">
        <div class="login-admin-form-title">
          <span>Welcome Admin</span>
        </div>
        <div class="login-admin-title-2">
          <span>Admin</span>
        </div>

        <div class="login-admin-input-container">
          <input
            class="login-admin-input-mail"
            type="email"
            placeholder="Enter email"
          />
          <span> </span>
        </div>

        <section class="login-admin-bg-stars">
          <span class="login-admin-star"></span>
          <span class="login-admin-star"></span>
          <span class="login-admin-star"></span>
          <span class="login-admin-star"></span>
        </section>

        <div class="login-admin-input-container">
          <input
            class="login-admin-input-pwd"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" class="login-admin-submit">
          <span class="login-admin-sign-text">
            <Link to="/admin-statistic">Sign in</Link>
          </span>
        </button>

        <p class="login-admin-signup-link">
          <a href="" class="login-admin-up">
            forget
          </a>
        </p>
      </form>
    </>
  );
}
