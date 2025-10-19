"use client";

import Link from "next/link";
import MainNavbar from "./Navbar/navbar-lp";
import Image from "next/image";
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './landing/landing.css';

import { Card } from "react-bootstrap";
import CardFeature from "./landing/CardFeature";
import CardSpeaker from "./landing/CardSpeaker";
import CardTestimoni from "./landing/CardTestimoni";
import AccordionGallerySection from "./landing/AccordionGallery";
import LogoCarousel from "./landing/LogoCarousel";
import EventSchedule from "./landing/Schedule";
import AccordionFAQ from "./landing/AccordionFAQ";
import Footer from "./Footer/Footer";
import FloatingWhatsapp from "./landing/WidgetWhatsapp";
import PricingSection from "./landing/Pricing";
// import Schedule from "./landing/SchedulePDF";

export default function Home() {

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2026-05-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ months: 0, days: 0, hours: 0 });
        return;
      }

      const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      setTimeLeft({ months, days, hours });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

      <div className="container-fluid" id="Home" style={{paddingTop:'80px'}}>
        <div className="row">

          {/* Hero */}
          <div className="col-12 px-0 py-md-5 py-md-3 py-5 hero">
            <div className="hero-content text-center">
                <p className="title-hero fw-700 mb-4 mb-md-2" style={{fontSize:'40px'}}>
                  From <span className="text-pink curved-underline">Beyond</span> to <span className="text-blue curved-underline">Worldwide</span>
                </p>
                <p className="desc-hero fs-xl mt-md-3 mt-0">Unlocking the Path to A Global Career from Wherever You Stand</p>
                
                {/* Countdown */}
                <div className="row justify-content-center" style={{marginTop:'32px'}}>
                  <div className="col-3 me-3 bg-white pt-md-2 pt-3 text-center border rounded-4" style={{width:'88px', height:'84px'}}>
                    <h2 className="fw-700 mb-0">{String(timeLeft.months).padStart(2, '0')}</h2>            
                    <p className="mb-0 text-grey fs-500">Months</p>
                  </div>
                  <div className="col-3 me-3 bg-white pt-md-2 pt-3 text-center border rounded-4" style={{width:'88px', height:'84px'}}>
                    <h2 className="fw-700 mb-0">{String(timeLeft.days).padStart(2, '0')}</h2>
                    <p className="mb-0 text-grey fs-500">Days</p>
                  </div>
                  <div className="col-3 bg-white pt-md-2 pt-3 text-center border rounded-4" style={{width:'88px', height:'84px'}}>
                    <h2 className="fw-700 mb-0">{String(timeLeft.hours).padStart(2, '0')}</h2>
                    <p className="mb-0 text-grey fs-500">Hours</p>
                  </div>
                </div>

                <Link href="/payment" className="btn btn-hero rounded-pill py-3 fw-500" style={{background:'#FFB929', width:'180px', marginTop:'32px'}}>
                  Daftar Sekarang
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Scorecard */}
        <div className="row scorecard-container" style={{margin:'50px 0 50px 0'}}>
          <div className="col-12 col-md-4 text-center scorecard" style={{borderRight:'solid 1px #E0E0E0'}}>
            <h2 className="text-pink mb-1 fw-700">100.000+</h2>
            <p className="text-grey fs-md-lg fs-xl">Total Participants</p>
          </div>
          <div className="col-12 col-md-4 text-center scorecard" style={{borderRight:'solid 1px #E0E0E0'}}>
            <h2 className="text-pink mb-1 fw-700">200+</h2>
            <p className="text-grey fs-md-lg fs-xl">Total Speakers</p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <h2 className="text-pink mb-1 fw-700">50+</h2>
            <p className="text-grey fs-md-lg fs-xl">Partners</p>
          </div>
        </div>
        
        {/* Feature */}
        <div className="row feature" style={{marginBottom:'100px'}}>
          <div className="col-12 col-md-5">
            <Image className="mb-0 img-fluid" src="/Assets/Laptop 2.png" width={450} height={450} alt=""/>
          </div>
          <div className="col-12 col-md-7 text-md-start text-center">
            <h2 className="fw-700 text-md-start">Apa Saja Yang Bisa Kamu <span className="text-main fw-700">Temukan di Festival ini?</span></h2>
            <p className="text-grey text-md-start fs-lg">
              Temukan berbagai kegiatan seru dan penuh manfaat dalam Product Design Festival yang dirangkum lengkap di file PDF kami. 
              Berikut beberapa highlight yang bisa kamu ikuti:
            </p>
            <CardFeature />
          </div>
        </div>

        {/* Benefits */}
        <div id="Benefit" className="row justify-content-center" style={{marginBottom:'100px'}}>
          <div className="col-md-5 col-12 ps-3 border-end text-md-start text-center">
            <h1 className="text-main fw-700" style={{fontSize:'32px'}}>Mengapa Anda Harus Hadir?</h1>
          </div>
          <div className="col-md-7 col-12 text-md-start text-center">
            <p className="ms-md-5 mb-0 text-grey">Dengan berpartisipasi dalam acara ini, kamu akan mendapatkan pengalaman 
              belajar yang menarik tentang desain produk dan hubungan profesional yang membawa energi positif
            </p>
          </div>
          
          <div className="row mt-4">
            <div className="col-md-6 col-12 px-0">
              <Card className="card border-0 rounded-4 card-benefit">
                <Card.Body className="px-0">
                  <div className="mt-2 py-1 px-3 fw-700" 
                    style={{
                      backgroundColor:"#4DA2FF", 
                      width:'fit-content', 
                      borderTopRightRadius:'100px', 
                      borderBottomRightRadius:'100px'
                      }}>
                    Benefit Eksklusif Peserta
                  </div>
                  <ul className="px-md-4 px-3 pt-md-2 text-start" style={{listStyleType:'none'}}>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Sertifikat Digital</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Hadiah uang tunai hingga 1 Juta Rupiah</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Gratis Ebook UI/UX untuk pemula dari UIUXINDO</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Gratis Handbook & Video Recording PDF 2026</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Diskon hingga 30% untuk semua e-book & video premium UIUXINDO</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Diskon Bootcamp Fullstack UI/UX Design dari UIUXINDO Academy</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DA2FF'}}></i>
                      <li className="">Akses gratis ke semua acara rutin dari UIUXINDO & Partners</li>
                    </div>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-12 mt-4 mt-md-0 px-0 px-md-3 py-0">
              <Card className="card border-0 rounded-4 card-benefit-2 mb-3">
                <Card.Body className="px-0">
                  <div className="mt-2 py-1 px-3 fw-700" 
                    style={{
                      backgroundColor:"#FF4DA2", 
                      width:'fit-content',
                      borderTopRightRadius:'100px', 
                      borderBottomRightRadius:'100px'
                      }}>
                    Upgrade Skill & Karir
                  </div>
                  <ul className="px-md-4 px-3 pt-md-2 text-start" style={{listStyleType:'none'}}>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>
                      <li className="">Dapatkan strategi berkarir sebagai UI/UX Designer & Software Engineer profesional di perusahaan global</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>
                      <li className="">Ambil kesempatan untuk sesi mentoring bersama mentor profesional</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>
                      <li className="">Tingkatkan skill bahasa inggris & public speakingmu di dunia profesional</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>
                      <li className="">Seimbangkan kehidupanmu dengan sesi mental health agar lebih mindfull dalam berkarir</li>
                    </div>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>
                      <li className="">Tingkatkan portofolio berkualitas & menarik di mata perusahaan global</li>
                    </div>
                  </ul>
                </Card.Body>
              </Card>
              <Card className="card border-0 rounded-4 card-benefit-3">
                <Card.Body className="px-0">
                  <div className="mt-2 py-1 px-3 fw-700" 
                    style={{
                      backgroundColor:"#4DFFB9", 
                      width:'fit-content',
                      borderTopRightRadius:'100px', 
                      borderBottomRightRadius:'100px'
                      }}>
                    Fleksibel & Online
                  </div>
                  <ul className="px-md-4 px-3 pt-md-2 text-start" style={{listStyleType:'none'}}>
                    <div className="d-flex flex-row mt-3">
                      <i className="bi bi-check-circle-fill me-2" style={{color:'#4DFFB9'}}></i>
                      <li className="">Full online via Zoom, kamu dapat akses dimana saja</li>
                    </div>
                  </ul>
                </Card.Body>
              </Card>
            </div>

          </div>
        </div>

        {/* SPEAKER */}
        <div id="Speaker" className="row" style={{marginBottom:'100px'}}>
          <h1 className="text-center fw-700" style={{fontSize:'32px'}}>Temui <span className="text-pink">Pembicara</span> Kami</h1>
          <p className="text-center">Kenalan yuk dengan para speaker inspiratif yang siap berbagi insight, pengalaman, dan tips karier di dunia UI/UX dan teknologi!</p>
          <CardSpeaker />
        </div>

        {/* Timeline */}
        <h1 className="text-pink fw-700 text-center" style={{fontSize:'32px'}}>Event Schedule</h1>
        <EventSchedule />

        {/* Timeline */}
        {/* <h1 className="text-pink fw-700 text-center" style={{fontSize:'32px'}}>Event Schedule</h1> */}
        {/* <Schedule /> */}
      </div>

      {/* CTA */}
      <div className="container-fluid CTA" style={{marginTop:'100px', marginBottom:'100px'}}>
        <div className="row">
          <div className="col-12 px-md-0 px-1 text-center cta-section">
              <h1 className="fw-700" style={{fontSize:'40px'}}>UIUXINDO<br/>PRODUCT DESIGN CHALLENGE</h1>
              <Link href="/UPDC-2026" className="btn btn-cta bg-white rounded-pill mt-3 py-3 fw-700 text-main" style={{background:'#FFB929'}}>
                  Selengkapnya
              </Link>
          </div>
        </div>
      </div>

      <div className="container">

        {/* Pricing */}
        <div className="row" style={{marginBottom:'100px'}}>
          <div className="col-12 text-center">
            <h1 className="fw-700" style={{fontSize:'32px'}}>Kami punya <span className="fw-700 text-main">harga</span> yang sempurna untuk <span className="text-pink fw-700">kamu</span></h1>
            <p className="text-grey fs-xl">Nggak perlu burn budget buat upgrade skill & koneksi di festival ini</p>

            <PricingSection/>

          </div>
        </div>

        {/* Testimoni Card */}
        <div id="Testimoni" className="row justify-content-center" style={{marginBottom:'100px'}}>
          <h1 className="text-pink fw-700 text-center" style={{fontSize:'32px'}}>Apa Kata Mereka?</h1>
          <p className="text-grey text-center fs-xl">Lihat langsung cerita seru dari mereka yang udah ngerasain vibes-nya!</p>
          <CardTestimoni/>
        </div>
      </div>

      {/* Momen Seru */}
      <div className="container-fluid container-momen" style={{marginBottom:'100px'}}>
        <div className="row">
          <div className="col-12 px-0 py-5 text-center bg-momen" 
              style={{
              backgroundImage:'url(/Assets/bg-momen-seru.png)',
              backgroundSize:'cover',
            }}>
              <h1 className="fw-700" style={{fontSize:'32px'}}>Momen Seru di PDF Sebelumnya</h1>
              <p className="text-momen" style={{paddingLeft:'148px', paddingRight:"148px"}}>Lihat bagaimana keseruan, antusiasme, dan semangat kolaborasi para peserta di PDF sebelumnya. 
                Mulai dari sesi belajar, praktik desain, hingga tantangan seru bareng mentor dan peserta dari seluruh Indonesia. 
                Siap jadi bagian dari keseruan berikutnya?
              </p>
              <div className="mt-5">
                <AccordionGallerySection />
              </div>
          </div>
        </div>
      </div>

      {/* Partner */}
      <div id="Partner" className="container">
        <div className="row">
          <div className="col-12" style={{marginBottom:'100px'}}>
            <h1 className="text-center" style={{fontSize:'32px'}}><span className="text-main fw-700">Companies</span> and <span className="text-pink fw-700">Media Partners</span></h1>
            <LogoCarousel />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="FAQ" className="row" style={{marginBottom:'100px'}}>
          <h1 className="text-center text-main mb-4 fw-700" style={{fontSize:'32px'}}>Frequently Asked Questions</h1>
          <AccordionFAQ />
        </div>

      {/* CTA Contact Us */}
        <div className="row mb-md-5">
          <div className="col-12 px-0 pt-md-2 py-5 rounded-4 contact">
              <div className="d-flex flex-md-row flex-column justify-content-between align-items-center contact-cta">
                <div className="p-4 rounded-4 me-md-4" style={{background:'#FFF1C6'}}>
                  <h1 className="fw-700" style={{fontSize:'32px'}}>Tidak menemukan <span className="text-pink">jawabannya?</span></h1>
                  <p className="">Jika kamu belum menemukan pertanyaan dan jawaban yang sesuai, jangan ragu untuk menghubungi kami melalui email atau WhatsApp. Kami akan berusaha membalas pesan Anda secepat mungkin.</p>
                  <div className="d-flex flex-md-row flex-column align-items-center">
                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpcfBBMDFHFqlbDBnmPJPVXJcDRxJshgSLHhxnfMjLNdzjRbsWRCmzXdwWFhTTTlbQBB" 
                          className="btn rounded-pill mt-3 me-3 ps-2 pe-3 bg-white d-flex flex-row align-items-center" 
                          style={{width:'fit-content'}}>
                      <Image className="me-2" 
                        src="/Assets/Email.png" 
                        width={40} 
                        height={40}
                        alt=""
                      />
                      hello@uiuxindo.id
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=6282310101118&text=Halo,%20saya%20mau%20bertanya" 
                          className="btn rounded-pill mt-3 me-3 py-2 ps-2 pe-3 bg-white d-flex flex-row align-items-center"  
                          style={{width:'fit-content'}}>
                      <Image className="me-2" 
                        src="/Assets/Telephone.png" 
                        width={40} 
                        height={40}
                        alt=""
                      />
                      0823 1010 1118
                    </Link>
                  </div>
                </div>
                <Image className="mb-md-0 img-fluid" src="/Assets/Contact us.png" width={450} height={450} alt=""/>
              </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer/>

    </>
  );
}
