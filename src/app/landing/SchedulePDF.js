import React, { useState, useEffect } from 'react';
import schedule_data from "../Data_JSON/schedule_data";

const Schedule = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? schedule_data : schedule_data.slice(0, 4);

  return (
    <section className="schedule-section">
      <h2 className="schedule-title">Event Schedule</h2>
      <div className="timeline">
        {displayedData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <span className="date">
                {item.date} {item.month}
              </span>
              <h3>{item.topic}</h3>
              <p className="subtitle">{item.desc}</p>
              <p className="speaker">by {item.speaker}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-btn">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak"}
        </button>
      </div>
    </section>
  );
};

export default Schedule;
