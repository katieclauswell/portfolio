import React from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

function About() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      A Daruma (達磨) is a Japanese traditional doll modeled after Bodhidharma,
      the founder of the Zen tradition of Buddhism. When purchased, the figure's
      eyes are both blank white. The owner selects a goal or wish and paints in
      the left eye. Once the goal is achieved, the right eye is filled in.
    </Tooltip>
  );

  return (
    <>
      <Row className="m-3">
        <h2>About</h2>
      </Row>
      <Row className="m-3">
        <Col id="headshot-container">
          <div role="img" id="headshot" />
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <div id="headshot-tool-tip" />
          </OverlayTrigger>
        </Col>
        <Col xs={7}>
          <Row>
            <p>
              Hi, I'm Katie Clauswell, a full stack engineer with a background
              in education.
            </p>
            <p>
              I earned a Bachelors in International Business with a
              concentration in Marketing from the University of South Florida
              and am a graduate of a Full Stack Web Development bootcamp at the
              University of Oregon.
            </p>
            <p>
              Currently working on LearnPlatform at Instructure, an EdTech
              management platform focused on expanding equitable access to
              education through innovative technology. Our tech stack includes
              React, Elixir, and Rails.
            </p>
          </Row>
          <Row className="justify-content-center" xs={2} md={4} lg={6}>
            <a href="mailto:katie.clauswell@gmail.com">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://github.com/katieclauswell">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/katieclauswell/">
              <i className="bi bi-linkedin"></i>
            </a>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default About;
