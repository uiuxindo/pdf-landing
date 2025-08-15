'use client';

import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';

const cardData = [
  { icon: '/Assets/Icon-Benefit/Workshop.png', title: '7x LIVE Workshop UI/UX & Software Engineering' },
  { icon: '/Assets/Icon-Benefit/Remote.png', title: 'Remote Working Session' },
  { icon: '/Assets/Icon-Benefit/Speaking.png', title: 'English Profesional & Public Speaking' },
  { icon: '/Assets/Icon-Benefit/Mental Health.png', title: 'Mental Health Session' },
  { icon: '/Assets/Icon-Benefit/Workshop-1.png', title: 'Exclusive Job Info' },
  { icon: '/Assets/Icon-Benefit/Portofolio Review.png', title: 'LIVE Portofolio Review' },
  { icon: '/Assets/Icon-Benefit/Virtual Games.png', title: 'Virtual Games' },
  { icon: '/Assets/Icon-Benefit/Battle Show.png', title: 'LIVE Design Battle Show' },
  { icon: '/Assets/Icon-Benefit/Many more.png', title: 'Many More' },
];

const CardRow = [
  cardData.slice(0, 2), 
  cardData.slice(2, 4),
  cardData.slice(4, 7),
  cardData.slice(7), 
];

const CardFeature = () => {
  return (
    <>
      {CardRow.map((row, i) => (
        <div key={i} className="d-flex flex-column flex-lg-row align-items-center">
          {row.map((card, j) => (
            <Card
              key={j}
              className={`me-3 mb-3 ${j === row.length - 1 ? '' : 'me-3'}`}
              style={{ borderRadius: '100px', width: 'fit-content' }}
            >
              <Card.Body className="py-md-1 ps-2 pe-3">
                <div className="d-flex align-items-center">
                  <Image className="mb-md-0" src={card.icon} width={52} height={52} alt={card.title} />
                  <div className="d-flex flex-column ms-3">
                    <Card.Title as="h6" className="mb-0 fw-500">
                      {card.title}
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};

export default CardFeature;
