// app/payment/thankyou/page.jsx
import Link from "next/link";
import Image from "next/image";
import "./thankyou.css";

export default function ThankYouPage() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center thankyou-page"
    >
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center bg-white rounded-4 p-4 p-md-5 thankyou-container"
      >
          <Image
            src="/Assets/Payment.png"
            alt="Payment Success"
            width={400}
            height={400}
            className="img-fluid thankyou-image"
            priority
          />

        <div className="text-start text-container">
          <p className="fw-700 mb-4 thankyou-title">
            🎉 Terima kasih telah bergabung!
          </p>
          <p className="mb-4 fs-sm-sm fs-md-lg">
            Pembelian tiketmu untuk <b>Product Design Festival 2026</b> telah berhasil. Kami tidak sabar
            bertemu denganmu dan ribuan desainer lainnya yang akan berbagi inspirasi, ide, dan masa depan desain produk di Indonesia.
          </p>
          <p className="mb-4 fs-sm-sm fs-md-lg">
            💌 E-tiket dan detail acara telah kami kirimkan ke email kamu. <br /> Sampai jumpa di festival, dan bersiaplah untuk design, connect, and grow!
          </p>

          <Link
            href="/"
            className="btn fw-bold rounded-pill px-4 d-flex justify-content-center align-item-center thankyou-btn"
          >
            Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}