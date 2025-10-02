import Link from "next/link";

import "./payment.scss"
import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Payment() {

  const banner = "/Assets/pdf-payment.jpeg";

  return (
    <>
      <div className="payment-header">
        <div className="container">
          <Link href="/">
            <Button type="button" className="btn btn-back d-flex align-items-center px-4 py-2 rounded-pill fs-md fw-600">
              <i className="bi bi-arrow-left me-2 fs-lg"></i>
              Back
            </Button>
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <iframe allowpaymentrequest="allowpaymentrequest" scrolling="no" width="100%" height="100%" src="https://uiuxindo.myr.id/pl/pdf2026" className="payment-frame"></iframe>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <img src={banner} className="w-100" style={{ borderRadius: "16px" }} />
                  <div className="py-4" style={{ color: "#333333" }}>
                    <h4 className="mb-3">Tentang Product Design Festival</h4>
                    <div style={{ fontSize: "14px", lineHeight: "24px" }}>
                      <p><strong>Product Design Festival</strong> adalah <strong>event online terbesar di Indonesia</strong> untuk bidang <strong>UI/UX Design & Technology</strong>.</p>
                      <p>Acara ini menjadi <strong>wadah pembelajaran intensif selama 1 bulan via Zoom</strong>, dirancang khusus untuk membekali kamu dengan wawasan, praktik, dan pengalaman nyata agar siap meraih peluang kerja, termasuk <strong>remote job di perusahaan luar negeri</strong>.</p>
                      <p><strong>Apa yang akan kamu dapatkan di Product Design Festival?</strong></p>
                      <ul>
                        <li><strong>5 Sesi Workshop Premium</strong> seputar Product Management, UX Research, UI/UX Design, UX Writing, dan Software Engineering</li>
                        <li><strong>Sesi Soft Skill Development</strong>: English for Professional, Public Speaking, Mental Health, dan Career Guide Talkshow</li>
                        <li><strong>Product Design Challenge</strong>: Kerjakan challenge nyata & pitching langsung di depan juri</li>
                        <li><strong>Simulasi Project Nyata</strong> untuk membangun portofolio UI/UX Design yang berkelas</li>
                        <li><strong>Persiapan Karier Remote</strong> dengan bimbingan profesional yang telah berpengalaman </li>
                      </ul>
                      <p><strong>Benefit Eksklusif untuk Peserta</strong></p>
                      <ul>
                        <li><strong>E-Certificate Resmi</strong></li>
                        <li><strong>Akses Rekaman & Handbook Materi (PDF 2025)</strong></li>
                        <li><strong>Gratis Mentoring</strong> bersama <strong>Head/Manager UI/UX</strong></li>
                        <li><strong>Free Access</strong> ke event premium</li>
                        <li><strong>Hadiah Uang Tunai hingga Rp1.000.000*</strong></li>
                        <li><strong>Voucher Belanja hingga 30%</strong></li>
                        <li>dan masih banyak lagi kejutan menarik!</li>
                      </ul>
                      <p><strong>Jangan lewatkan kesempatan ini!</strong> Siapkan dirimu untuk <strong>naik level dan meraih penghasilan lebih dengan bekerja di perusahaan global.</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}