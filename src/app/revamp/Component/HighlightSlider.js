import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const highlightsData = [
  {
    id: 1,
    image: "/Assets/Revamp/Highlight3.png",
    title: "Case Study",
    description: "Kolaborasi merancang solusi dengan pengguna nyata",
  },
  {
    id: 2,
    image: "/Assets/Revamp/Highlight2.png",
    title: "Task Mapping",
    description: "Diskusi seru memetakan proses desain bersama mentor",
  },
  {
    id: 3,
    image: "/Assets/Revamp/Highlight1.png",
    title: "Product Design Festival",
    description: "Peserta dan mentor dari seluruh Indonesia berkumpul!",
  },
  {
    id: 4,
    image: "/Assets/Revamp/Highlight4.png",
    title: "Kahoot Challenge",
    description: "Game interaktif seru menguji pemahaman desain",
  },
  {
    id: 5,
    image: "/Assets/Revamp/Highlight5.png",
    title: "Scrum Workshop",
    description: "Simulasi kerja nyata menggunakan metode agile",
  },
];

export default function HighlightSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const updateStatus = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="container px-0 overflow-hidden">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="text-start">
          <h2 className="fw-bold mb-2">Highlights From Our Previous Festival</h2>
          <p className="text-dark">A glimpse into the moments, energy, and experiences from our last event</p>
        </div>
          
        <div className="d-none d-lg-flex gap-3">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              swiperInstance?.slidePrev();
            }}
            className={`btn btn-light rounded-circle shadow-sm p-0 d-flex align-items-center justify-content-center ${isBeginning ? 'disabled' : ''}`}
            style={{ 
              width: '45px', 
              height: '45px', 
              opacity: isBeginning ? 0.3 : 1, 
              pointerEvents: isBeginning ? 'none' : 'auto',
              cursor: isBeginning ? 'default' : 'pointer'
            }}
          >
            <i className="bi bi-arrow-left fs-4"></i>
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              swiperInstance?.slideNext();
            }}
            className={`btn btn-light rounded-circle shadow-sm p-0 d-flex align-items-center justify-content-center ${isEnd ? 'disabled' : ''}`}
            style={{ 
              width: '45px', 
              height: '45px', 
              opacity: isEnd ? 0.3 : 1, 
              pointerEvents: isEnd ? 'none' : 'auto',
              cursor: isEnd ? 'default' : 'pointer'
            }}
          >
            <i className="bi bi-arrow-right fs-4"></i>
          </Link>
        </div>
      </div>

      <div className="container px-0">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={2}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            updateStatus(swiper);
          }}

          onSlideChange={updateStatus}
          onReachBeginning={updateStatus}
          onReachEnd={updateStatus}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="highlight-swiper"
        >
          {highlightsData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: 'auto' }}>
              <div className="card-container">
                <div className="card-highlight bg-white border-0 px-3 pt-3 pb-4 shadow-sm radius-24 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="card-img-top radius-16" 
                    style={{ width: '400px', height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center pt-3">
                    <p className="fs-2xl fw-700 mb-0">{item.title}</p>
                    <p className="text-grey mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}