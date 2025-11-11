import { useEffect, useState } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import "bootstrap-icons/font/bootstrap-icons.css";

function MainNavbar({ 
  menus = [], 
  buttonText = "Button", 
  buttonHref = "#", 
  logo = "/Assets/Logo PDF 2026.png",
  icon = "palette2"
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
    "btn-navbar d-flex align-items-center px-4 py-2 rounded-pill fs-md fw-600";

  const buttonStyle = { border: "2px solid #FFB929", color: "#FFB929" };

  const getIcon = () => {
    if (icon === "arrow-left") return <i className="bi bi-arrow-left me-2 fs-lg"></i>;
    if (icon === "palette2") return <i className="bi bi-palette2 me-2 fs-lg"></i>;
    return null;
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
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" width={120} height={50} className="me-2" />
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
          <Link 
            href={buttonHref} 
            className={buttonClass} 
            style={buttonStyle} 
            onClick={handleNavClick}
          >
            {getIcon()}
            {buttonText}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
