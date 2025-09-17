// src/app/components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="row row-footer">
          <div className="col-md-3 col-12 mb-4 mb-md-0 d-flex flex-column">
            <h5 className="mb-4">Explore UIUXINDO</h5>
            <a href="https://www.uiuxindo.id/" className="text-grey mb-1 mb-md-3">About Us</a>
            <a href="https://www.uiuxindo.id/contact" className="text-grey mb-1 mb-md-3">Contact</a>
            <Link href="#FAQ" className="text-grey mb-1 mb-md-3">FAQ</Link>
          </div>

          <div className="col-md-3 col-12 mb-4 mb-md-0 d-flex flex-column">
            <h5 className="mb-4">UIUXINDO Info</h5>
            <a href="https://www.uiuxindo.id/event" className="text-grey mb-1 mb-md-3">Event</a>
            <a href="https://www.uiuxindo.id/article" className="text-grey mb-1 mb-md-3">Article</a>
          </div>

          <div className="col-md-3 col-12 mb-4 mb-md-0 d-flex flex-column">
            <h5 className="mb-4">Services</h5>
            <a href="https://www.academy.uiuxindo.id/" className="text-grey mb-1 mb-md-3">Academy</a>
          </div>

          <div className="col-md-3 col-12 mb-4 mb-md-0 d-flex flex-column">
            <h5 className="mb-4">Explore UIUXINDO</h5>
            <a href="https://api.whatsapp.com/send?phone=6282310101118" className="text-grey mb-1 mb-md-3">(+62) 823 1010 1118</a>
            <a href="https://www.uiuxindo.id/contact" className="text-grey mb-1 mb-md-3">hello@uiuxindo.id</a>
          </div>
        </div>
      </footer>

      <div className="container-fluid copyright bg-black d-flex flex-md-row flex-column justify-content-between align-items-center">
        <p className="text-white text-center mb-md-0 mb-4">
          Copyright Ⓒ 2025 All Rights Reserved, PT Garis Piksel Teknologi
        </p>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <a href="https://www.linkedin.com/company/uiuxindo/?originalSubdomain=id">
            <i className="bi bi-facebook text-white px-2 fs-xl"></i>
          </a>
          <a href="https://www.linkedin.com/company/uiuxindo/?originalSubdomain=id">
            <i className="bi bi-linkedin text-white px-2 fs-xl"></i>
          </a>
          <a href="https://www.instagram.com/uiuxindo/">
            <i className="bi bi-instagram text-white px-2 fs-xl"></i>
          </a>
          <a href="https://medium.com/@uiuxindo">
            <i className="bi bi-medium text-white px-2 fs-xl"></i>
          </a>
          <a href="https://www.youtube.com/@uiuxindo">
            <i className="bi bi-youtube text-white px-2 fs-xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
