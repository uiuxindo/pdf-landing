import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import timelineData from "../Data_JSON/timeline_data";
import { Card } from "react-bootstrap";
import Image from "next/image";

const TimelineMobile = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth:true,
    // centerPadding: "24px",
  };

  return (
    <div className="container px-0 position-relative" style={{marginBottom:'100px'}}>
      {/* <Image className="d-md-none position-absolute curved-line-mobile" 
             src="/Assets/Revamp/UPDC-Revamp/curved-line-mobile.png" 
             width={600} 
             height={80} 
             alt=""
      /> */}
      <Slider {...settings}>
        {timelineData.map((item, index) => (
          <div key={item.id} 
               className={`timeline-col position-relative mt-4 mb-4 ${
                index === timelineData.length - 1 ? "is-last" : ""
          }`}>
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
      </Slider>
    </div>
  );
};

export default TimelineMobile;
