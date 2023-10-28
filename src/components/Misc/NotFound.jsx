import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function NotFound() {
  return (
    <Container fluid>
      <Row className="p-5">
        <Col className="text-center">
          <Row>
            <i className="bi bi-emoji-frown"></i>
          </Row>
          <Row>
            <h1>404 Not Found</h1>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
