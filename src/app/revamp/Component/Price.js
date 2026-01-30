"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Modal } from "react-bootstrap";

const commonData = {
  individu: {
    title: "Individu",
    desc:"All access, no drama. Just sign up and dive into every workshop, every challenge, and all the sessions!",
    link: "/payment",
    icon: "/Assets/Revamp/profile.png",
    textButton:"Beli Sekarang",
    benefit: [
      "1 Registered Email",
      "Access UI/UX Challenge",
      "Access Mindo-Talk Event",
    ],
  },
  group: {
    title: "Group",
    desc:"A great pick for teams joining as a group, perfect if you want the whole squad to level up together.",
    per: "/org",
    link: "https://api.whatsapp.com/send?phone=6282310101118&text=Halo,%20saya%20mau%20register%20sebagai%20group",
    icon: "/Assets/Revamp/people.png",
    textButton:"Kontak Kami",
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
    individu: { price: "Rp99.000", date: "1 Jan 2026 - 31 Mar 2026" },
    group: { price: "Rp95.000" },
  },
  normal: {
    individu: { price: "Rp12?.000", date: "1 Apr 2026 - 1 Mei 2026" },
    group: { price: "Rp11?.000" },
  },
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("presale2");
  const data = pricingData[activeTab];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between">
        <div className="text-lg-start text-center">
          <p className="fw-700 mb-2 heading-price">We&apos;ve got the perfect price for you</p>
          <p className="text-grey mb-0 subheading-price">No need to burn your wallet just to level up at this festival</p>
        </div>
        {/* Tab */}
        <div className="d-flex justify-content-center my-lg-5 mt-4">
          <div className="border p-2 rounded-pill">
            {["presale1", "presale2", "normal"].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`btn rounded-pill px-4 fw-500 ${
                  activeTab === tab ? "tab-price-active" : "tab-price"} ${i < 2 ? "me-0" : ""}`}
              >
                {tab === "presale1" ? "Presale 1" : tab === "presale2" ? "Presale 2" : "Normal"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row justify-content-center px-2 px-md-0" style={{columnGap:'60px'}}>
        {Object.keys(data).map((type, index) => {
          const plan = { ...commonData[type], ...data[type] };

          const isIndividu = plan.title === "Individu";

          const isHighlightIndividuPresale2 =
            activeTab === "presale2" && isIndividu;

          const showBestOptionBadge = 
            activeTab === "presale1" && isIndividu;

          const isButtonDisabled = activeTab !== "presale2";

          return (
            <div className="col-lg-5 card-price-container position-relative mb-3 mb-md-0 px-0" key={index}>
              <div
                className={`d-flex align-items-center justify-content-center ${
                  showBestOptionBadge ? "mt-5 mt-md-0 mb-md-0" : ""
                }`}
                style={{ minHeight: "40px" }}
              >

                {showBestOptionBadge && (
                  <div
                    className="text-white px-3 py-2 fw-600"
                    style={{
                      backgroundColor: "#3587FC",
                      width:'fit-content',
                      borderTopRightRadius:'12px',
                      borderTopLeftRadius:'12px'
                    }}
                  >
                    Pilihan Terbaik
                    <i className="bi bi-hand-thumbs-up ms-2"></i>
                  </div>
                )}              
              </div>
              <Card
                className={`${
                  isIndividu ? "card-price-individu" : "card-price-group"
                } px-lg-4 mb-0 rounded-4 shadow`}
                style={{
                  borderTop:'solid 4px #3587FC', 
                  borderRight:'0',
                  borderLeft:'0',
                  borderBottom:'0',
                  padding:'32px',
                }}
              >

                <Card.Body className="d-flex flex-column p-0">
                  <div className="w-100 border-bottom pb-3">
                    <div className="text-center d-flex flex-row align-items-center justify-content-between" style={{marginBottom:'32px'}}>
                        <div className="radius-8" style={{backgroundColor:'#EEF7FF', width:'fit-content', padding:'20px'}}>
                          <Image
                            src={plan.icon}
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="text-end">
                          <h2 className="fw-700" style={{fontSize: "32px", color:'#3587FC'}}>
                            {plan.price}
                          </h2>
                          <p className="text-grey mb-0 fs-lg">
                            {plan.date || plan.per}
                          </p>
                        </div>
                    </div>
                    <div className="fw-700 fs-2xl me-3">
                      {plan.title}
                    </div>
                    <div className="text-grey">
                      {plan.desc}
                    </div>
                  </div>

                  <div className="my-4 text-start">
                    <ul className="ps-0 pe-4 pe-md-0 mb-0" style={{ listStyleType: "none" }}>
                      {plan.benefit.map((item, i) => (
                        <li key={i} className="mt-2 d-flex">
                          <div className="px-1 rounded-circle me-2" style={{width:'fit-content', backgroundColor:'#F0FDF5'}}>
                            <i className="bi bi-check" style={{ color: "#22C55E" }}></i>
                          </div>
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
                      {plan.textButton}
                      <i className="bi bi-chevron-right ms-2"></i>
                    </button>
                  ) : (
                    <Link href={plan.link} className="btn btn-price rounded-pill w-100 fw-600">
                      {plan.textButton}
                      <i className="bi bi-chevron-right ms-2"></i>
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
