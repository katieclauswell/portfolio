import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import me from "../assets/images/headshot-transparent.png";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            roundedCircle
            fluid
            src={me}
            alt="Image of a woman with brown hair smiling at the camera."
            style={{background: `linear-gradient(rgb(250 146 173), rgb(255 168 0))`}}
          />
        </Col>
        <Col>
          <h2>Hey, I'm Katie!</h2>
          <h3>I'm a Full Stack Developer.</h3>
          <p>I have a background in both
          International Business and Education. Passionate about delivering
          performant, accessible applications.</p>
          <p>I earned a Bachelors in
          International Business with a concentration in Marketing from the
          University of South Florida and am a recent grad of a Full Stack Web
          Development bootcamp at the University of Oregon.</p>
        </Col>
        <Col>
        <h2>Let's Connect</h2>
        Info, info, info...
        </Col>
      </Row>
    </Container>
  );
}

export default About;
