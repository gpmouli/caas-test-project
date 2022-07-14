import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Assets/icons/logo-caas.png";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="navHeader" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <Navbar.Brand href="/">
            <img src={Logo} width="153" height="64" alt="Caas Logo" />
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about-us">ABOUT US</Nav.Link>
            <NavDropdown title="LICENSES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Licence Type 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Licence Type 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Licence Type 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Licence Type 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
