"use client";

import React, { useEffect } from 'react';
import Link from "next/link";

import "./payment.scss"
import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Payment() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://mayarembed.r2.mayar.id/mayarEmbed.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <>
      <div className="payment-header">
        <div className="container">
          <Link href="/">
            <Button type="button" className="btn btn-back d-flex align-items-center px-4 py-2 rounded-pill fs-md fw-600">
              <i className="bi bi-arrow-left me-2 fs-lg"></i>
              Back
            </Button>
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <iframe allowfullscreen="" allowpaymentrequest="allowpaymentrequest" scrolling="no" frameborder="0" width="100%" height="100%" src="https://uiuxindo.myr.id/pl/pdf2026" ></iframe>
      </div>
    </>
  )
}