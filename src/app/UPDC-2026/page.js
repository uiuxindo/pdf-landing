"use client";

import Link from "next/link";
import MainNavbar from "../Navbar/navbar-lp";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './UPDC.css';
import Timeline from "./Timeline";
import { Card } from "react-bootstrap";
import Footer from "../Footer/Footer";

export default function Home() {

  const menuPageMenus = [
    { label: "Home", href: "#Hero" },
    { label: "Timeline", href: "#Timeline" },
    { label: "Hadiah", href: "#Hadiah" },
    { label: "Keterangan", href: "#Keterangan" },
    // { label: "Hasil Karya", href: "#HasilKarya" },
  ];

  return (
    <>
      <MainNavbar
        menus={menuPageMenus}
        buttonText="Back"
        buttonHref="/"
        buttonVariant="fill"
        icon="arrow-left"
      />

      <div className="container-fluid" id="Home">
        <div id="Hero" className="row">

          {/* Hero */}
          <div className="col-12 px-0 py-md-3 py-5 hero-updc text-center">
            <h1 className="fw-700 mb-3">UI PRODUCT DESIGN <span className="text-pink curved-underline">CHALLENGE</span></h1>
            <p className="fs-xl mb-4">Empowering Local, Competing Global: Designing Digital Bridges for Business</p>
            <div className="d-flex flex-md-row flex-column align-items-center justify-content-center">
              <Image className="mb-md-0 mb-2 me-1 img-fluid" src="/Assets/UPDC/Users.png" width={180} height={180} alt=""/>
              <div className="ms-2 d-flex flex-column align-items-center align-items-md-start">
                <Image className="mb-0 img-fluid" src="/Assets/UPDC/Stars.png" width={152} height={152} alt=""/>
                <p className="mb-0">Diikuti oleh <span className="text-pink fw-700">100+</span> peserta</p>
              </div>
            </div>
           <Link href="https://uiuxindo.myr.id/event/pdf2026" className="btn btn-cta bg-white rounded-pill mt-md-4 mt-3 py-3 fw-700 text-main" style={{background:'#FFB929'}}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>

    {/* Timeline */}
    <div className="container">
      <div id="Timeline" className="row px-4" style={{marginTop:'50px', marginBottom:'100px'}}>
        <div className="col-12 px-0 text-center">
          <h1 className="text-main fw-700">Timeline</h1>
          <p className="text-grey">Dengan berpartisipasi dalam acara ini, kamu akan mendapatkan pengalaman belajar yang menarik tentang 
            desain produk dan hubungan profesional yang membawa energi positif
          </p>
          <Timeline />
        </div>
      </div>

      {/* Hadiah */}
      <div id="Hadiah" className="row" style={{marginBottom:'100px'}}>
        <div className="col-12 text-center">
          <h1 className="text-pink fw-700">Hadiah & Benefit</h1>
          <p className="text-grey">Ikuti tantangannya, menangkan hadiahnya, dan bawa pulang pengalaman serta insight berharga untuk perjalanan karirmu
          </p>
          <div className="row px-4 align-items-end" style={{marginTop:'44px'}}>
            <div className="col-md-4 col-12 text-start juara-2">
              <Image className="mb-0 me-1 img-fluid" src="/Assets/UPDC/Trophy.png" width={84} height={84} alt=""/>
              <h5 className="fw-700 mt-4">Juara 2</h5>
              <ul className="ps-0" style={{listStyleType:'none'}}>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Hadiah uang tunai senilai Rp100.000</li>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Sertifikat UPDC</li>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Gratis Private Mentoring selama 1 jam</li>
              </ul>
            </div>
            <div className="col-md-4 col-12 text-start juara-1">
              <Image className="mb-0 me-1 img-fluid" src="/Assets/UPDC/Trophy-gold.png" width={84} height={84} alt=""/>
              <h5 className="fw-700 mt-4">Juara 1</h5>
              <ul className="ps-0" style={{listStyleType:'none'}}>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Hadiah uang tunai senilai Rp250.000</li>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Sertifikat UPDC</li>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Gratis Private Mentoring selama 1 jam</li>
              </ul>
            </div>
            <div className="col-md-4 col-12 text-start juara-3">
              <Image className="mb-0 me-1 img-fluid" src="/Assets/UPDC/Trophy-bronze.png" width={84} height={84} alt=""/>
              <h5 className="fw-700 mt-4">Juara 3</h5>
              <ul className="ps-0" style={{listStyleType:'none'}}>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Hadiah uang tunai senilai Rp75.000</li>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Sertifikat UPDC</li>
                <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#000000'}}></i>Gratis Private Mentoring selama 1 jam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="Keterangan" className="row" style={{marginBottom:'50px', paddingLeft:'20px', paddingRight:'20px'}}>
        <div className="col-12">
          <div className="row">
            <div className="col-md-3 col-12 ps-3 border-end">
              <h1 className="text-main fw-700" style={{fontSize:'32px'}}>Apa itu UPDC?</h1>
            </div>
            <div className="col-md-9 col-12">
              <p className="ms-md-5 mb-0 text-grey">Disini kamu bisa belajar, berkompetisi, dan bertumbuh bersama komunitas desainer lainnya</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-3 px-4 py-md-5 py-4 d-flex flex-row align-item-center header-updc">
              <p>UPDC adalah UIUXINDO Product Design Challenge, ajang lomba UI/UX Design yang ditujukan untuk mahasiswa, fresh graduate & switch 
                career. UPDC ini hadir sebagai solusi untuk mahasiswa yang ingin mengasah kemampuan UI/UX & product development serta memberikan 
                pengalaman nyata dalam mengemukakan ide kepada stakeholder di dunia kerja
              </p>
            </div>
            <div className="col-12 col-md-9 text-center ketentuan">
              <h4 className="fw-700 mb-4">Ketentuan Umum</h4>
              <div className="row">
                <div className="col-md-6 col-12 mb-md-4 mb-3">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-md-row flex-column align-items-center p-3">
                      <h2 className="text-blue fw-700 mb-md-0 pb-2 pb-md-0 me-md-4 pe-4 d-flex align-items-center title-ketentuan">01</h2>
                      <p className="text-start mb-0 text-grey">Beli tiket PDF 2026 dan ikuti lomba UI/UX Design gratis, plus semua benefit tetap kamu dapatkan</p>
                    </Card.Body>
                  </Card>
                </div>
               <div className="col-md-6 col-12 mb-md-4 mb-3">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-md-row flex-column align-items-center p-3">
                      <h2 className="text-pink fw-700 mb-md-0 pb-2 pb-md-0 me-md-4 pe-4 d-flex align-items-center title-ketentuan">02</h2>
                      <p className="text-start mb-0 text-grey">Brief challenge akan tersedia di website pada Sabtu, 2 Mei 2026. Ikuti opening PDF 2026 untuk info lengkapnya</p>
                    </Card.Body>
                  </Card>
                </div>
               <div className="col-md-6 col-12 mb-4 mb-3 mb-md-0">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-md-row flex-column align-items-center p-3">
                      <h2 className="text-pink fw-700 mb-md-0 pb-2 pb-md-0 me-md-4 pe-4 d-flex align-items-center title-ketentuan">03</h2>
                      <p className="mb-0 text-grey">Lomba UI/UX ini dilakukan oleh individu</p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6 col-12">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-md-row flex-column align-items-center p-3">
                      <h2 className="text-blue fw-700 mb-md-0 pb-2 pb-md-0 me-md-4 pe-4 d-flex align-items-center title-ketentuan">04</h2>
                      <p className="text-start mb-0 text-grey">Brief challenge dapat digunakan untuk portofolio dengan memberikan kredit UIUXINDO sebagai penyelenggara</p>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Footer */}
    <Footer/>

    </>
  );
}
