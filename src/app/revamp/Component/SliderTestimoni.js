"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import testimony_data from "../../Data_JSON/testimony_data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAX_LENGTH = 270;

const truncateText = (text, maxLength = MAX_LENGTH) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const CardTestimoni = () => {
  const desktopSliderRef = useRef(null);
  const tabletSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  const [selectedTestimony, setSelectedTestimony] = useState(null);

  const desktopSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  const tabletSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  const mobileSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
		variableWidth:true,
    appendDots: (dots) => (
      <div>
        <ul className="ps-0 pe-4 mb-0 mt-4 d-flex justify-content-center gap-2">
          {dots}
        </ul>
      </div>
    ),
  };

  const renderCards = () =>
    testimony_data.map((item) => {
      const isLongText = item.message.length > MAX_LENGTH;

      return (
        <div key={item.id}>
          <Card className="radius-16 h-100 card-testimonial">
            <Card.Body className="p-4 d-flex flex-column">
              <Image
                src="/Assets/Testimoni/quote-down.png"
                width={40}
                height={40}
                alt="Quote"
                className="mb-3"
              />

              <Card.Text className="mb-2">
                {truncateText(item.message)}
              </Card.Text>

              {isLongText && (
                <button
                  className="btn btn-link p-0 fw-600 mb-3 text-start"
                  onClick={() => setSelectedTestimony(item)}
                >
                  Read More
                </button>
              )}

              <div className="mt-auto d-flex align-items-center border-top pt-4">
                <Image
                  src={item.photo_url}
                  width={44}
                  height={44}
                  alt={item.name}
                />
                <div className="ms-3">
                  <p className="mb-0 fw-600">{item.name}</p>
                  <p className="text-grey mb-0">{item.bio}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });

  return (
    <>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="fw-700 mb-1 heading-testimoni">
            The Tea From The Last Festival
          </p>
          <p className="mb-0 text-grey">
            Here’s the real spill from people who’ve actually joined — the vibes,
            the insights, and the moments that made them say it was totally worth it
          </p>
        </div>

        <div className="d-none d-lg-flex gap-3">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              desktopSliderRef.current?.slickPrev();
            }}
            className="btn bg-white border rounded-circle"
          >
            <i className="bi bi-arrow-left fs-2xl"></i>
          </Link>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              desktopSliderRef.current?.slickNext();
            }}
            className="btn bg-white border rounded-circle"
          >
            <i className="bi bi-arrow-right fs-2xl"></i>
          </Link>
        </div>
      </div>

      <div className="d-none d-lg-block">
        <Slider ref={desktopSliderRef} {...desktopSettings}>
          {renderCards()}
        </Slider>
      </div>

      <div className="d-none d-md-block d-lg-none">
        <Slider ref={tabletSliderRef} {...tabletSettings}>
          {renderCards()}
        </Slider>
      </div>

      <div className="d-md-none">
        <Slider ref={mobileSliderRef} {...mobileSettings}>
          {renderCards()}
        </Slider>
      </div>

      {selectedTestimony && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content radius-16">
                <div className="modal-body py-4 px-4">
                  <p className="mb-4">{selectedTestimony.message}</p>

                  <div className="d-flex align-items-center border-top pt-3">
                    <Image
                      src={selectedTestimony.photo_url}
                      width={44}
                      height={44}
                      alt={selectedTestimony.name}
                    />
                    <div className="ms-3">
                      <p className="mb-0 fw-600">{selectedTestimony.name}</p>
                      <p className="text-grey mb-0">{selectedTestimony.bio}</p>
                    </div>
                  </div>
                </div>

                <button
                  className="btn-close position-absolute top-0 end-0 m-3"
                  onClick={() => setSelectedTestimony(null)}
                />
              </div>
            </div>
          </div>

          <div
            className="modal-backdrop fade show"
            onClick={() => setSelectedTestimony(null)}
          />
        </>
      )}
    </>
  );
};

export default CardTestimoni;
