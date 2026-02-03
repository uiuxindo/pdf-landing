"use client";

import Image from "next/image";

const sequence = [
  { type: "graphic", src: "/Assets/Revamp/Supergraphics-1.png" },
  { type: "text", value: "From Beyond to Worldwide" },

  { type: "graphic", src: "/Assets/Revamp/Supergraphics-2.png" },
  { type: "text", value: "Product Design Festival 2026" },

  { type: "graphic", src: "/Assets/Revamp/Supergraphics-3.png" },
  { type: "text", value: "From Beyond to Worldwide" },

  { type: "graphic", src: "/Assets/Revamp/Supergraphics-1.png" },
  { type: "text", value: "Product Design Festival 2026" },

  { type: "graphic", src: "/Assets/Revamp/Supergraphics-2.png" },
  { type: "text", value: "From Beyond to Worldwide" },

  { type: "graphic", src: "/Assets/Revamp/Supergraphics-3.png" },
  { type: "text", value: "Product Design Festival 2026" },
];

const InfiniteCarousel = () => {
  return (
    <div className="infinite-wrapper">
      <div className="infinite-track d-flex">
        
        {/* TRACK A */}
        <div className="infinite-row">
          {sequence.map((item, i) =>
            item.type === "graphic" ? (
              <div className="infinite-item fw-700 px-4 d-flex align-items-center" key={`a-g-${i}`}>
                <Image src={item.src} alt="" width={60} height={60} />
              </div>
            ) : (
              <div className="infinite-item fw-700 d-flex align-items-center" key={`a-t-${i}`}>
                {item.value}
              </div>
            )
          )}
        </div>

        <div className="infinite-row">
          {sequence.map((item, i) =>
            item.type === "graphic" ? (
              <div className="infinite-item fw-700 px-4 d-flex align-items-center" key={`b-g-${i}`}>
                <Image src={item.src} alt="" width={60} height={60} />
              </div>
            ) : (
              <div className="infinite-item fw-700 d-flex align-items-center" key={`b-t-${i}`}>
                {item.value}
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default InfiniteCarousel;
