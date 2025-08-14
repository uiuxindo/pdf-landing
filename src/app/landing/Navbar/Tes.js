// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-4">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          <Image src="/Assets/Logo PDF 2026.png" alt="Logo" width={160} height={64} className="me-2" />
        </Link>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border: '0'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <button type="button" aria-controls="collapse-menu" aria-expanded="false" className="burger-menu p-0 position-relative btn btn-link"><div class="icon"></div></button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Benefit</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Speaker</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Schedule</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Testimony</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Partner</a>
            </li>
          </ul>
          <Link href="#contact" className="btn btn-warning px-3 py-2 rounded-pill fs-md">
            Pesan Sekarang
          </Link>
        </div>

      </div>
    </nav>
  );
}
