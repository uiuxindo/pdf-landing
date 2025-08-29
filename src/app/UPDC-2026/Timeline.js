import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import './UPDC.css';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const timelineData = [
  { 
    id: 1,
    number: "01",
    date: "Sabtu, 02 Mei 2026",
    tasks: [
      "Pembukaan UPDC",
      "Brief at Landing Page Website"
    ],
    boxColor: "#EEF7FF", 
    numberColor: "#007BFF" 
  }, 
  { 
    id: 2,
    number: "02",
    date: "Minggu, 17 Mei 2026",
    tasks: [
      "Submit PDC di Instagram Post"
    ],
    boxColor: "#FEF1F8",
    numberColor: "#E83E8C"
  },
  { 
    id: 3,
    number: "03",
    date: "Jumat, 22 Mei 2026",
    tasks: [
      "Pengumuman Finalist UPDC"
    ],
    boxColor: "#EDFFF7",
    numberColor: "#4DFFB9"
  },
  { 
    id: 4,
    number: "04",
    date: "Senin, 25 Mei 2026",
    tasks: [
      "Technical Meeting Finalist UPDC"
    ],
    boxColor: "#FFFAEB",
    numberColor: "#FFB929"
  },
  { 
    id: 5,
    number: "05",
    date: "Jumat, 29 Mei 2026",
    tasks: [
      "Submit Presentation & Design Figma File"
    ],
    boxColor: "#EEF7FF",     
    numberColor: "#007BFF"  
  }, 
  { 
    id: 6,
    number: "06",
    date: "Sabtu, 30 Mei 2026",
    tasks: [
      "Pitching Session"
    ],
    boxColor: "#FEF1F8",
    numberColor: "#E83E8C"
  },
  { 
    id: 7,
    number: "07",
    date: "Sabtu, 06 Juni 2026",
    tasks: [
      "UPDC Announcement"
    ],
    boxColor: "#EDFFF7",
    numberColor: "#4DFFB9"
  },
  
];

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '16px'
  };

  return (
    <div className="timeline position-relative" style={{marginTop:'177px'}}>
      <div className="position-absolute w-100" style={{marginTop:'-90px'}}>
        {isMobile ? (
          <Slider {...sliderSettings}>
            {timelineData.map((item) => (
              <div
                key={item.id}
                className="timeline-container radius-12 text-start"
                style={{marginBottom:'32px'}}
              >
                <Card className='position-relative card-timeline'>
                    <Image
                      className="img-fluid position-absolute"
                      src="/Assets/UPDC/Pin.png"
                      width={60}
                      height={60}
                      alt="Pin"
                      style={{top:'-56px', left:'50%', transform:'translateX(-50%)'}}
                    />
                    <div
                      className="box radius-8"
                      style={{ backgroundColor: item.boxColor }}
                    >
                      <h2 className="fw-700" style={{ color: item.numberColor }}>{item.number}</h2>
                      <p className="fs-xl fw-700 mb-2 w-100">{item.date}</p>
                      <ul className="mb-0 fs-md ms-md-4">
                        {item.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                    </div>
                </Card>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="row justify-content-center">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className="col-md-3 col-12 timeline-container radius-12 text-start"
                style={{marginRight:'32px', marginBottom:'32px'}}
              >
                <Card className='position-relative card-timeline'>
                    <Image
                      className="img-fluid position-absolute"
                      src="/Assets/UPDC/Pin.png"
                      width={60}
                      height={60}
                      alt="Pin"
                      style={{top:'-56px', left:'50%', transform:'translateX(-50%)'}}
                    />
                    <div
                      className="box radius-8"
                      style={{ backgroundColor: item.boxColor }}
                    >
                      <h2 className="fw-700" style={{ color: item.numberColor }}>{item.number}</h2>
                      <p className="fs-xl fw-700 mb-2 w-100">{item.date}</p>
                      <ul className="mb-0 fs-md">
                        {item.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                    </div>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;