import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { info } from "../info/Info";

function Work() {
  return (
    <Container id="work">
      <Row>
        <h2>Work</h2>
      </Row>
      <Row>
        {info.portfolio.map((project, index) => (
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <a href={project.live}>
                <Button variant="primary m-2">Live</Button>
              </a>
              <a href={project.source}>
                <Button variant="primary m-2">Repo</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Work;
