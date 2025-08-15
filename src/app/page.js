'use client';

import Link from "next/link";
import MainNavbar from "./landing/Navbar/navbar-lp";
import Image from "next/image";
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './landing/landing.css';
import { Accordion } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import CardFeature from "./landing/CardFeature";
import CardSpeaker from "./landing/CardSpeaker";
import CardTestimoni from "./landing/CardTestimoni";
import AccordionGallerySection from "./landing/AccordionGallery";
import LogoCarousel from "./landing/LogoCarousel";
import EventSchedule from "./landing/Schedule";

export default function Home() {

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2026-01-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MainNavbar/>

      <div className="container-fluid" id="Home">
        <div className="row">

          {/* Hero */}
          <div className="col-12 px-0 py-4 py-md-0 hero" 
               style={{
                backgroundImage: 'url("/Assets/hero-section.png")',
                backgroundSize:'cover',
                minHeight:'425px'
              }}>
            <div className="hero-content text-center mt-md-5 my-5">
                <h1 className="title-hero fw-700 mb-4 mb-md-0">From Beyond to <span className="text-pink">Worldwide</span></h1>
                <p className="desc-hero" style={{fontSize: '32px'}}>Unlocking the Path to A Global Career from Wherever You Stand</p>
                
                {/* Countdown */}
                <div className="row justify-content-center mt-4">
                  <div className="col-3 me-3 bg-white py-3 text-center border rounded-4" style={{width:'100px'}}>
                    <h2 className="fw-700 mb-0">{String(timeLeft.hours).padStart(2, '0')}</h2>            
                    <p className="mb-0 text-grey">Hours</p>
                  </div>
                  <div className="col-3 me-3 bg-white py-3 text-center border rounded-4" style={{width:'100px'}}>
                    <h2 className="fw-700 mb-0">{String(timeLeft.minutes).padStart(2, '0')}</h2>
                    <p className="mb-0 text-grey">Minutes</p>
                  </div>
                  <div className="col-3 bg-white py-3 text-center border rounded-4" style={{width:'100px'}}>
                    <h2 className="fw-700 mb-0">{String(timeLeft.seconds).padStart(2, '0')}</h2>
                    <p className="mb-0 text-grey">Second</p>
                  </div>
                </div>

                <Link href="#register" className="btn btn-hero rounded-pill mt-3 py-3 fw-500" style={{background:'#FFB929', width:'180px'}}>
                  Daftar Sekarang
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Scorecard */}
        <div className="row scorecard" style={{margin:'50px 0 50px 0'}}>
          <div className="col-12 col-md-4 text-center" style={{borderRight: 'solid 1px #E0E0E0'}}>
            <h2 className="text-pink mb-1 fw-700">100.000+</h2>
            <p className="text-grey fs-md-lg fs-xl">Total Participants</p>
          </div>
          <div className="col-12 col-md-4 text-center" style={{borderRight: 'solid 1px #E0E0E0'}}>
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
          <div className="col-12 col-md-7">
            <h2 className="fw-700">Apa Saja Yang Bisa Kamu <span className="text-main fw-700">Temukan di Festival ini?</span></h2>
            <p className="text-grey fs-lg">
              Temukan berbagai kegiatan seru dan penuh manfaat dalam Product Design Festival yang dirangkum lengkap di file PDF kami. 
              Berikut beberapa highlight yang bisa kamu ikuti
            </p>
            <CardFeature />
          </div>
        </div>

        {/* Benefits */}
        <div id="Benefit" className="row justify-content-center" style={{marginBottom:'100px'}}>
          <div className="col-md-5 col-12" style={{borderRight: 'solid 1px #E0E0E0'}}>
            <h1 className="text-main fw-700" style={{fontSize:'32px'}}>Mengapa Anda Harus Hadir?</h1>
          </div>
          <div className="col-md-7 col-12">
            <p className="ms-md-5 mb-0 text-grey">Dengan berpartisipasi dalam acara ini, kamu akan mendapatkan pengalaman 
              belajar yang menarik tentang desain produk dan hubungan profesional yang membawa energi positif
            </p>
          </div>
          
          <div className="row mt-4">
            <div className="col-md-6 col-12 px-0">
              <Card className="card border-0 rounded-4 card-benefit" style={{
                  backgroundImage:'url(/Assets/bg-benefit-1.png)',
                  backgroundSize:'cover',
                  backgroundPosition:'bottom',
                  height:'488px'
                  }}>
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
                  <ul className="ps-4 pt-3" style={{listStyleType:'none'}}>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Sertifikat Digital</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Hadiah uang tunai hingga 1 juta rupiah</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Gratis Ebook UI/UX untuk Pemula dari UIUXINDO</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Gratis Handbook & Video Recording PDF 2026</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Diskon hingga 30% untuk semua e-book & video premium UIUXINDO</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Diskon Bootcamp Fullstack UI/UX Design dari UIUXINDO Academy</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#317EFF'}}></i>Akses gratis ke semua acara rutin dari UIUXINDO & Partners</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-12 mt-4 mt-md-0 px-0 px-md-3 py-0">
              <Card className="card border-0 rounded-4 card-benefit-2 mb-3" style={{
                  backgroundImage:'url(/Assets/bg-benefit-2.png)',
                  backgroundSize:'cover',
                  backgroundPosition:'bottom',
                  height:'336px'
                  }}>
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
                  <ul className="ps-4 pt-md-2" style={{listStyleType:'none'}}>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>Dapatkan strategi berkarir sebagai UI/UX Designer & Software Engineer profesional di perusahaan global</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>Ambil kesempatan untuk sesi mentoring bersama mentor profesional</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>Tingkatkan skill bahasa inggris & public speakingmu di dunia profesional</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>Seimbangkan kehidupanmu dengan sesi mental health agar lebih mindfull dalam berkarir</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FF4DA2'}}></i>Tingkatkan portofolio berkualitas & menarik di mata perusahaan global</li>
                  </ul>
                </Card.Body>
              </Card>
              <Card className="card border-0 rounded-4 card-benefit-3" style={{
                  backgroundImage:'url(/Assets/bg-benefit-3.png)',
                  backgroundSize:'cover',
                  backgroundPosition:'bottom',
                  height:'136px'
                  }}>
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
                  <ul className="ps-4 pt-md-2" style={{listStyleType:'none'}}>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#4DFFB9'}}></i>Full online via Zoom, kamu dapat akses dimana saja</li>
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
      </div>

      {/* CTA */}
      <div className="container-fluid CTA" style={{marginTop:'100px', marginBottom:'100px'}}>
        <div className="row">
          <div className="col-12 px-md-0 px-1 py-5 text-center cta-section" 
              style={{
              backgroundImage:'url(/Assets/cta-pdf-updated.png)',
              backgroundSize:'cover',
              minHeight:'340px'
            }}>
              <h1 className="fw-700" style={{fontSize:'32px'}}>UIUXINDO</h1>
              <h1 className="fw-700" style={{fontSize:'32px'}}>PRODUCT DESIGN CHALLENGE</h1>
              <Link href="#register" className="btn bg-white rounded-pill mt-3 py-3 fw-700 text-main" style={{background:'#FFB929' , width:'180px'}}>
                  Daftar Sekarang
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

            <div className="d-flex justify-content-center my-5">
              <div className="border p-2 rounded-pill">
                <Link href="#register" className="btn me-1 rounded-pill px-4 fw-500" style={{background:'#FFB929', paddingTop:'12px', paddingBottom:'12px'}}>
                    Presale 1
                </Link>
                <Link href="#register" className="btn me-1 rounded-pill px-4" style={{paddingTop:'12px', paddingBottom:'12px'}}>
                    Presale 2
                </Link>
                <Link href="#register" className="btn rounded-pill px-4" style={{paddingTop:'12px', paddingBottom:'12px'}}>
                    Normal
                </Link>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6 col-12 position-relative mb-3 mb-md-0 px-3">
                <Image className="img-fluid tag-price position-absolute z-2" 
                       src="/Assets/Blue Tag.png" 
                       width={130} 
                       height={130}
                       style={{left:'-1px', marginTop:'12px'}}
                       alt=""
                />
                <Card className="card-price px-4 py-4 mb-0 rounded-4" style={{height:'210px'}}>
                  <Card.Body className="d-flex flex-md-row flex-column align-items-center justify-content-center p-0">
                    <Card.Title className="individu-price h-100 border-end text-center pe-md-5 pb-3 pb-md-0">
                      <h1 className="text-main mt-md-5 mt-4" style={{fontSize:'32px'}}>109k</h1>
                      <p className="text-grey mb-0 fs-lg">1 Ticket for 1 Email</p>
                    </Card.Title>
                      <ul className="ps-0 ps-md-5 pe-4 pe-md-0" style={{listStyleType:'none'}}>
                        <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#22C55E'}}></i>1 Registered Email</li>
                        <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#22C55E'}}></i>Access live workshop</li>
                        <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#22C55E'}}></i>Access UPDC</li>
                      </ul>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6 col-12 position-relative px-3">
                <Image className="img-fluid tag-price position-absolute z-2" 
                       src="/Assets/Pink Tag.png" 
                       width={130} 
                       height={130}
                       style={{left:'-1px', marginTop:'12px'}} 
                       alt=""
                />
                 <Card className="card-price px-4 py-4 mb-0 rounded-4" style={{height:'210px'}}>
                  <Card.Body className="d-flex flex-md-row flex-column align-items-center justify-content-center p-0">
                    <Card.Title className="group-price h-100 border-end text-center pe-md-3 pb-3 pb-md-0">
                      <h1 className="text-main mt-md-5 mt-4" style={{fontSize:'32px'}}>Start From 103k/person</h1>
                      <p className="text-grey mb-0 fs-lg">Minimum purchase 5</p>
                    </Card.Title>
                    <ul className="ps-0 ps-md-3" style={{listStyleType:'none'}}>
                      <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#22C55E'}}></i>5-9 Registered Email</li>
                      <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#22C55E'}}></i>Can access all events</li>
                      <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#22C55E'}}></i>Get all video PDF 2024 & 2025</li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </div>
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
        <div className="row" style={{marginBottom:'100px'}}>
          <h1 className="text-center text-main mb-4 fw-700" style={{fontSize:'32px'}}>Frequently Asked Questions</h1>
          <div className="col-12">
            <Accordion defaultActiveKey="0">
              <div className="row">
                <div className="col-md-6 col-12">
                  <Accordion.Item className="mb-4 rounded-4 overflow-hidden" eventKey="0">
                    <Accordion.Header>Bagaimana Cara Mengikuti PDF 2026 ini?</Accordion.Header>
                    <Accordion.Body className="border-top">
                      Silahkan klik tombol “Join Now” dan lakukan pengisian formulir serta pembayaran melalui e-wallet/bank kesayanganmu~
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="border mb-4 rounded-4 overflow-hidden" eventKey="1">
                    <Accordion.Header>Apakah acara ini diselenggarakan secara online atau offline?</Accordion.Header>
                    <Accordion.Body className="border-top">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="border rounded-4 overflow-hidden mb-3" eventKey="2">
                    <Accordion.Header>Saya sudah bayar, langkah apa yang harus saya lakukan?</Accordion.Header>
                    <Accordion.Body className="border-top">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="col-md-6 col-12">
                  <Accordion.Item className="mb-4 rounded-4 overflow-hidden" eventKey="3">
                    <Accordion.Header>Jika tidak hadir, apakah mendapatkan rekaman video?</Accordion.Header>
                    <Accordion.Body className="border-top">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="border mb-4 rounded-4 overflow-hidden" eventKey="4">
                    <Accordion.Header>Apakah pengambilan sertifikat memerlukan syarat?</Accordion.Header>
                    <Accordion.Body className="border-top">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="border rounded-4 overflow-hidden" eventKey="5">
                    <Accordion.Header>Bagaimana prosedur jika ingin membeli harga paket?</Accordion.Header>
                    <Accordion.Body className="border-top">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
            </Accordion>
          </div>
        </div>

      {/* CTA Contact Us */}
        <div className="row">
          <div className="col-12 px-0 py-5 rounded-4 contact" 
              style={{
              backgroundImage:'url(/Assets/bg-contact-us.png)',
              backgroundSize:'cover',
            }}>
              <div className="d-flex flex-md-row flex-column justify-content-between align-items-center contact-cta" style={{paddingLeft:'100px', paddingRight:'100px'}}>
                <div className="p-4 rounded-4" style={{background:'#FFF1C6'}}>
                  <h1 className="fw-700" style={{fontSize:'32px'}}>Tidak menemukan <span className="text-pink">jawabannya?</span></h1>
                  <p className="">Jika kamu belum menemukan pertanyaan dan jawaban yang sesuai, jangan ragu untuk menghubungi kami melalui email atau WhatsApp. Kami akan berusaha membalas pesan Anda secepat mungkin.</p>
                  <div className="d-flex flex-md-row flex-column align-items-center">
                    <Link href="#register" className="btn rounded-pill mt-3 me-3 py-2 px-3 bg-white d-flex flex-row align-items-center" style={{width:'fit-content', fontSize:'18px'}}>
                      <Image className="me-2" 
                        src="/Assets/mail.png" 
                        width={40} 
                        height={40}
                        alt=""
                      />
                      hello@uiuxindo.id
                    </Link>
                    <Link href="#register" className="btn rounded-pill mt-3 me-3 py-2 px-3 bg-white d-flex flex-row align-items-center" style={{width:'fit-content', fontSize:'18px'}}>
                      <Image className="me-2" 
                        src="/Assets/phone.png" 
                        width={40} 
                        height={40}
                        alt=""
                      />
                      0823 1010 1118
                    </Link>
                  </div>
                </div>
                <Image className="mb-md-0 img-fluid" src="/Assets/contact-us.png" width={450} height={450} alt=""/>
              </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="mt-md-5" style={{borderTop:'solid 3px #E7E7E7'}}>
        <div className="row row-footer" style={{margin:'50px 100px 50px 100px'}}>
          <div className="col-md-3 col-12 mb-4 mb-md-0">
            <h5 className="mb-3">Explore UIUXINDO</h5>
            <p className="text-grey mb-1 mb-md-2">About Us</p>
            <p className="text-grey mb-1 mb-md-2">Contact</p>
            <p className="text-grey mb-1 mb-md-2">FAQ</p>
          </div>
          <div className="col-md-3 col-12 mb-4 mb-md-0">
            <h5 className="mb-3">UIUXINDO Info</h5>
            <p className="text-grey mb-1 mb-md-2">Event</p>
            <p className="text-grey mb-1 mb-md-2">Article</p>
          </div>
          <div className="col-md-3 col-12 mb-4 mb-md-0">
            <h5 className="mb-3">Services</h5>
            <p className="text-grey mb-1 mb-md-2">Academy</p>
          </div>
          <div className="col-md-3 col-12 mb-4 mb-md-0">
            <h5 className="mb-3">Explore UIUXINDO</h5>
            <p className="text-grey mb-1 mb-md-2">(+62) 823 1010 1118</p>
            <p className="text-grey mb-1 mb-md-2">hello@uiuxindo.id</p>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="container-fluid copyright bg-black d-flex flex-md-row flex-column justify-content-between align-items-center" style={{padding:'20px 100px 20px 100px'}}>
        <p className="text-white text-center mb-md-0 mb-4">Copyright Ⓒ 2020-2023 All Rights Reserved, PT Garis Piksel Teknologi</p>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <i className="bi bi-instagram text-white px-2 fs-xl"></i>
          <i className="bi bi-linkedin text-white px-2 fs-xl"></i>
          <i className="bi bi-youtube text-white px-2 fs-xl"></i>
          <i className="bi bi-facebook text-white px-2 fs-xl"></i>
          <i className="bi bi-whatsapp text-white px-2 fs-xl"></i>
        </div>
      </div>

    </>
  );
}
