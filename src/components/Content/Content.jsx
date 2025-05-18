export default function Content() {
  // Di chuyển ảnh theo chuột trong vùng move-img
  document.addEventListener("mousemove", () => {
    const move_img = document.querySelector(".move-img");
    const content_img2 = document.querySelector(".content-img2");
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;

    move_img.addEventListener("mousemove", function (e) {
      const toaDoX = e.clientX / halfW - 1;
      const toaDoY = e.clientY / halfH - 1;
      content_img2.style.transform = `translate(${50 * toaDoX}px, ${
        50 * toaDoY
      }px)`;
    });
  });

  return (
    <main
      className="position-relation"
      style={{ background: "#1e1d1f", padding: 100 }}
    >
      <section className="container pt-3">
        <div className="d-flex">
          {/** section 1 */}
          <div
            style={{
              marginTop: 80,
              marginLeft: 90,
            }}
            className="col"
          >
            <div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  display: "block",
                  margin: 0,
                  padding: 0,
                  lineHeight: "1", // hoặc "0.9" nếu muốn sát hơn
                }}
                className="text-white"
              >
                NEW COLLECTION
              </span>
              <span
                style={{
                  fontSize: "4em",
                  fontWeight: "bold",
                  display: "block",
                  marginLeft: 40,
                  padding: 0,
                  lineHeight: "1",
                }}
                className="text-white"
              >
                STREET
              </span>
            </div>

            <br />
            <span>
              <img
                style={{
                  width: 500,
                  height: 200,
                  marginTop: -50,
                  marginLeft: -10,
                }}
                src="image/img/img1-1.png"
                alt=""
              />
            </span>
          </div>
          {/** section 2 */}
          <div
            style={{
              marginTop: -80,
              marginLeft: 90,
            }}
            className="col move-img"
          >
            <span>
              <img
                className="position-absolute z-2 object-fit-cover content-img1"
                style={{ width: "350px", height: "500px" }}
                src="/image/img/img1.png"
                alt=""
              />
              <img
                className="object-fit-cover content-img2 position-absolute z-1"
                style={{
                  width: "600px",
                  height: "500px",
                  marginLeft: "-100px",
                }}
                src="/image/img/img1-2.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
