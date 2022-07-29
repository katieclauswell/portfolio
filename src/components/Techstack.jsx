import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { info } from "../info/Info";

function Techstack() {
  // Filter by category
  const languages = info.technologies.filter(
    (technology) => technology.category === "language"
  );
  const frameworks = info.technologies.filter(
    (technology) => technology.category === "framework"
  );
  const databases = info.technologies.filter(
    (technology) => technology.category === "database"
  );

  return (
    <Container>
      <Row>
        <h2>Tech Stack</h2>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <h3>Languages</h3>
        </Col>
        {languages.map((item, index) => (
          <Col>
            <div id={index} className="m-1">
              <i class={item.icon}></i>
              <div class="card-title">{item.name}</div>
            </div>
          </Col>
        ))}
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <h3>Frameworks</h3>
        </Col>
        {frameworks.map((item, index) => (
          <Col>
            <div id={index} className="m-1">
              <i class={item.icon}></i>
              <div class="card-title">{item.name}</div>
            </div>
          </Col>
        ))}
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <h3>Databases</h3>
        </Col>
        {databases.map((item, index) => (
          <Col>
            <div id={index} className="m-1">
              <i class={item.icon}></i>
              <div class="card-title">{item.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Techstack;
