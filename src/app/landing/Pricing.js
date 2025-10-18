"use client";
import { useState } from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import "./landing.css";

const cardDetail = {
  individu: {
    title: "Individu",
    link: "https://uiuxindo.myr.id/pl/pdf2026",
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
    individu: { price: "Rp99.000", date: "1 Jan 2026 - 31 Mar 2026" },
    group: { price: "Rp90.000" },
  },
  normal: {
    individu: { price: "Rp129.000", date: "1 Apr 2026 - 1 Mei 2026" },
    group: { price: "Rp115.000" },
  },
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("presale1");
  const data = pricingData[activeTab];

  return (
    <>
      {/* Tab */}
      <div className="d-flex justify-content-center my-5">
        <div className="border p-2 rounded-pill">
          {["presale1", "presale2", "normal"].map((tab, i) => {
            const isDisabled = tab !== "presale1"; // hanya presale1 aktif
            return (
              <button
                key={i}
                onClick={() => !isDisabled && setActiveTab(tab)}
                disabled={isDisabled}
                className={`btn rounded-pill px-4 fw-500 ${
                  activeTab === tab ? "tab-price-active" : "tab-price"
                } ${i < 2 ? "me-1" : ""}`}
                style={
                  isDisabled
                    ? {
                        color: "#666",
                        border: "none",
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                {tab === "presale1"
                  ? "Presale 1"
                  : tab === "presale2"
                  ? "Presale 2"
                  : "Normal"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row mt-5 justify-content-center">
        {Object.keys(data).map((type, index) => {
          const dataPrice = { ...cardDetail[type], ...data[type] };
          const isBestOption =
            activeTab === "presale1" && dataPrice.title === "Individu";

          return (
            <div
              className="col-md-6 col-12 position-relative mb-3 mb-md-0 px-3"
              key={index}
            >
              <Card
                className={`${
                  dataPrice.title === "Individu"
                    ? "card-price-individu"
                    : "card-price-group"
                } h-100 px-md-4 px-3 py-4 mb-0 rounded-4`}
                style={
                  isBestOption ? { border: "2px solid #FFB800" } : {}
                }
              >
                <Card.Body className="h-100 d-flex flex-column align-items-center justify-content-center p-0">
                  <div className="w-100 d-flex justify-content-center align-items-center border-bottom pb-4">
                    <div className="text-main fw-700 fs-2xl me-3">
                      {dataPrice.title}
                    </div>
                    {isBestOption && (
                      <div className="d-flex align-items-center bg-warning text-dark rounded-pill px-3 py-2">
                        <i className="bi bi-hand-thumbs-up me-2"></i>
                        Opsi Terbaik
                      </div>
                    )}
                  </div>

                  <div className="d-flex flex-md-row flex-column align-items-center justify-content-center my-md-4 card-content">
                    <div className="pb-md-4 pb-3 pb-md-0 h-100 text-center pe-md-5 price">
                      <h2
                        className="text-main mt-md-5 mt-4 fw-700"
                        style={{ fontSize: "32px" }}
                      >
                        {dataPrice.price}
                      </h2>
                      <p className="text-grey mb-0 fs-lg">
                        {dataPrice.date || dataPrice.per}
                      </p>
                    </div>

                    <ul
                      className="ps-0 ps-md-5 pe-4 pe-md-0 mb-md-0 mb-3 text-start"
                      style={{ listStyleType: "none" }}
                    >
                      {dataPrice.benefit.map((item, i) => (
                        <li key={i} className="mt-2">
                          <i
                            className="bi bi-check-circle-fill me-2"
                            style={{ color: "#22C55E" }}
                          ></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Link
                    href={dataPrice.link}
                    className="btn btn-price rounded-pill w-100 fw-600"
                  >
                    Beli Tiket
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PricingSection;
