import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function LogoCarousel() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/brtsk23nmm0r3')
      .then((response) => {
        console.log(response.data);
        setLogos(response.data);
      })
      .catch((err) => {
        console.error('Error fetching logos:', err);
      });
  }, []);

  const carouselItems = [...logos, ...logos, ...logos];

  const customSizeLogos = ["Coptera", "Haifilo", "Koda Academy", "UIXPerience", "FKOM UNIKU"];

  return (
    <div className="logo-carousel-wrapper py-5">
      <div className="logo-carousel-track">
        {carouselItems.map((item, index) => {
          const isCustom = customSizeLogos.includes(item.name);
          return (
            <div className="logo-carousel-item" key={index}>
              <div className={`logo-box ${isCustom ? "logo-box-large" : ""}`}>
                <Image
                  src={item["logo"]}
                  alt={item.name || `Logo ${index}`}
                  fill
                  className="logo-img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
