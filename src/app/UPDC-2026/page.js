"use client";

import dynamic from 'next/dynamic';
import Link from "next/link";
import MainNavbar from "../../app/Navbar/navbar-lp";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './updc-revamp.css';
import { useState } from 'react';
import Timeline from "../../app/UPDC-2026-Old/Timeline";
import { Card, CardBody } from "react-bootstrap";
import Footer from "../../app/Footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { briefCards } from '../Data_JSON/benefit_card_data';
import BenefitCards from '../revamp/Component/BenefitCard';
import SubmitModal from './Modal Component/submitModal';

export default function Home() {

  const menuPageMenus = [
    { label: "Home", href: "#Hero" },
    { label: "Keterangan", href: "#Keterangan" },
    { label: "Challenge", href: "#Challenge" },
    { label: "Timeline", href: "#Timeline" },
    { label: "Hadiah", href: "#Hadiah" },
    { label: "Juri", href: "#Juri" },
  ];

  const [show, setShow] = useState(false)

  return (
    <>
      <MainNavbar
        menus={menuPageMenus}
        buttonText="Back"
        buttonHref="/"
        buttonVariant="fill"
        icon="arrow-left"
      />

      <div className="container-fluid" id="Home" style={{paddingTop:'69px'}}>
        <div id="Hero" className="row">

          {/* Hero */}
          <div className="col-12 hero-updc text-center">
            <div className='updc-heading-container text-center mx-auto position-relative'>
              <Image className="img-fluid tag-uiuxindo position-absolute" src="/Assets/Revamp/UPDC-Revamp/Tag-UIUXINDO.png" width={240} height={240} alt=""/>
              <h1 className="fw-900 text-main updc-heading">UI Product Design</h1>
              <div className='d-flex flex-row justify-content-center align-items-center'>
                <h1 className="fw-700 mb-3 text-blue updc-heading-2">Challenge</h1>
                <Image className="img-fluid tag-26" src="/Assets/Revamp/UPDC-Revamp/Tag-26.png" width={130} height={130} alt=""/>
              </div>
              <div className='updc-subheading mt-md-4 mt-0 py-2'>
                <p className='text-center updc-subheading-text px-2 fw-600 mb-0' style={{color:'#B74A06'}}>&ldquo;Empowering Local, Competing Global: Designing Digital Bridges for Business&rdquo;</p>
              </div>
              <Image className="img-fluid tag-you position-absolute" src="/Assets/Revamp/UPDC-Revamp/Tag-You.png" width={120} height={120} alt=""/>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center button-hero'>
              <Link href="https://bit.ly/cover-uidc2026"
                    target='_blank' 
                    className="btn btn-download-cover rounded-pill mt-md-4 me-md-4 me-3 px-4 py-md-3 fw-700 mb-0"
                    style={{border:'solid 1px #000000'}}
              >
                Download Cover
              </Link>
              <Link href="" 
                    onClick={(e) => {
                      e.preventDefault()
                      setShow(true)
                    }}
                    className="btn btn-updc rounded-pill mt-md-4 px-4 py-md-3 fw-700"
                    style={{backgroundColor:'#FFFAEB'}}
              >
                Submit Challenge
              </Link>
              <SubmitModal show={show} onHide={() => {setShow(false)}}/>
            </div>
          </div>
          <div className='px-0'>
            <Image className="tag-hero" src="/Assets/Revamp/UPDC-Revamp/Tag.png" width={1920} height={200} alt=""/>
          </div>
        </div>
      </div>

    <div className="container">

      {/* KETERANGAN */}
      <div id='Keterangan' className='row section-keterangan text-center'>
        <p className='fw-700 mb-3 keterangan-heading'>What is UPDC?</p>
        <p className='text-grey keterangan'>Product Design Challenge adalah ajang lomba UI/UX Design yang ditujukan untuk mahasiswa, 
          PDC ini hadir sebagai solusi untuk mahasiswa yang ingin mengasah kemampuan UI/UX & product development serta memberikan pengalaman 
          nyata dalam mengemukakan ide kepada stakeholder di dunia kerja.
        </p>
        <Card className='card-general radius-16'>
          <CardBody className='p-0'>
            <div className='card-heading-container p-3'>
              <p className='fw-600 mb-0 card-heading'>General Terms</p>
            </div>
            <div className='d-flex flex-lg-row flex-column align-items-lg-center justify-content-md-center'>
              <div className='me-md-4 pt-3 pb-md-4 pb-3 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  01
                  </div>
                <p className='text-start mb-0'>
                  Peserta UPDC berhak mengikuti seluruh rangkaian workshop & benefit PDF 2026
                </p>
              </div>
              <div className='me-md-4 pt-3 pb-4 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  02
                  </div>
                <p className='text-start mb-0'>
                  Peserta dapat memilih salah satu brief yang tersedia
                </p>
              </div>
              <div className='me-md-4 pt-3 pb-4 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  03
                  </div>
                <p className='text-start mb-0'>
                  Peserta diperbolehkan mengerjakan dua brief, namun hanya satu project yang akan dinilai
                </p>
              </div>
              <div className='pt-3 pb-4 px-3 card-metrics'> 
                <div className='fs-2xl fw-700 text-white px-3  mb-3 rounded-pill' style={{background:"#4DA2FF", width:'fit-content'}}>
                  04
                </div>
                <p className='text-start mb-0'>
                  Peserta wajib mengisi formulir data yang terdapat dalam brief untuk keperluan penilaian
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Brief */}
      <div className="row" id='Challenge'>
        <div className='col-12 text-center'>
          <p className="heading-benefit-1 fw-700 mb-3">Choose Your Challenge!</p>
          <p className="text-grey subheading-benefit-1" style={{marginBottom:'40px'}}>By participating in this event, you will get an exciting learning experience about product design and professional relationships that bring positive energy.</p>
          <BenefitCards cardsData={briefCards}/>
        </div>
      </div>

    </div>

    <div className='container-fluid px-0'>
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
      <Image className="n" src="/Assets/Revamp/UPDC-Revamp/Tag-blue.png" width={1920} height={52} alt=""/>
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

    {/* Timeline */}
    <div className='container-fluid'>
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
        {/* <Image className="d-none d-md-block mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-2.png" width={1585} height={300} alt=""/> */}
        {/* <Image className="d-block d-md-none mb-md-0 img-fluid px-0 union" src="/Assets/Revamp/Union-2-Mobile.png" width={300} height={300} alt=""/> */}
      </div>
    </div>


    {/* Footer */}
    <Footer/>

    </>
  );
}
