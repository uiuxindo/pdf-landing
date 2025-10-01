import Image from 'next/image';
import Link from "next/link";
import FloatingWhatsapp from "../landing/WidgetWhatsapp";

import "./payment.scss"

export default function Payment() {

  const logo = "/Assets/Logo PDF 2026.png";
  const cover = "/Assets/pdf-payment.jpeg";

  return (
    <>
      <FloatingWhatsapp/>

      <div className="payment-header">
        <div className="container">
          <Link href="/">
            <Image src={logo} alt="Logo" width={136} height={56} className="me-2" />
          </Link>
        </div>
      </div>
      <iframe allowfullscreen="" allowpaymentrequest="allowpaymentrequest" scrolling="no" frameborder="0" width="100%" height="100%" src="https://uiuxindo.myr.id/pl/pdf2026" className="payment-frame"></iframe>
      <script type="text/javascript" src="https://mayarembed.r2.mayar.id/mayarEmbed.min.js"></script>
      {/* <div className="payment-content">
        <div className="container" style={{ height: "100%" }}>
          <div className="row justify-content-center" style={{ height: "100%" }}>
            <div className="col-12 col-sm-12 col-md-10">
              <div className="row" style={{ height: "100%" }}>
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="p-3">
                    <img src={cover} className="w-100" style={{ borderRadius: "12px", border: "solid 1px #dddddd" }} />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <iframe allowfullscreen="" allowpaymentrequest="allowpaymentrequest" scrolling="no" frameborder="0" width="100%" height="100%" src="https://uiuxindo.myr.id/pl/pdf2026" className="payment-frame"></iframe>
                  <script type="text/javascript" src="https://mayarembed.r2.mayar.id/mayarEmbed.min.js"></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}