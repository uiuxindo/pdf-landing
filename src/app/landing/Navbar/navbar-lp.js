import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/Assets/Logo PDF 2026.png" alt="Logo" width={136} height={56} className="me-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='me-4' href="#Home">Home</Nav.Link>
            <Nav.Link className='me-4' href="#Benefit">Benefit</Nav.Link>
            <Nav.Link className='me-4' href="#Speaker">Speaker</Nav.Link>
            <Nav.Link className='me-4' href="#Schedule">Schedule</Nav.Link>
            <Nav.Link className='me-4' href="#Testimoni">Testimony</Nav.Link>
            <Nav.Link className='me-4' href="#Partner">Partner</Nav.Link>
          </Nav>
          <Link href="#contact" className="btn btn-warning px-3 py-2 rounded-pill fs-md">
            Pesan Sekarang
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;