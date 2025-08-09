'use client';
import Image from 'next/image';

const logos = [
  '/Assets/Logo-Carousel/Logo-1.png',
  '/Assets/Logo-Carousel/Logo-2.png',
  '/Assets/Logo-Carousel/Logo-3.png',
  '/Assets/Logo-Carousel/Logo-4.png',
  '/Assets/Logo-Carousel/Logo-5.png',
];

export default function LogoCarousel() {
  const carouselItems = [...logos, ...logos];

  return (
    <div className="logo-carousel-wrapper py-4">
      <div className="logo-carousel-track">
        {carouselItems.map((logo, index) => (
          <div className="logo-carousel-item" key={index}>
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={180}
              height={80}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
