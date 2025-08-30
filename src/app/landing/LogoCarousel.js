import { useEffect, useState } from 'react';
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

  // const carouselItems = [...logos];
  const carouselItems = [...logos, ...logos];

  return (
    <div className="logo-carousel-wrapper py-5">
      <div className="logo-carousel-track">
        {carouselItems.map((item, index) => (
          <div className="logo-carousel-item border me-4 radius-16" 
                key={index} 
                style={{backgroundImage: `url(${item["logo"]})`, 
                        backgroundSize: "contain", 
                        backgroundRepeat: "no-repeat", 
                        backgroundPosition: "center",
            }}>
          </div>
        ))}
      </div>
    </div>
  );
}
