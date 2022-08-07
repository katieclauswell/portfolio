import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../assets/Resume-Churchwell.pdf";
import DarkMode from "../components/DarkMode";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => props.handleView("default")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => props.handleView("about")}>About</Nav.Link>
            <Nav.Link onClick={() => props.handleView("tech-stack")}>
              Tech Stack
            </Nav.Link>
            <Nav.Link onClick={() => props.handleView("work")}>Work</Nav.Link>
            <Nav.Link href={Resume} target="_blank">
              Resume
            </Nav.Link>
          </Nav>
          <DarkMode />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
