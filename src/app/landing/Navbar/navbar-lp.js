import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`border-bottom transition-all ${scrolled ? "glass-navbar" : "bg-body-tertiary"}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/Assets/Logo PDF 2026.png" alt="Logo" width={136} height={56} className="me-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='me-4' href="#Home" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link className='me-4' href="#Benefit" onClick={handleNavClick}>Benefit</Nav.Link>
            <Nav.Link className='me-4' href="#Speaker" onClick={handleNavClick}>Speaker</Nav.Link>
            <Nav.Link className='me-4' href="#Schedule" onClick={handleNavClick}>Schedule</Nav.Link>
            <Nav.Link className='me-4' href="#Testimoni" onClick={handleNavClick}>Testimony</Nav.Link>
            <Nav.Link className='me-4' href="#Partner" onClick={handleNavClick}>Partner</Nav.Link>
          </Nav>
          <Link href="#contact" className="btn btn-warning px-3 py-2 rounded-pill fs-md" onClick={handleNavClick}>
            UPDC
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
