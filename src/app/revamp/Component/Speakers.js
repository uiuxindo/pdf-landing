"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import speakers_data from "../../Data_JSON/speakers_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const SpeakerSection = () => {
  const speakerChunks = chunkArray(speakers_data, 2);

  const sliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    variableWidth:true
  };

  return (
    <>
      <div className="row g-4 d-none d-md-flex">
        {speakers_data.map((item) => (
          <div className="col-md-6 col-lg-3 d-md-flex justify-content-center align-items-center" key={item.id}>
            <SpeakerCard item={item} />
          </div>
        ))}
      </div>

      <div className="d-md-none speaker-slider px-0">
        <Slider {...sliderSettings}>
          {speakerChunks.map((group, index) => (
            <div className="index" key={index}>
              <div className="d-flex flex-column gap-3 align-items-center" style={{width:'fit-content'}}>
                {group.map((item) => (
                  <SpeakerCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const SpeakerCard = ({ item }) => (
  <div className="speaker-card radius-12">
    <div className="speaker-image position-relative">
      <Image
        src={item.photo_source}
        alt=""
        width={300}
        height={330}
        className="img-speaker radius-12"
      />
      <p className="speaker-name fw-600 w-100 mb-0 text-white text-center position-absolute">{item.speaker_name}</p>
    </div>

    <div className="speaker-info text-start mt-2 d-flex align-items-center radius-12 p-2">
      <Link href={item.linkedin_url} className="me-2">
        <div className="linkedin-speaker rounded-circle">
          <FontAwesomeIcon className="text-white" icon={faLinkedinIn} />
        </div>
      </Link>

      <div>
        <p className="fw-600 mb-0">{item.current_job}</p>
        <p className="text-grey mb-0">{item.current_office}</p>
      </div>
    </div>
  </div>
);

export default SpeakerSection;
