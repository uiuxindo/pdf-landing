"use client";

import Image from "next/image";

export default function FestivalSection() {
  const highlights = [
    {
      id: 1,
      image: "/Assets/Revamp/Highlight1.png",
      title: "Product Design Festival vaegaergaer",
      description: "Peserta dan mentor dari seluruh Indonesia berkumpul!",
    },
    {
      id: 2,
      image: "/Assets/Revamp/Highlight2.png",
      title: "Task Mapping",
      description: "Diskusi seru memetakan proses desain bersama mentor",
    },
    {
      id: 3,
      image: "/Assets/Revamp/Highlight3.png",
      title: "Case Study",
      description: "Kolaborasi merancang solusi dengan pengguna nyata",
    },
    {
      id: 4,
      image: "/Assets/Revamp/Highlight4.png",
      title: "Kahoot Challenge",
      description: "Game interaktif seru menguji pemahaman desain",
    },
    {
      id: 5,
      image: "/Assets/Revamp/Highlight5.png",
      title: "Scrum Workshop",
      description: "Simulasi kerja nyata menggunakan metode agile",
    },
  ];

  return (
    <section className="festival-section py-5">
      <div className="container">

        {/* ===== DESKTOP HEADER ===== */}
        <div className="d-none d-lg-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold">Highlights from Our Previous Festival</h2>
            <p className="text-muted">
              A glimpse into the moments, energy, and experiences from our last event
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-light rounded-circle"
              data-bs-target="#desktopCarousel"
              data-bs-slide="prev"
            >
              ←
            </button>
            <button
              className="btn btn-light rounded-circle"
              data-bs-target="#desktopCarousel"
              data-bs-slide="next"
            >
              →
            </button>
          </div>
        </div>

        {/* ===== DESKTOP SLIDER ===== */}
        <div id="desktopCarousel" className="carousel slide d-none d-lg-block">
          <div className="carousel-inner">
            {highlights.map((item, i) => (
              <div
                key={item.id}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center gap-4">
                  {highlights.slice(i, i + 3).map((card) => (
                    <div key={card.id} className="photo-card">
                      <div className="pin" />
                      <div className="card shadow-sm border-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={320}
                          height={200}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h6 className="fw-bold">{card.title}</h6>
                          <p className="small text-muted mb-0">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="d-lg-none">
          <h2 className="fw-bold mb-2">The Tea From the Last Festival</h2>
          <p className="text-muted mb-4">
            Here’s the real spill from people who’ve actually joined
          </p>

          <div id="mobileCarousel" className="carousel slide">
            <div className="carousel-inner">
              {highlights.map((item, i) => (
                <div
                  key={item.id}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                >
                  <div className="testimonial-card p-4">
                    <div className="quote mb-3">“</div>
                    <p className="mb-4">{item.description}</p>
                    <hr />
                    <strong>{item.title}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators mt-4">
              {highlights.map((_, i) => (
                <button
                  key={i}
                  data-bs-target="#mobileCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? "active" : ""}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
