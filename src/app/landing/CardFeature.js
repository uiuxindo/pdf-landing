import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';

const cardData = [
  { icon: '/Assets/Icon-Benefit/Live-workshop.png', title: '7x LIVE Workshop UI/UX & Software Engineering' },
  { icon: '/Assets/Icon-Benefit/Remote-work.png', title: 'Remote Working Session' },
  { icon: '/Assets/Icon-Benefit/Public-speaking.png', title: 'English Profesional & Public Speaking' },
  { icon: '/Assets/Icon-Benefit/Mental-health.png', title: 'Mental Health Session' },
  { icon: '/Assets/Icon-Benefit/Job.png', title: 'Exclusive Job Info' },
  { icon: '/Assets/Icon-Benefit/Portofolio.png', title: 'LIVE Portofolio Review' },
  { icon: '/Assets/Icon-Benefit/Games.png', title: 'Virtual Games' },
  { icon: '/Assets/Icon-Benefit/Design-battle.png', title: 'LIVE Design Battle Show' },
  { icon: '/Assets/Icon-Benefit/ETC.png', title: 'Many More' },
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
    <div className="d-flex flex-wrap justify-content-md-start justify-content-center">
      {cardData.map((card, i) => (
        <Card
          key={i}
          className="me-3 mb-3"
          style={{ borderRadius: '100px', flex: '0 1 auto' }}
        >
          <Card.Body className="py-2 ps-2 pe-3">
            <div className="d-flex align-items-center">
              <Image src={card.icon} width={52} height={52} alt={card.title} />
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
    </>
  );
};

export default CardFeature;
