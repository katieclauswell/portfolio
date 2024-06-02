import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MobileView() {
  return (
    <Container>
      <Row className="m-3">
        <h1>Katie Churchwell</h1>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 1 }}>
          <Row>
            <p id="tagline">
              Full Stack Developer with a background in education.
            </p>
            <p>
              Currently working on LearnPlatform, an EdTech Management Platform
              committed to expanding equitable access for all students to the
              teaching and technology that works best for them.
            </p>
            <p>Our tech stack includes React, Rails and Elixir.</p>
          </Row>
        </Col>
        <Col xs={2}>
          <a href="https://www.linkedin.com/in/katiechurchwell/">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:churchwellcatherine@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="https://github.com/katiechurchwell">
            <i className="bi bi-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default MobileView;
