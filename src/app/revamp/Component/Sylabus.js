"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { syllabusData } from "@/app/Data_JSON/sylabus_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sylabus() {
  const [activeTab, setActiveTab] = useState("uiux");
  const sliderRef = useRef(null);

  const tabSliderSetting = {
    arrows: false,
    infinite: false,
    slidesToShow: 1.8,
    swipeToSlide: true,
    variableWidth: true
  };

  const data = syllabusData[activeTab];

  return (
    <section className="syllabus-section container">

      {/* ===== TAB DESKTOP ===== */}
      <div className="tab-wrapper d-none d-md-flex justify-content-center">
        <div className="tab-container border">
          {Object.entries(syllabusData).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`tab-btn ${activeTab === key ? "active" : ""} fs-md`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== TAB MOBILE (SLIDER FIXED) ===== */}
      <div className="tab-scroll-mobile d-md-none border rounded-pill d-flex p-2">
        {Object.entries(syllabusData).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`tab-btn ${
              activeTab === key ? "active" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      {data.items && (
        <div className="row align-items-start mt-4">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 px-3">
            <h4 className="fw-bold mb-4 silabus-pembelajaran">{data.title}</h4>

            {data.items.map((item, i) => (
              <div key={i} className="syllabus-item">
                {/* <div className="check-icon">✓</div>
                <div>
                  <h6 className="fw-semibold">{item.title}</h6>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div> */}
                <ul className="list-unstyled mb-0 text-pink">
                  <li className="d-flex flex-row justify-content-center">
										<i className={`bi bi-check-circle-fill me-2`}></i>
										<div>
											<h6 className="text-black fw-600">{item.title}</h6>
											<p className="text-muted mb-0">{item.desc}</p>
										</div>
									</li>
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="syllabus-image-card">
              <Image
                src={data.image}
                alt=""
                fill
                className="object-fit-cover"
              />

              <div className="duration-box">
                ⏱ {data.duration}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}