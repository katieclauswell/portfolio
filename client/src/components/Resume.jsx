import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/Resume-Churchwell.pdf";
import { info } from "../data/info";

function Resume() {
  return (
    <Container>
      <Row className="m-3" id="resume-download">
        <a href={resume} download="Resume - Churchwell.pdf">
          <button type="button" className="btn btn-primary">
            Download
          </button>
        </a>
      </Row>
      <Row>
        <h1>Katie Churchwell</h1>
      </Row>
      <Row>
        <h2>Experience</h2>
      </Row>
      <Row>
        {info.resume.map((role, index) => (
          <>
            <Row key={`role-${index}`}>
              {role.position}, {role.dates}
              <a href={role.company.website}>{role.company.name}</a>
            </Row>
            <ul>
              {role.responsibilities.map((responsibility, index) => (
                <li key={`responsibility-${index}`}>{responsibility}</li>
              ))}
            </ul>
          </>
        ))}
      </Row>

      <Row>
        <h2>Education</h2>
      </Row>
      <Row>
        Full Stack Web Development Certificate, 2021 - 2022
        <p>University of Oregon Bootcamps</p>
        Bachelor of Arts in International Business, 2013 - 2016
        <p>University of South Florida</p>
      </Row>
      <Row>
        <h2>Volunteer Work</h2>
      </Row>
      <Row>
        Open Source Contributor, 2022
        <a href="https://github.com/mozilla/protocol">Mozilla Protocol</a>
        <ul>
          <li>
            Design system for Mozilla and Firefox websites. It establishes a
            common design language, provides reusable coded components and
            outlines high level guidelines for content and accessibility.
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default Resume;
