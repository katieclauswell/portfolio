import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../assets/Resume-Churchwell.pdf";
import DarkMode from "./DarkMode";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/tech-stack">
                Tech Stack
              </Nav.Link>
              <Nav.Link as={Link} to="/work">
                Work
              </Nav.Link>
              <Nav.Link href={Resume} target="_blank">
                Resume
              </Nav.Link>
            </Nav>
            <DarkMode />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
