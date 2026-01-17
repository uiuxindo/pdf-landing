'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';

const highlightsData = [
  {
    id: 1,
    image: '/Assets/Revamp/Highlight1.png',
    title: 'Product Design Festival',
    description: 'Peserta dan mentor dari seluruh Indonesia berkumpul!',
  },
  {
    id: 2,
    image: '/Assets/Revamp/Highlight2.png',
    title: 'Task Mapping',
    description: 'Diskusi seru memetakan proses desain bersama mentor',
  },
  {
    id: 3,
    image: '/Assets/Revamp/Highlight3.png',
    title: 'Case Study',
    description: 'Kolaborasi merancang solusi dengan pengguna nyata',
  },
  {
    id: 4,
    image: '/Assets/Revamp/Highlight4.png',
    title: 'Kahoot Challenge',
    description: 'Game interaktif seru menguji pemahaman desain',
  },
  {
    id: 5,
    image: '/Assets/Revamp/Highlight5.png',
    title: 'Scrum Workshop',
    description: 'Simulasi kerja nyata menggunakan metode agile',
  },
];

export default function MobileHighlightHangerSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
		variableWidth:true,
  };

  return (
    <section className="hanger-section position-relative d-md-none">
      <div className="container px-0 position-relative">
        <div className="bg-white mt-5 position-absolute rope"/>
        <div className='slider-wrapper position-relative'>
          <Slider {...settings}>
            {highlightsData.map(item => (
              <div key={item.id} className="hanger-slide">
                <div className="hanger-wrapper position-relative d-flex justify-content-center">

                  {/* <div className="bg-white mt-5 position-absolute rope"/> */}
                  <div className="blue-clip-mobile radius-4 d-flex justify-content-center position-absolute">
                    <span className='rounded-circle bg-white'/>
                  </div>

                  <Card className="hanger-card px-3 pt-3 overflow-hidden position-relative">
                    <div className="hanger-image position-relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="radius-16"
                        width={375}
                        height={220}
                      />
                    </div>

                    <div className="mt-3">
                      <p className="fw-bold mb-1 fw-700 title-card-highlight">{item.title}</p>
                      <p className="mb-0 text-grey">{item.description}</p>
                    </div>
                  </Card>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
