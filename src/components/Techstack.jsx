import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { info } from "../info/info";

function Techstack() {
  return (
    <Container>
      <Row className="m-3">
        <h2>Tech Stack</h2>
      </Row>
      <Row xs={2} md={4} lg={6} className="m-1">
        {info.technologies.map((item, index) => (
          <>
            <Col className="d-flex justify-content-center" key={index}>
                <div
                  className="m-1 justify-content-md-center"
                >
                  <i className={item.icon}></i>
                  <div className="text-center">{item.name}</div>
                </div>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Techstack;
