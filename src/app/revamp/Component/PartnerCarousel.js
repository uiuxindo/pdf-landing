import { useEffect, useState } from "react";
import partners_data from "../../Data_JSON/partners_data";

export default function LogoCarousel() {
  const [rows, setRows] = useState([[], [], []]);

  useEffect(() => {
    const firstRow = partners_data.slice(0, 12);
    const secondRow = partners_data.slice(12, 23);
    const thirdRow = partners_data.slice(23, 34);

    setRows([firstRow, secondRow, thirdRow]);
  }, []);

  return (
    <div className="logo-carousel-wrapper">
      {rows.map((row, rowIndex) => (
        <div
          className={`logo-carousel-track scroll-left speed-${rowIndex + 1} mb-4`}
          key={rowIndex}
        >
          {[...row, ...row].map((item, index) => (
            <div
              className="logo-carousel-item border radius-16 me-4"
              key={`${rowIndex}-${index}`}
              style={{
                backgroundImage: `url(${item.logo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
