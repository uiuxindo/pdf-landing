import { useState, useEffect } from "react";
import Image from "next/image";

const imageData = [
  {
    src: "/Assets/Image-accordion/Accordion-1.png",
    title: "Case Study",
    description: "Kolaborasi merancang solusi dengan pengguna nyata."
  },
  {
    src: "/Assets/Image-accordion/Accordion-2.png",
    title: "Task Mapping",
    description: "Diskusi seru memetakan proses desain bersama mentor."
  },
  {
    src: "/Assets/Image-accordion/Accordion-3.png",
    title: "Product Design Fest",
    description: "Peserta dan mentor dari seluruh Indonesia berkumpul!"
  },
  {
    src: "/Assets/Image-accordion/Accordion-4.png",
    title: "Kahoot Challenge",
    description: "Game interaktif seru menguji pemahaman desain."
  },
  {
    src: "/Assets/Image-accordion/Accordion-5.png",
    title: "Scrum Workshop",
    description: "Simulasi kerja nyata menggunakan metode agile."
  },
];

export default function AccordionGallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setHoveredIndex(Math.floor(imageData.length / 2));
  }, []);

  return (
    <div className="accordion-section text-white">

      <div className="accordion-gallery">
        {imageData.map((item, index) => (
          <div
            key={index}
            className={`accordion-image ${hoveredIndex === index ? "active" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(Math.floor(imageData.length / 2))}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
            {hoveredIndex === index && (
              <div className="accordion-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
