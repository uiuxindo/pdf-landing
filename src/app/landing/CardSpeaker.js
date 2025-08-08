import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import { Card } from 'react-bootstrap';

const CardSpeaker = () => {

  const dataSpeaker = [
    {
      id: 1,
      name: 'Laila Adila',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/Laila-Adila.png',
    },
    {
      id: 2,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
    {
      id: 3,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
    {
      id: 4,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
    {
      id: 5,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
    {
      id: 6,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
    {
      id: 7,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
    {
      id: 8,
      name: 'Speaker',
      job: 'Sr. UI/UX Designer',
      company:'Chykalophia',
      avatar:'/Assets/Speaker/card-speaker-bg.png',
    },
  ];

  return(
    <>
      {dataSpeaker.map((item) => (
        <div key={item.id} className='col-md-3 col-12 mt-3 mt-md-0'>
            <Card className='card-speaker border-0 rounded-4 p-3 d-flex flex-column justify-content-end overflow-hidden mb-3' 
                style={{ 
                  backgroundImage: `url(${item.avatar})`,
                  backgroundSize: 'cover',
                  height: '350px'
                  ,}}>
            <Card.Body className='bg-white rounded-4 flex-shrink-0 flex-grow-0'>
                  <p className="fs-xl fw-700 mb-0">{item.name}</p>
                  <p className="mb-0" style={{color:'#888888'}}>{item.job}</p>
                  <p className="mb-0">{item.company}</p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardSpeaker;