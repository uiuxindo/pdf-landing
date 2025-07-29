// import Image from "next/image";
// import styles from "./page.module.css";
import "./assets/scss/main.scss";

export default function Home() {
  return (
    <div>
      <header style={{ position: "fixed", width: "100%", top: "0", left: "0", zIndex: "2" }}>
        <div className="container py-4">
          <img src="https://www.asset.uiuxindo.id/src/assets/main/Logo-PDF-2028.png" alt="" style={{ height: "63px" }} />
        </div>
      </header>
      <div style={{ position: "fixed", width: "100%", top: "0", left: "0", height: "100%", backgroundImage: "url('https://www.asset.uiuxindo.id/src/assets/main/Accent-bg-pdf-2028.png')", backgroundSize: "cover", backgroundPosition: "center"  }} className="d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-6 text-center">
              <h2 className="mb-2" style={{ color: "#3587FC" }}>Jadilah yang pertama tahu!</h2>
              <p>Bergabunglah dengan waiting list ekslusif kami dan dapatkan akses early bird</p>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 text-md-end pb-3 pb-sm-3 pb-md-0">
                  <a href="" target="_blank">
                    <button type="button" className="btn btn-primary pill">
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://www.asset.uiuxindo.id/src/assets/main/mdi_user-group.svg" />
                        Join Waiting List
                      </div>
                    </button>
                  </a>
                </div>
                <div className="col-12 col-sm-12 col-md-6 text-md-start">
                  <a href="https://www.instagram.com/uiuxindo" target="_blank">
                    <button type="button" className="btn btn-outline-primary pill">
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://www.asset.uiuxindo.id/src/assets/main/ant-design_instagram-filled.svg" />
                        Follow Instagram
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
