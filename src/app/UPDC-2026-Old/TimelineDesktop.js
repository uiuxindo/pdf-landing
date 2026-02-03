import React from "react";
import timelineData from "../Data_JSON/timeline_data";
import { Card } from "react-bootstrap";
import Image from "next/image";

const TimelineDesktop = () => {
  return (
    <div className="container mt-5 px-0 position-relative">
      {/* <Image className="img-fluid position-absolute curved-line-1" src="/Assets/Revamp/UPDC-Revamp/curved-line-1.png" width={840} height={64} alt=""/> */}
      {/* <Image className="img-fluid position-absolute curved-line-2" src="/Assets/Revamp/UPDC-Revamp/curved-line-2.png" width={600} height={64} alt=""/> */}
      <div className="d-flex flex-wrap justify-content-center timeline-row">
        {timelineData.map((item) => (
          <div className="timeline-col position-relative" key={item.id}>
            <Card className="card-timeline position-relative bg-white border-none text-start" 
                  style={{
                    borderColor:'none', 
                    borderRadius: "12px",
                    padding:'50px 8px 8px 8px',
                    height:'100%',
                    width:'248px'
                    }}
              >
              <Card.Body className="card-body p-4" style={{borderRadius: "8px", backgroundColor: item.boxColor}}>
                <div className="position-absolute" style={{ top: "0px", left:'100px'}}>
                  <Image className="justify-content-center img-fluid" src="/Assets/UPDC/Pin.png" width={50} height={50} alt=""/>
                </div>
                <p className="fw-700 mb-2" style={{ color: item.numberColor, fontSize:'32px'}}>
                  {item.number}
                </p>
                <p className="fw-700 fs-xl mb-2">{item.date}</p>
                <ul className="list-unstyled fs-md">
                  {item.tasks.map((task, idx) => (
                    <li key={idx}>• {task}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineDesktop;
