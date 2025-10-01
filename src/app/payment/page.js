import Image from 'next/image';
import Link from "next/link";
import FloatingWhatsapp from "../landing/WidgetWhatsapp";

import "./payment.scss"

export default function Payment() {

  const logo = "/Assets/Logo PDF 2026.png";

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
    </>
  )
}