"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Modal } from "react-bootstrap";

const commonData = {
  individu: {
    title: "Individu",
    link: "/payment",
    benefit: [
      "1 Registered Email",
      "Access UI/UX Challenge",
      "Access Mindo-Talk Event",
    ],
  },
  group: {
    title: "Group",
    per: "/org",
    link: "https://api.whatsapp.com/send?phone=6282310101118&text=Halo,%20saya%20mau%20register%20sebagai%20group",
    benefit: [
      "3-5 Registered Email",
      "Access UI/UX Challenge",
      "Access Mindo-Talk Event",
    ],
  },
};

const pricingData = {
  presale1: {
    individu: { price: "Rp69.000", date: "1 Sept 2025 - 31 Des 2025" },
    group: { price: "Rp65.000" },
  },
  presale2: {
    individu: { price: "Rp9?.000", date: "1 Jan 2026 - 31 Mar 2026" },
    group: { price: "Rp9?.000" },
  },
  normal: {
    individu: { price: "Rp12?.000", date: "1 Apr 2026 - 1 Mei 2026" },
    group: { price: "Rp11?.000" },
  },
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("presale1");
  const data = pricingData[activeTab];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      {/* Tab */}
      <div className="d-flex justify-content-center my-5">
        <div className="border p-2 rounded-pill">
          {["presale1", "presale2", "normal"].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`btn rounded-pill px-4 fw-500 ${
                activeTab === tab ? "tab-price-active" : "tab-price"} ${i < 2 ? "me-1" : ""}`}
            >
              {tab === "presale1" ? "Presale 1" : tab === "presale2" ? "Presale 2" : "Normal"}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row mt-5 justify-content-center">
        {Object.keys(data).map((type, index) => {
          const plan = { ...commonData[type], ...data[type] };
          const isBestOption =
            activeTab === "presale1" && plan.title === "Individu";

          const isButtonDisabled =
            activeTab === "presale2" || activeTab === "normal";

          return (
            <div className="col-md-6 col-12 position-relative mb-3 mb-md-0 px-3" key={index}>
              <Card
                className={`${
                  plan.title === "Individu" ? "card-price-individu" : "card-price-group"} px-md-4 px-3 py-4 mb-0 rounded-4`}
                style={isBestOption ? { border: "2px solid #FFB800" } : {}}
              >
                <Card.Body className="d-flex flex-column p-0">
                  <div className="w-100 d-flex justify-content-center align-items-center border-bottom pb-4">
                    <div className="text-main fw-700 fs-2xl me-3">
                      {plan.title}
                    </div>
                    {isBestOption && (
                      <div className="d-flex align-items-center bg-warning text-dark rounded-pill px-3 py-2 fw-600" 
                           style={{ fontSize: "14px" }}
                      >
                        <i className="bi bi-hand-thumbs-up me-2"></i>
                        Opsi Terbaik
                      </div>
                    )}
                  </div>

                  <div className="d-flex flex-md-row flex-column align-items-center justify-content-center my-4 card-content">
                    <div className="pb-3 pb-md-0 price text-center pe-md-5">
                      <h2 className="text-main fw-700" style={{ fontSize: "32px" }}>
                        {plan.price}
                      </h2>
                      <p className="text-grey mb-0 fs-lg">
                        {plan.date || plan.per}
                      </p>
                    </div>
                    <ul className="ps-0 ps-md-5 pe-4 pe-md-0 mb-0 text-start" style={{ listStyleType: "none" }}>
                      {plan.benefit.map((item, i) => (
                        <li key={i} className="mt-2">
                          <i className="bi bi-check-circle-fill me-2" style={{ color: "#22C55E" }}></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* {isBestOption && (
                    <div className="mb-4 w-100 p-3 overflow-hidden" style={{ border: "dashed 1px #dee2e6", borderRadius: "12px", background: "linear-gradient(rgb(229 241 255), transparent, transparent)" }}>
                      <p className="mb-2" style={{ fontSize: "18px", fontWeight: "600" }}>Buy 1 get 1 Ebook The Designers Compass 🔥</p>
                      <Button variant="link text-decoration-none py-0" onClick={handleShow}>
                        <div className="d-flex align-items-center" style={{ fontWeight: "500" }}>
                          Lihat Promo <i className="bi bi-chevron-right" style={{ fontSize: "12px" }}></i>
                        </div>
                      </Button>
                    </div>
                  )} */}

                  {isButtonDisabled ? (
                    <button className="btn btn-price rounded-pill w-100 fw-600"
                      disabled
                      style={{
                        opacity: 0.6,
                        cursor: "not-allowed",
                        backgroundColor: "#C7C7C7",
                        color: "#666",
                        border: "none",
                      }}
                    >
                      Beli Tiket
                    </button>
                  ) : (
                    <Link href={plan.link} className="btn btn-price rounded-pill w-100 fw-600">
                      Beli Tiket
                    </Link>
                  )}
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>End Year Promo 🔥</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{ position: "relative", width: "100%", height: "700px" }}>
                    <Image className="mb-0 img-fluid" src="/Assets/END-YEAR-PROMO.png" fill alt="" style={{ objectFit: "contain" }}/>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PricingSection;
