import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card } from 'react-bootstrap';
import speakers_data from '../Data_JSON/speakers_data';
import Link from 'next/link';

const CardSpeaker = () => {
  const [dataSpeaker, setDataSpeaker] = useState([]);

  useEffect(() => {
    setDataSpeaker(speakers_data);
  }, []);

  return (
    <>
      {dataSpeaker.map((item, index) => (
        <div key={index} className='col-md-3 col-12 mt-3 mt-md-0'>
          <Card
            className='card-speaker border-0 rounded-4 p-3 d-flex flex-column justify-content-end overflow-hidden mb-3'
            style={{
              backgroundImage: `url(${item["photo_source"]})`,
              backgroundSize: 'cover',
              height: '350px'
            }}
          >
            <Card.Body className='bg-white rounded-4 flex-shrink-0 flex-grow-0'>
              <div className='d-flex flex-row align-items-center'>
                <Link href={item.linkedin_url} ><i className="bi bi-linkedin me-2" style={{fontSize:'22px', color:'#1275B1'}}></i></Link>
                <p className="fs-xl fw-700 mb-0">{item["speaker_name"]}</p>
              </div>
              <p className="mb-0" style={{ color: '#888888' }}>{item["current_job"]}</p>
              <p className="mb-0">{item["current_office"]}</p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardSpeaker;
