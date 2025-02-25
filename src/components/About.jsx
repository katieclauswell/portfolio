import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/images/headshot-transparent.png";
import pictureframe from "../assets/images/picture-frame.png";
import blueNoise from "../assets/images/blue-noise.png";

function About() {
  return (
    <>
      <Row className="m-3">
        <h2>About</h2>
      </Row>
      <Row>
        <Col id="headshot-container">
          <div
            role="img"
            id="headshot"
            style={{
              backgroundImage: `url(${pictureframe}), url(${blueNoise}), url(${me})`,
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
              and am a graduate of a Full Stack Web Development bootcamp at the
              University of Oregon.
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
    </>
  );
}

export default About;
