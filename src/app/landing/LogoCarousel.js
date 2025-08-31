import { useEffect, useState } from 'react';
import partners_data from '../Data_JSON/partners_data';

export default function LogoCarousel() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(partners_data);
  }, []);

  const carouselItems = [...logos, ...logos];

  return (
    <div className="logo-carousel-wrapper py-5">
      
      <div className="logo-carousel-track scroll-left">
        {carouselItems.map((item, index) => (
          <div 
            className="logo-carousel-item border me-4 radius-16" 
            key={`left-${index}`} 
            style={{
              backgroundImage: `url(${item["logo"]})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      <div className="logo-carousel-track scroll-right mt-4">
        {carouselItems.map((item, index) => (
          <div 
            className="logo-carousel-item border me-4 radius-16" 
            key={`right-${index}`} 
            style={{
              backgroundImage: `url(${item["logo"]})`
            }}
          ></div>
        ))}
      </div>

    </div>
  );
}
