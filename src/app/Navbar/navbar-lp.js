import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainNavbar({ 
  menus = [], 
  buttonText = "Button", 
  buttonHref = "#", 
  logo = "/Assets/Logo PDF 2026.png",
  buttonVariant = "outline",
  chevron="right"
}) {
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

  const buttonClass =
    buttonVariant === "fill"
      ? "btn-navbar d-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-600"
      : "btn-navbar d-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-600";

  const buttonStyle =
    buttonVariant === "fill"
      ? { backgroundColor: "#FFB929", borderColor: "#FFB929" }
      : { border: "2px solid #FFB929", color: "#FFB929" };
      
const ChevronIcon = chevron === "left" ? BsChevronLeft : BsChevronRight;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`border-bottom transition-all ${scrolled ? "glass-navbar" : "bg-body-tertiary"}`}
    >
      <Container>
        <Navbar.Brand href="https://www.uiuxindo.id/">
          <Image src={logo} alt="Logo" width={136} height={56} className="me-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {menus.map((menu, index) => (
              <Nav.Link
                key={index}
                className="me-4"
                href={menu.href}
                onClick={handleNavClick}
              >
                {menu.label}
              </Nav.Link>
            ))}
          </Nav>
          <Link href={buttonHref} className={buttonClass} style={buttonStyle} onClick={handleNavClick}>
            {chevron === "left" && <ChevronIcon size={16} className="me-1" />}
            {buttonText}
            {chevron === "right" && <ChevronIcon size={16} className="ms-1" />}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
