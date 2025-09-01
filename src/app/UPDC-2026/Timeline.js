import React from "react";
import TimelineDesktop from "./TimelineDesktop";
import TimelineMobile from "./TimelineMobile";

const TimelineSection = () => {
  return (
    <div className="timeline-bg">
      <div className="d-none d-md-block" style={{marginBottom:'100px'}}>
        <TimelineDesktop />
      </div>
      <div className="d-block d-md-none h-100">
        <TimelineMobile />
      </div>
    </div>
  );
};

export default TimelineSection;
