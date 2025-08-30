import React from "react";

const FloatingWhatsapp = () => {
  return (
    <div className="whatsapp-fab position-fixed d-flex flex-column align-items-end">
      <div className="fab-label d-none d-sm-block mb-3 fs-md">
        Ada yang bisa kami bantu?
      </div>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=6282310101118&text=Halo,%20saya%20mau%20bertanya"
      >
        <img
          src="/Assets/ic_whatsapp.png" // ganti path sesuai project kamu
          alt="WhatsApp"
          className="fab-icon"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
