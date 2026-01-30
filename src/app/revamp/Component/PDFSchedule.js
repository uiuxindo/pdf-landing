"use client";

import { useState } from "react";
import Image from "next/image";
import schedule_data from "../../Data_JSON/schedule_data";
import Link from "next/link";

export default function PDFSchedule() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container" style={{marginTop:'40px'}}>
      <div className={`schedule-wrapper ${isOpen ? "expanded" : ""}`}>
        <div className="row g-4">
           {schedule_data.map((item) => (
            <ScheduleCard key={item.id} item={item} />
           ))}
         </div>
         {!isOpen && <div className="schedule-overlay" />}
       </div>

       <div className="mt-5 text-center schedule-breakdown">
        <p className="fw-600 schedule-breakdown-heading">Want the full breakdown for each session?</p>
        <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
          <Link
            href="#schedule"
            className={`btn btn-outline-warning px-4 me-md-3 fw-600 rounded-pill`}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Hide Full Schedule" : "See Full Schedule"}
          </Link>

          <Link href="/payment" className="btn-main-schedule mt-3 mt-md-0 rounded-pill px-4 fw-600">
            Get Your Ticket
          </Link>
        </div>
      </div>

      </div>
  );
}

function ScheduleCard({ item }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 border p-4 rounded-4">
        <div className="card-body p-0">

          <div style={{marginBottom:'60px'}}>
            <p className="text-grey d-block mb-2">
              {item.day} • {item.date} • {item.time}
            </p>
            <p className="fs-xl fw-600 mb-3" style={{lineHeight:'120%'}}>
              {item.topic}
            </p>
          </div>

          {item.speaker && (
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="mb-0 fw-semibold">{item.speaker}</p>
                <p className="text-grey fs-md mb-0">{item.speakerJob}</p>
              </div>
              {item.speakerPhoto && (
                <Image
                  src={item.speakerPhoto}
                  alt={item.speaker}
                  width={48}
                  height={48}
                  className="rounded-circle"
                />
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
