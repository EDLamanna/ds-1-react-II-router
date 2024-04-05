import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="danger" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="containerButtons">
          <Nav className="me-auto">
            <img
              className="IconsNavBar"
              src="src/assets/imgs/icon_home.png"
              alt="Brand-Cake"
            />
            <Link className="nav-item nav-link text-white" to="/">
              Home
            </Link>
            <img
              className="IconsNavBar"
              src="src/assets/imgs/icon_contact.png"
              alt="Brand-Cake"
            />
            <Link className="nav-item nav-link text-white" to="/contact">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="containerBrand">
          <Link className="nav-item nav-link text-white" to="/">
            Happy Cake
          </Link>
          <img
            className="IconsNavBar"
            src="src/assets/imgs/icon_brand.png"
            alt="Brand-Cake"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
