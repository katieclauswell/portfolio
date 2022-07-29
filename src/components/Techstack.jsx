import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

function Techstack() {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col>
            <h4>Languages</h4>
          </Col>
          <Col>
            <i class="devicon-html5-plain"></i>
            <p>HTML5</p>
          </Col>
          <Col>
            <i class="devicon-css3-plain"></i>
            <p>CSS3</p>
          </Col>
          <Col>
            <i class="devicon-javascript-plain"></i>
            <p>JavaScript</p>
          </Col>
          <Col>
            <i class="devicon-nodejs-plain"></i>
            <p>Nodejs</p>
          </Col>
        </Row>
      </ListGroup.Item>

      <ListGroup.Item>Frameworks</ListGroup.Item>
      <ListGroup.Item>Databases</ListGroup.Item>
      <ListGroup.Item>Design</ListGroup.Item>
      <ListGroup.Item>Other</ListGroup.Item>
    </ListGroup>
  );
}

export default Techstack;
