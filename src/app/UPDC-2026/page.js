"use client";

import dynamic from 'next/dynamic';
import Link from "next/link";
import MainNavbar from "../../app/Navbar/navbar-lp";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './updc-revamp.css';
import Timeline from "../../app/UPDC-2026-Old/Timeline";
import { Card, CardBody } from "react-bootstrap";
import Footer from "../../app/Footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const menuPageMenus = [
    { label: "Home", href: "#Hero" },
    { label: "Keterangan", href: "#Keterangan" },
    { label: "Timeline", href: "#Timeline" },
    { label: "Hadiah", href: "#Hadiah" },
    { label: "Juri", href: "#Juri" },
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

      <div className="container-fluid" id="Home" style={{paddingTop:'76px'}}>
        <div id="Hero" className="row">

          {/* Hero */}
          <div className="col-12 hero-updc text-center">
            <div className='updc-heading-container text-center mx-auto'>
              <h1 className="fw-700 mb-3 text-white updc-heading">UI PRODUCT DESIGN</h1>
              <div className="bg-white py-2 text-center mb-4 heading-2">
                <p className="text-pink fw-700 mb-0 updc-heading2">C H A L L E N G E</p>
              </div>
              <p className='text-center updc-subheading'>Empowering Local, Competing Global: Designing Digital Bridges for Business</p>
            </div>
           <Link href="/payment" className="btn btn-updc bg-white rounded-pill mt-md-4 px-4 py-md-3 fw-700 " style={{background:'#FFB929'}}>
              Register Now
            </Link>
          </div>
        </div>
      </div>

    <div className="container">

      {/* KETERANGAN */}
      <div id='Keterangan' className='row section-keterangan text-center'>
        <p className='fw-700 mb-3 keterangan-heading'>What is UPDC?</p>
        <p className='text-grey keterangan'>UPDC (UIUXINDO Product Design Challenge) is a UI/UX design competition by UIUXINDO, created for students, fresh graduates, and career switchers. 
          It&apos;s a space to sharpen your UI/UX and product design skills through real-world case studies, while gaining hands-on experience in building solutions and presenting ideas to stakeholders.
        </p>
        <Card className='card-general radius-16'>
          <CardBody className='p-0'>
            <div className='card-heading-container p-3'>
              <p className='fw-600 mb-0 card-heading'>General Terms</p>
              <p className='mb-0'>Key things you should know before joining the UI Product Design Challenge</p>
            </div>
            <div className='d-flex flex-lg-row flex-column align-items-lg-center justify-content-md-center'>
              <div className='me-md-4 pt-3 pb-md-4 pb-3 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  01
                  </div>
                <p className='text-start mb-0'>
                  Beli tiket PDF 2026 dan ikuti lomba UI/UX Design gratis, plus semua benefit tetap kamu dapatkan
                </p>
              </div>
              <div className='me-md-4 pt-3 pb-4 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  02
                  </div>
                <p className='text-start mb-0'>
                  Brief challenge akan tersedia di website pada Sabtu, 2 Mei 2026. Ikuti opening PDF 2026 untuk info lengkapnya
                </p>
              </div>
              <div className='me-md-4 pt-3 pb-4 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  03
                  </div>
                <p className='text-start mb-0'>
                  Lomba ini dilakukan oleh individu
                </p>
              </div>
              <div className='pt-3 pb-4 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  04
                </div>
                <p className='text-start mb-0'>
                  Brief challenge dapat digunakan untuk portofolio dengan memberikan kredit UIUXINDO sebagai penyelenggara
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>

    <div className='container-fluid px-0'>

      {/* Timeline */}
      <div id='Timeline' className='row'>
        <Image className="d-none d-md-block mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union.png" width={1585} height={300} alt=""/>
        <Image className="d-block d-md-none mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-1-Mobile.png" width={300} height={300} alt=""/>
        <div id="Timeline" className="row section-timeline px-0">
          <div className="col-12 px-0 text-center">
            <h1 className="fw-700 timeline-heading">How the Challenge Works</h1>
            <p className="text-grey">Simple steps to join and complete the challenge</p>
            <Timeline />
          </div>
        </div>
        <Image className="d-none d-md-block mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-2.png" width={1585} height={300} alt=""/>
        <Image className="d-block d-md-none mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-2-Mobile.png" width={300} height={300} alt=""/>
      </div>

      {/* REWARD */}
      <div id='Hadiah' className='row section-reward text-center'>
        <div className='col-12 px-0'>
          <div className='podium position-relative'>
            <Image className="d-lg-none img-fluid position-absolute yellow-vector" src="/Assets/Revamp/UPDC-Revamp/yellow-vector.png" width={55} height={32} alt=""/>
            <Image className="d-lg-none img-fluid position-absolute blue-vector" src="/Assets/Revamp/UPDC-Revamp/blue-vector.png" width={32} height={32} alt=""/>
            <Image className="d-lg-none img-fluid position-absolute red-star" src="/Assets/Revamp/UPDC-Revamp/red-star.png" width={30} height={16} alt=""/>
            <Image className="d-lg-none img-fluid position-absolute yellow-star" src="/Assets/Revamp/UPDC-Revamp/yellow-star.png" width={32} height={32} alt=""/>
            <p className='fw-700 mb-3 reward-heading'>Rewards & Benefits</p>
            <p className='text-grey mb-0 reward-subheading'>Put in the effort, learn from the process, and get rewards that make it all worth it</p>
            <div className="row align-items-end podium-reward" style={{marginTop:'44px'}}>
              <div className="col-md-4 col-12 text-start juara-2-container px-0">
                <p className='position mb-0 text-center'>02</p>
                <div className='juara-2 p-4 px-3 py-4'>
                  <div className='bg-white text-center py-3 mb-4'><h5 className="fw-700 mb-0 position-title">Strong Performer</h5></div>
                  <p className='text-center'>Hampir jadi yang teratas, tapi performa kamu tetap luar biasa dan layak diapresiasi</p>
                  <ul className="ps-0" style={{listStyleType:'none'}}>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FFB929'}}></i>Uang tunai Rp100.000</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FFB929'}}></i>Sertifikat UPDC</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FFB929'}}></i>Gratis Private Mentoring (1 jam)</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-12 text-start px-0 juara-1-container">
                <div className='text-center trophy-container' 
                    style={{
                      background:'linear-gradient(to top, rgba(255,185,41,0.3), rgba(255,255,255,0))',
                      marginTop:'60px'
                    }}
                  >
                  <Image className="mb-0 me-1 img-fluid" src="/Assets/Revamp/UPDC-Revamp/Trophy.png" width={160} height={84} alt=""/>
                </div>
                <div className='juara-1 p-lg-4 px-3 py-4'>
                  <div className='bg-white text-center py-3 mb-4'><h5 className="fw-700 mb-0 position-title">The Ultimate Winner</h5></div>
                  <p className='text-center'>Bukti kalau effort kamu nggak main-main. Kamu jadi yang paling standout dan pantas dapet reward terbaik</p>
                  <ul className="ps-0" style={{listStyleType:'none'}}>
                    <li className="mt-3">
                      <i className="bi bi-check me-2 bg-white rounded-circle" style={{color:'#FFB929', padding:'0 2px'}}></i>
                      Uang Tunai Rp250.000
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check me-2 bg-white rounded-circle" style={{color:'#FFB929', padding:'0 2px'}}></i>
                      Sertifikat UPDC
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check me-2 bg-white rounded-circle" style={{color:'#FFB929', padding:'0 2px'}}></i>
                      Gratis Private Mentoring (1 jam)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-12 text-start px-0 juara-3-container">
                <p className='position mb-0 text-center'>03</p>
                <div className='juara-3 p-4 px-3 py-4'>
                  <div className='bg-white text-center py-3 mb-4'><h5 className="fw-700 mb-0 position-title">Rising Star</h5></div>
                  <p className='text-center'>Langkah awal yang solid buat perjalanan kamu selanjutnya. Keep going, you&apos;re on the right track!</p>
                  <ul className="ps-0" style={{listStyleType:'none'}}>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FFB929'}}></i>Uang Tunai Rp75.000</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FFB929'}}></i>Sertifikat UPDC</li>
                    <li className="mt-3"><i className="bi bi-check-circle-fill me-2" style={{color:'#FFB929'}}></i>Gratis Private Mentoring (1 jam)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className="n" src="/Assets/Revamp/UPDC-Revamp/Tag-blue.png" width={1585} height={45} alt=""/>
    </div>
    
    {/* Juri */}
    <div className='container'>
      <div id='Juri' className='row section-juri'>
        <div className='col-12 text-center'>
          <p className='fw-700 mb-3 heading-juri'>Meet the Judges</p>
          <p className='text-grey'>Your work will be reviewed by experienced UI/UX practitioners who are ready to share valuable insights and feedback</p>
          <div className='row juri'>
            
            <div className='col-md-4 col-12 position-relative text-center juri-container'>
              <div className='juri-image-wrapper'>
                <Image className="mb-md-4 img-fluid juri-image me-md-0 me-3 mb-4 mb-md-0" src="/Assets/UPDC/Juri-1.png" 
                      width={302} 
                      height={302} 
                      alt=""
                      style={{filter:'grayscale(100%)'}}
                />
                <Link href="https://www.linkedin.com/in/denny-wirawan-b5a576183/" className='linkedin-container position-absolute rounded-circle'>
                  <div className='d-flex align-items-center justify-content-center linkedin-juri'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='linkedin-icon fs-2xl' style={{color: "white"}} />
                  </div>     
                </Link>
              </div>
              <p className='fw-700 mb-2 nama-juri'>Denny Wirawan</p>
              <p className='text-grey mb-0 job-juri'>Sr. Product Designer at Blibli</p>
            </div>

            <div className='col-md-4 col-12 position-relative text-center juri-container'>
              <div className='juri-image-wrapper'>
                <Image className="mb-md-4 img-fluid juri-image me-md-0 me-3 mb-4 mb-md-0" src="/Assets/UPDC/Juri-2.png" 
                      width={302} 
                      height={302} 
                      alt=""
                      style={{filter:'grayscale(100%)'}}
                />
                <Link href="https://www.linkedin.com/in/faris-rakha/" className='linkedin-container position-absolute rounded-circle'>
                  <div className='d-flex align-items-center justify-content-center linkedin-juri'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='linkedin-icon fs-2xl' style={{color: "white"}} />
                  </div>     
                </Link>
              </div>
              <p className='fw-700 mb-2 nama-juri'>Faris Rakha</p>
              <p className='text-grey mb-0 job-juri'>Product Designer at Wagely</p>
            </div>

            <div className='col-md-4 col-12 position-relative text-center'>
              <div className='juri-image-wrapper'>
              <Image className="mb-md-4 img-fluid juri-image me-md-0 me-3 mb-4 mb-md-0" src="/Assets/UPDC/Juri-3.png" 
                     width={302} 
                     height={302} 
                     alt=""
                     style={{filter:'grayscale(100%)'}}
              />

              <Link href="https://www.linkedin.com/in/rayyan-adwiarto/" className='linkedin-container position-absolute rounded-circle'>
                <div className='d-flex align-items-center justify-content-center linkedin-juri'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='linkedin-icon fs-2xl' style={{color: "white"}} />
                </div>
              </Link>
              </div>
              <p className='fw-700 mb-2 nama-juri'>Rayyan Adwiarto</p>
              <p className='text-grey mb-0 job-juri'>Product Designer at Astrapay</p>
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
