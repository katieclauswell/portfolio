import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import me from "../assets/images/headshot-transparent.png";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            roundedCircle
            fluid
            src={me}
            alt="Image of a woman with brown hair smiling at the camera."
            style={{background: `linear-gradient(to right, rgb(181, 221, 255), rgb(217, 152, 255))`}}
          />
        </Col>
        <Col>
          <h2>Hey, I'm Katie!</h2>
          <h3>I'm a Full Stack Developer.</h3>
          <p>🌲 Based in the PNW</p>
          <p>📚 My background is in conservation work and education.</p>
          <p>🌴 Earned a Bachelors in International Business with a concentration in Marketing from the
          University of South Florida.</p>
          <p>⛰️Recent grad of a Full Stack Web Development bootcamp at the University of Oregon.</p>
       
          <a href="mailto:churchwellcatherine@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
        <a href="https://github.com/katiechurchwell">
            <i className="bi bi-github"></i>
          </a>
     <a href="https://www.linkedin.com/in/katiechurchwell/">
            <i className="bi bi-linkedin"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
