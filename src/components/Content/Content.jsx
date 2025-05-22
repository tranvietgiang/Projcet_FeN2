import { useState, useEffect, useRef } from "react";
import "./Content.css";

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const moveImgRef = useRef(null);
  const contentImg2Ref = useRef(null);
  const wearImgRef = useRef(null);
  const spanStreetRef = useRef(null);
  const intervalRef = useRef(null);

  const imageArr = [
    {
      text1: "NEW COLLECTION",
      text2: "WEAR",
      img3: "/image/img/img1-1.png",
      img1: "/image/img/img1.png",
      img2: "/image/img/img1-2.png",
    },
    {
      text1: "STREET STYLE",
      text2: "MUST",
      img3: "/image/img/img2-1.png",
      img1: "/image/img/img2.png",
      img2: "/image/img/img2-2.png",
    },
    {
      text1: "FEATURE FASHION",
      text2: "MENSWEAR",
      img3: "/image/img/img3-2.png",
      img1: "/image/img/img3.png",
      img2: "/image/img/img3-1.png",
    },
  ];

  // Sửa phần này để thêm mousemove đúng cách
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!moveImgRef.current || !contentImg2Ref.current) return;

      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      const toaDoX = e.clientX / halfW - 1;
      const toaDoY = e.clientY / halfH - 1;

      contentImg2Ref.current.style.transform = `translate(${50 * toaDoX}px, ${
        50 * toaDoY
      }px)`;
    };

    const moveImgEl = moveImgRef.current;
    if (moveImgEl) {
      moveImgEl.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (moveImgEl) {
        moveImgEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      fadeToIndex((prev) => (prev + 1) % imageArr.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const fadeToIndex = (indexOrFn) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex =
          typeof indexOrFn === "function" ? indexOrFn(prev) : indexOrFn;
        return newIndex;
      });
      setIsFading(false);
    }, 300); // fade-out time
  };

  const handlePrev = () => {
    fadeToIndex((prev) => (prev - 1 + imageArr.length) % imageArr.length);
    resetInterval();
  };

  const handleNext = () => {
    fadeToIndex((prev) => (prev + 1) % imageArr.length);
    resetInterval();
  };

  /** hover content */

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      const img = document.querySelector(".imgHover");
      img.classList.remove("run-animation"); // xóa class
      void img.offsetWidth; // force reflow
      img.classList.add("run-animation"); // thêm lại
    }
  }, [hover]);

  const text = "street inspiration";

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // đổi key => React render lại
    }, 4000); // chạy lại sau 4s

    return () => clearInterval(interval);
  }, []);
  const text1 = "WEEKLY EDIT SMART STYLE";

  return (
    <>
      <main
        className="position-relative"
        style={{ background: "#1e1d1f", padding: 100 }}
      >
        <section className="container pt-3">
          <div className="d-flex">
            {/* Section 1 */}
            <div className="col" style={{ marginTop: 80, marginLeft: 90 }}>
              <div>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    display: "block",
                    lineHeight: "1",
                  }}
                  className="text-white span-newCollection"
                >
                  {imageArr[currentIndex].text1}
                </span>
                <span
                  ref={spanStreetRef}
                  className="text-white span-street-animation"
                  style={{
                    fontSize: "4em",
                    fontWeight: "bold",
                    display: "block",
                    marginLeft: 40,
                    lineHeight: "1",
                  }}
                  key={`text2-${currentIndex}`} // ép React re-render để animation chạy lại
                >
                  {imageArr[currentIndex].text2}
                </span>
              </div>
              <br />
              <span>
                <img
                  ref={wearImgRef}
                  className="img-wear-animation"
                  style={{
                    width: 500,
                    height: 200,
                    marginTop: -50,
                    marginLeft: -10,
                  }}
                  key={imageArr[currentIndex].img3}
                  src={imageArr[currentIndex].img3}
                  alt="Collection wear"
                />
              </span>
            </div>

            {/* Section 2 */}
            <div
              className="col move-img"
              ref={moveImgRef}
              style={{ marginTop: -80, marginLeft: 90 }}
            >
              <span>
                <img
                  className={`position-absolute z-2  content-img1  ${
                    isFading ? "fade-out" : ""
                  }`}
                  style={{ width: "350px", height: "500px" }}
                  src={imageArr[currentIndex].img1}
                  alt="Collection foreground"
                />
                <img
                  ref={contentImg2Ref}
                  className={` content-img2 position-absolute z-1 ${
                    isFading ? "fade-out" : ""
                  }`}
                  style={{
                    width: "600px",
                    height: "500px",
                    marginLeft: "-100px",
                  }}
                  src={imageArr[currentIndex].img2}
                  alt="Collection background"
                />
              </span>
            </div>
          </div>

          {/* Navigation buttons */}
          <div
            className="position-absolute top-50 start-0 w-100 d-flex justify-content-between"
            style={{ transform: "translateY(-50%)", padding: "0px 20px" }}
          >
            <button onClick={handlePrev} aria-label="Previous collection">
              ←
            </button>
            <button onClick={handleNext} aria-label="Next collection">
              →
            </button>
          </div>
        </section>
      </main>

      <section style={{ maxWidth: 1150, margin: "100px auto" }}>
        <div className="row">
          <div className="col-4">
            <div>
              {/** hình 1 */}
              <div
                className="position-relation hover1"
                style={{
                  background: "#ead9be",
                  width: 400,
                  height: 200,
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: 300, height: 200, marginLeft: 170 }}
                  className="image1 object-fit-contain imgHover"
                  src="/image/section/anh1.png"
                  alt="Shop and save banner"
                />
                <div
                  className="text-uppercase"
                  style={{ marginTop: -150, marginLeft: 100 }}
                >
                  <p>shop & save</p>
                  <p className="fs-5" style={{ fontWeight: 700 }}>
                    <span
                      className={`hover-wrapper ${
                        hover ? "hovered delay1" : ""
                      }`}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      flat
                    </span>
                    <br />
                    <span
                      className={`fs-5 hover-wrapper ${
                        hover ? "hovered delay2" : ""
                      }`}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      40% off
                    </span>{" "}
                    <br />
                    <span
                      className={`fs-5 hover-wrapper ${
                        hover ? "hovered delay3" : ""
                      }`}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      {" "}
                      everything
                    </span>
                  </p>
                </div>
              </div>
              {/** hình 2 */}
              <div
                style={{ background: "#8d7c6e", width: 400, height: 200 }}
                className=""
              >
                <img
                  style={{
                    width: 300,
                    height: 200,
                    marginLeft: -50,
                  }}
                  className="image1 object-fit-contain"
                  src="/image/section/anh4.png"
                  alt=""
                />
                <div
                  className="text-uppercase"
                  style={{ marginTop: -150, marginLeft: 240 }}
                >
                  <p>new arrivals</p>
                  <p
                    key={key}
                    style={{ fontWeight: 700 }}
                    className="fs-5 animated-text"
                  >
                    {text.split("").map((char, index) => (
                      <span
                        key={index}
                        className="letter"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <img
              className=""
              style={{ width: 710, height: 200 }}
              src="/image/section/anh3.gif"
              alt=""
            />
          </div>
          <div className="col-3">
            <img
              className="position-relation"
              style={{ width: 300, height: 400 }}
              src="/image/section/anh2.png"
              alt=""
            />

            <p
              style={{ marginTop: -150, marginLeft: 70 }}
              className="animated-text1"
            >
              {text1.split("").map((char, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>

            <button
              style={{ marginLeft: 70 }}
              className="btn btn-outline-danger text-uppercase"
            >
              explore now
            </button>
          </div>
          <div style={{ background: "#ece4d1" }} className="col-4 text-center">
            <p
              style={{ marginLeft: 100 }}
              className="position-absolute  text-center pt-2"
            >
              OUR OFFERS <br />
              <span className="bold fs-3"> TOP BRANDS</span>
            </p>

            <div className="image-wrapper1">
              <img
                style={{ marginLeft: 100 }}
                src="/image/section/anh3.png"
                alt="Offer"
              />
              <div className="image-overlay1">
                {/*hover button*/}
                <button style={{ marginTop: 200 }} className="button-shopnow">
                  <div class="default-btn">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="#FFF"
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle r="3" cy="12" cx="12"></circle>
                    </svg>
                    <span>Quick View</span>
                  </div>
                  <div class="hover-btn">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="#ffd300"
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <circle r="1" cy="21" cx="9"></circle>
                      <circle r="1" cy="21" cx="20"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span>Shop Now</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
