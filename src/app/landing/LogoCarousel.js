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

  const carouselItems = [...logos];
  // const carouselItems = [...logos, ...logos, ...logos];

  return (
    <div className="logo-carousel-wrapper py-4">
      <div className="logo-carousel-track">
        {carouselItems.map((item, index) => (
          <div className="logo-carousel-item" key={index} style={{backgroundImage: `url(${item["logo"]})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
        ))}
      </div>
    </div>
  );
}
