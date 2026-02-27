"use client";

import Link from "next/link";
import MainNavbar from "./Navbar/navbar-lp";
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app/revamp/revamp.css';

import BenefitCards from "./revamp/Component/BenefitCard";
import CarouselTag from "./revamp/Component/CarouselTag";
import SpeakerSection from "./revamp/Component/Speakers";
import Sylabus from "./revamp/Component/Sylabus";
import PDFSchedule from "./revamp/Component/PDFSchedule";
import PricingSection from "./revamp/Component/Price";
import OrnamentCarousel from "./revamp/Component/OrnamentCarousel";
import SliderTestimoni from "./revamp/Component/SliderTestimoni";
import MobileHighlightHangerSlider from "./revamp/Component/MobileCircularGallery";
import HighlightSection from "./revamp/Component/HighlightSlider";
import PartnerCarousel from "./revamp/Component/PartnerCarousel";
import FAQ from "./revamp/Component/FAQ";
import Footer from "./Footer/Footer";
import FloatingWhatsapp from "./landing/WidgetWhatsapp";

export default function Home() {

  const homeMenus = [
    { label: "Home", href: "#Home" },
    { label: "Benefit", href: "#Benefit" },
    { label: "Speaker", href: "#Speaker" },
    { label: "Schedule", href: "#Schedule" },
    { label: "Testimony", href: "#Testimoni" },
    { label: "Partner", href: "#Partner" },
  ];


  return (
    <>

      <FloatingWhatsapp/>

      <MainNavbar 
        menus={homeMenus}
        buttonText="Design Challenge"
        buttonHref="/UPDC-2026"
        buttonVariant="outline"
        icon="palette2"
      />

      <div className="container-fluid px-0" id="Home" style={{paddingTop:'76px', marginBottom:'50px'}}>
        <div className="row">

          {/* Hero */}
          <div id="Home" className="col-12 hero-revamp">
            <div className="hero-content text-center">
              <div className="hero-heading text-center">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="title-hero fw-700 mb-0 me-1">
                    From Beyond
                  </p>
                  <Image className="mb-md-0 ms-2 img-fluid image-beyond" src="/Assets/Revamp/Beyond.png" width={220} height={220} alt=""/>
                </div>
                <div className="title-second-row d-flex flex-row align-items-center justify-content-center" style={{marginTop:'-16px'}}>
                  <p className="title-hero fw-700 mb-4 mb-md-0 me-1">
                    to
                  </p>
                  <Image className="mb-md-0 img-fluid mx-2 image-worldwide" src="/Assets/Revamp/Worldwide.png" width={220} height={220} alt=""/>
                  <p className="title-hero fw-700 mb-4 mb-md-0 ms-1">
                    Worldwide
                  </p>
                </div>
                <p className="desc-hero fs-xl mb-0 text-grey">Unlocking the Path to A Global Career from Wherever You Stand</p>
              </div>
              <Link href="/payment" className="btn btn-main-hero rounded-pill py-3 px-4 fw-600">
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Tag */}
        <div className="row" style={{margin:'50px 0'}}>
          <div className="col-12 px-0">
            <CarouselTag/>
          </div>
        </div>

      </div>

      {/* Benefit */}
      <div id="Benefit" className="container px-0 section-benefit">
        <div className="row benefit-wrapper">
          <div className="col-12">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center heading-benefit-container">
              <div className="heading-benefit text-center text-lg-start w-75 mb-md-3">
                <p className="heading-benefit-1 fw-700 mb-2">Why You Should Join PDF&apos;26?</p>
                <p className="text-grey mb-0 subheading-benefit-1">Because PDF&rsquo;26 gives you the freedom to learn, connect, and grow with a global community</p>
              </div>
              <div className="heading-benefit-2 text-center text-lg-start py-3 py-md-0 mb-md-5 mb-lg-0">
                <p className="fw-600 mb-0" style={{color:'#454545'}}>100% Online via Zoom & Access from Anywhere</p>
              </div>
              <div className="heading-benefit-3 mt-3 mt-md-0 text-center">
                <Link href="/payment" className="btn btn-main rounded-pill py-3 px-4 fw-600">
                  Get Your Ticket
                </Link>
              </div>
            </div>
            <BenefitCards/>
          </div>
        </div>

        {/* CTA Count Proof */}
        <div className="row count-proof">
          <div className="col-12 CTA-CountProof text-center">
            <p className="countproof-heading text-white">Building a Stronger Design Community Together</p>
            <div className="d-flex flex-md-row flex-column align-items-center justify-content-center">
              <div className="text-white pe-md-4 mb-4 mb-md-0">
                <p className="mb-2 countproof-metrics-heading fw-600">2.000+</p>
                <p className="mb-0">People Who Have Learned, Connected, and Grown With Us</p>
              </div>
              <div className="text-white countproof-metrics-2">
                <p className="mb-2 countproof-metrics-heading fw-600">100+</p>
                <p className="mb-0">Amazing Speakers Who Will Share Their Knowledge</p>
              </div>
              <div className="text-white ps-md-4 mt-4 mt-md-0">
                <p className="mb-2 countproof-metrics-heading fw-600">100+</p>
                <p className="mb-0">Community & Industry Partners Backing the Vibes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker */}
      <div className="container container-speaker">
        <div id="Speaker" className="row section-speaker" style={{margin:'100px 0'}}>
          <div className="col-12 text-center px-0">
            <p className="fw-700 speaker-heading">Speaker Line Up ✨</p>
            <p style={{color:'#5d5d5d'}}>A lineup of top designers, engineers, and creators — ready to drop knowledge, share their journey, and help you level up</p>
            <SpeakerSection/>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div id="Schedule" className="container-fluid">
        <div className="row">
          <Image className="d-none d-md-block mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union.png" width={300} height={300} alt=""/>
          <Image className="d-block d-md-none mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-1-Mobile.png" width={300} height={300} alt=""/>
          <div className="col-12 px-md-0" style={{backgroundColor:'#FFFAEB'}}>
            <p className="heading-schedule fw-700 mb-2 text-center">Your 9-Day Product Design Journey</p>
            <p className="text-grey text-center">One meaningful session per day - fully online via Zoom</p>
            <PDFSchedule/>
          </div>
          <Image className="d-none d-md-block mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-2.png" width={300} height={300} alt=""/>
          <Image className="d-block d-md-none mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-2-Mobile.png" width={300} height={300} alt=""/>
        </div>
      </div>

      <div className="container">

        <div className="row sylabus">
          <p className="heading-schedule fw-700 mb-3 text-center">Silabus Workshop</p>
          <p className="text-grey text-center mb-0">Rangkaian materi terstruktur yang dirancang interaktif, aplikatif, dan relevan dengan kebutuhan industri</p>
          <Sylabus />
        </div>

        {/* CTA UPDC */}
        <div className="row CTA-UPDC">
          <div className="col-12 text-center mt-lg-5 mt-3 CTA-UPDC-container">
              <h1 className="fw-700 heading-CTA-UPDC">UIUXINDO<br/>PRODUCT DESIGN CHALLENGE</h1>
              <Link href="/UPDC-2026" className="btn btn-cta bg-white rounded-pill mt-lg-3 py-3 fw-700 text-main" style={{background:'#FFB929'}}>
                  Selengkapnya
              </Link>
          </div>
        </div>

        {/* Pricing */}
        <div className="row pricing">
          <div className="col-12">
            <PricingSection/>
          </div>
        </div>

      </div>

      <div className="container-fluid px-0">
        
        {/* Ornament Carousel */}
        <div className="row section-ornament-carousel">
          <div className="col-12">
            <OrnamentCarousel/>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 gallery">
        {/* Testimoni */}
        <div className="row" style={{margin:"100px 0"}}>
          <div className="col-12 px-0">
            <div id="Testimoni" className="container px-lg-0">
              <SliderTestimoni/>
            </div>
            <div className="container px-lg-0">
              <div className="row highlight d-none d-md-block" style={{marginTop:'150px'}}>
                <HighlightSection/>
              </div>
              <div className="row highlight d-block d-md-none" style={{marginTop:'150px'}}>
                <MobileHighlightHangerSlider/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-partner-carousel">
        {/* Partner Carousel */}
        <div id="Partner" className="row">
          <div className="col-12">
            <PartnerCarousel/>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container px-lg-0">
        <div className="row d-flex align-items-center faq-section" style={{margin:'100px 0'}}>
          <div className="col-lg-5 col-12 contact-us">
            <p className="text-white fw-700 mb-4 contact-heading">Not seeing the answer you&apos;re looking for?</p>
            <p className="text-white contact-subheading" style={{marginBottom:'32px'}}>
              If the answer you need isn&apos;t here, feel free to contact us through email or Whatsapp. We&apos;ll reply as quickly as we can
            </p>
            <div className="d-flex flex-md-row flex-column align-items-md-center">
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpcfBBMDFHFqlbDBnmPJPVXJcDRxJshgSLHhxnfMjLNdzjRbsWRCmzXdwWFhTTTlbQBB" 
                    className="btn rounded-pill px-3 py-2 bg-white d-flex align-items-center fw-700 me-md-2 mb-2 mb-md-0 btn-contact-us" 
                    style={{width:'fit-content'}}>
                <Image className="me-2" 
                      src="/Assets/Revamp/sms.png" 
                      width={20} 
                      height={20}
                      alt=""
                />
                hello@uiuxindo.id
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=6282310101118&text=Halo,%20saya%20mau%20bertanya" 
                    className="btn rounded-pill px-3 py-2 bg-white d-flex align-items-center fw-700 btn-contact-us" 
                    style={{width:'fit-content'}}>
                  <Image className="me-2" 
                      src="/Assets/Revamp/call.png" 
                      width={20} 
                      height={20}
                      alt=""
                />
                0823 1010 1118
                </Link>
            </div>
          </div>
          <div className="col-lg-7 col-12 accordion-faq">
            <div className="text-center" style={{marginBottom:'32px'}}>
              <p className="fw-700 faq-heading">FAQ Corner</p>
              <p className="text-grey mb-0">Curious? We got you. All the must-know things packed in one easy place</p>
            </div>
            <FAQ/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>

    </>
  );
}
