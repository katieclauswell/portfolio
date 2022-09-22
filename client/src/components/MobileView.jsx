import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function MobileView() {
  return (
    <Container className="m-1">
      <Row className="m-3">
        <h1>
          Hey, my name is Katie Churchwell and I'm a Full Stack Developer. 👋
        </h1>
      </Row>
      <Row className="m-3">
        <h2>Let's connect! 😁</h2>
      </Row>

      <Row className="text-center">
        <Col>
          <a href="mailto:churchwellcatherine@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
        </Col>

        <Col>
          <a href="https://github.com/katiechurchwell">
            <i className="bi bi-github"></i>
          </a>
        </Col>

        <Col>
          <a href="https://www.linkedin.com/in/katiechurchwell/">
            <i className="bi bi-linkedin"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default MobileView;
