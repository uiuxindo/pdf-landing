import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardTestimoni = () => {
  const [dataTestimoni, setDataTestimoni] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/pj388f8dn8jag')
      .then((response) => {
        console.log(response.data);
        setDataTestimoni(response.data);
      })
      .catch((error) => {
        console.error('Error fetching testimoni:', error);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const renderCard = (item, index) => (
    <Card key={index} className="card rounded-4 mb-4">
      <Card.Body>
        <Image
          className="mb-md-3 img-fluid"
          src="/Assets/Testimoni/quote-down.png"
          width={48}
          height={48}
          alt="Quote Icon"
        />
        <Card.Text className="card-text mb-4">{item["message"]}</Card.Text>
        <div className="d-flex flex-row align-items-center border-top pt-3">
          <Image
            className="img-fluid"
            src={item["photo_url"]}
            width={44}
            height={44}
            alt={`${item["name"]}'s avatar`}
          />
          <div className="ms-3">
            <h5 className="mb-0">{item["name"]}</h5>
            <p className="text-grey mb-0">{item["bio"]}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {dataTestimoni.map((item, index) => renderCard(item, index))}
        </Slider>
      ) : (
        <div className="masonry-container">
          {dataTestimoni.map((item, index) => (
            <Card key={index} className="masonry-item card rounded-4 mb-4">
              <Card.Body>
                <Image
                  className="mb-md-3 img-fluid"
                  src="/Assets/Testimoni/quote-down.png"
                  width={48}
                  height={48}
                  alt="Quote Icon"
                />
                <Card.Text className="card-text mb-4">{item["message"]}</Card.Text>
                <div className="d-flex flex-row align-items-center border-top pt-3">
                  <Image
                    className="img-fluid"
                    src={item["photo_url"]}
                    width={44}
                    height={44}
                    alt={`${item["name"]}'s avatar`}
                  />
                  <div className="ms-3">
                    <h5 className="mb-0">{item["name"]}</h5>
                    <p className="text-grey mb-0">{item["bio"]}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default CardTestimoni;
