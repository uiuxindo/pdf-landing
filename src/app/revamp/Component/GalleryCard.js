'use client';

import Card from 'react-bootstrap/Card';
import Image from 'next/image';

const galleryCardData = [
  {
    id: 1,
    image: '/Assets/Revamp/Highlight1.png',
    title: 'Product Design Festival',
    description:'Peserta dan mentor dari seluruh Indonesia berkumpul!',
  },
  {
    id: 2,
    image: '/Assets/Revamp/Highlight2.png',
    title: 'Task Mapping',
    description:'Diskusi seru memetakan proses desain bersama mentor',
  },
  {
    id: 3,
    image: '/Assets/Revamp/Highlight3.png',
    title: 'Case Study',
    description:'Kolaborasi merancang solusi dengan pengguna nyata',
  },
    {
    id: 4,
    image: '/Assets/Revamp/Highlight4.png',
    title: 'Kahoot Challenge',
    description:'Game interaktif seru menguji pemahaman desain',
  },
    {
    id: 5,
    image: '/Assets/Revamp/Highlight5.png',
    title: 'Scrum Workshop',
    description:'Simulasi kerja nyata menggunakan metode agile',
  },
];

function CardItem({ title, description, image}) {
  return ( 
    <div className='card-container position-absolute'>
      <div className='blue-clip'/>
      <Card className="px-3 pb-4" style={{width: 360, borderRadius: 24, overflow: 'hidden'}}>
        <Card.Body className="p-0">
          
          {image && (
            <div className="card-image-wrapper">
              <Image
                src={image}
                fill
                alt={title}
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}


          <Card.Title className="mb-1 fw-700" style={{ fontSize:'24px'}}>{title}</Card.Title>
          <Card.Text className='fs-md'>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default function GalleryCard() {
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {galleryCardData.map(item => (
        <CardItem key={item.id} {...item} />
      ))}
    </div>
  );
}