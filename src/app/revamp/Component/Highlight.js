import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Data Mockup
const highlights = [
  { id: 1, img: '/event1.jpg', title: 'Highlights from Our Previous Festival', desc: 'A glimpse into the moments...' },
  { id: 2, img: '/event2.jpg', title: 'Highlights from Our Previous Festival', desc: 'A glimpse into the moments...' },
  // ... tambahkan lebih banyak
];

export default function HighlightsSlider() {
  return (
    <section className="highlights-section py-5 position-relative overflow-hidden">
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Highlights from Our Previous Festival</h2>
        <p className="text-muted">A glimpse into the moments, energy, and experiences from our last event</p>
      </div>

      {/* Garis Melengkung (SVG Background) */}
      <div className="curve-line-container position-absolute w-100">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160 C360,260 1080,60 1440,160" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="slider-wrapper pt-5">
        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          {highlights.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="highlight-card-wrapper position-relative pt-4">
                {/* Jepit Biru */}
                <div className="blue-clip">
                    <div className="clip-hole"></div>
                </div>
                
                {/* Card Konten */}
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden p-3 bg-white">
                  <img src={item.img} className="rounded-3 mb-3" alt="event" />
                  <div className="text-start px-2">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="small text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}