import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import me from "../assets/images/headshot-transparent.png";

function About() {
  return (
    <Container id="about">
      <Row className="m-3">
        <h2>About</h2>
      </Row>
      <Row>
        <Col>
          <Image
            roundedCircle
            fluid
            src={me}
            alt="Image of a woman with brown hair smiling at the camera."
            style={{
              background: `linear-gradient(to right, rgb(181, 221, 255), rgb(217, 152, 255))`,
              width: `300px`,
            }}
          />
        </Col>
        <Col xs={7}>
          <Row>
            <p>
              Hello, my name is Katie Churchwell and I'm a Full Stack Developer
              with a background in education.
            </p>
            <p>
              I earned a Bachelors in International Business with a
              concentration in Marketing from the University of South Florida
              and am a graduate of a Full Stack Web Development bootcamp at
              the University of Oregon.
            </p>
          </Row>
          <Row className="justify-content-center" xs={2} md={4} lg={6}>
            <a href="mailto:churchwellcatherine@gmail.com">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://github.com/katiechurchwell">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/katiechurchwell/">
              <i className="bi bi-linkedin"></i>
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
