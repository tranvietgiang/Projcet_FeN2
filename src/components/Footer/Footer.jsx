import "./Footer.css";
export default function Footer() {
  const footerData = [
    {
      id: 1,
      image: "./footer/footer-1.png",
      text: "SHOULD YOU USE A SHAVE CREAM OR SHAVE GEL?",
    },
    {
      id: 2,
      image: "./footer/footer-2.png",
      text: "FACE THE NEW YEAR WITH THE REAL SHAVING COMPANY!",
    },
    {
      id: 3,
      image: "./footer/footer-3.png",
      text: "FACE THE NEW YEAR WITH THE REAL SHAVING COMPANY!",
    },
  ];
  return (
    <footer>
      {/*phần ảnh hover */}
      <section>
        <div className="mt-5">
          <h2 className="fw-bold ">RECENT POST</h2>
          <p className="text-center">
            <img src="./footer/footer-7.png" alt="" />
          </p>
        </div>

        <div className="container my-5">
          <div className="container mx-auto px-4">
            <div className="relative flex justify-center">
              <div className="background-glow"></div>

              <div className="d-flex gap-5 max-w-6xl relative z-10">
                {footerData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`footer-column text-center float-animation-${
                      index + 1
                    }`}
                  >
                    <div className="img-wrapper">
                      <img
                        className="footer-img rounded-2xl shadow-lg w-100"
                        src={item.image}
                        alt={`Footer ${item.id}`}
                        loading="lazy"
                      />
                    </div>
                    <p className="footer-text mt-6">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="image-slider-wrapper">
        <div className="image-slider d-flex">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <span key={num}>
              <img
                style={{ width: 250 }}
                className="footer-img-chung object-fit-cover"
                src={`./footer/footer-${num}.png`}
                alt=""
              />
            </span>
          ))}
          {/* Lặp lại lần 2 để tạo hiệu ứng liên tục */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <span key={`repeat-${num}`}>
              <img
                style={{ width: 250 }}
                className="footer-img-chung object-fit-cover"
                src={`./footer/footer-${num}.png`}
                alt=""
              />
            </span>
          ))}
        </div>
      </section>

      <footer className="footer bg-dark text-light py-5">
        <div className="container">
          <div className="row mb-4">
            {/* Cột 1: Categories */}
            <div className="col-md-2">
              <h6 className="fw-bold text-uppercase">Categories</h6>
              <ul className="list-unstyled">
                <li>For Men</li>
                <li>For Woman</li>
                <li>Accessories</li>
                <li>Other</li>
              </ul>
            </div>

            {/* Cột 2: Account */}
            <div className="col-md-2">
              <h6 className="fw-bold text-uppercase">Account</h6>
              <ul className="list-unstyled">
                <li>Wishlist</li>
                <li>Compare</li>
                <li>Subscribe</li>
                <li>Log in</li>
              </ul>
            </div>

            {/* Cột 3: Quick Links */}
            <div className="col-md-2">
              <h6 className="fw-bold text-uppercase">Quick Links</h6>
              <ul className="list-unstyled">
                <li>Shipping & Returns</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Vacancies</li>
              </ul>
            </div>

            {/* Cột 4: Company */}
            <div className="col-md-2">
              <h6 className="fw-bold text-uppercase">Company</h6>
              <ul className="list-unstyled">
                <li>About us</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* Cột 5: Support */}
            <div className="col-md-4">
              <h6 className="fw-bold text-uppercase">
                We Offer 24/7 Dedicated Support
              </h6>
              <p className="small">If you need support send us a message</p>
              <p className="mt-2">
                <i className="fas fa-headphones"></i> Got Questions? Call Us
                24/7
                <br />
                <span className="text-danger fw-bold">(012) 345 000 789</span>
              </p>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="row align-items-center">
            {/* Logo + location */}
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              <h3 className="logo">Striz</h3>
              <p>Box 565, Charlestown, Nevis, West Indies, Caribbean</p>
              <p>
                <a
                  href="mailto:contact@example.com"
                  className="text-light text-decoration-underline"
                >
                  contact@example.com
                </a>
              </p>
              <div className="social-icons">
                <i className="fab fa-facebook me-2"></i>
                <i className="fab fa-twitter me-2"></i>
                <i className="fab fa-instagram me-2"></i>
                <i className="fab fa-google-plus-g"></i>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-5 offset-md-3">
              <h6 className="fw-bold text-uppercase">Sign Up For Newsletter</h6>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control bg-transparent border-bottom text-white"
                  placeholder="Enter email address..."
                  style={{
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    borderRadius: 0,
                  }}
                />
                <button className="btn btn-outline-light ms-2 px-4">
                  Subscribe →
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* icon */}
      <ul class="wrapper">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <svg
            viewBox="0 0 320 512"
            height="1.2em"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>
        </li>
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <svg
            height="1.8em"
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            class="twitter"
          >
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
          </svg>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
          </svg>
        </li>
      </ul>
    </footer>
  );
}
