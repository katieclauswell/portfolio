import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { info } from "../data/info";

function Work() {
  return (
    <Container id="work">
      <Row className="m-3">
        <h2>Work</h2>
        <p>A few showcased projects.</p>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {info.portfolio
          .slice(0)
          .reverse()
          .map((project, index) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark m-2">Live</Button>
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark m-2">Source Code</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Work;
