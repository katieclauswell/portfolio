import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/Resume-Churchwell.pdf";

function Resume() {
  return (
    <Container className="p-3">
      <Row className="m-3" id="resume-download">
        <a href={resume} download="Resume - Churchwell.pdf">
          <button type="button" class="btn btn-primary">
            Download
          </button>
        </a>
      </Row>
      <Row className="m-3">
        <h2>Katie Churchwell</h2>
        <h5>
          <em>Leavenworth, WA 98826</em>
        </h5>
      </Row>
      <Row className="m-3">
        <h3>Experience</h3>
        <h5>Executive Assistant, 2021</h5>
        <h5>
          <em>Reynolds School District, Fairview, OR</em>
        </h5>
        <ul>
          <li>
            Supported the Chief Academic Officer, Executive Director of Schools
            and Assistant Superintendent of Student and Family Services.
          </li>
          <li>
            Partnered with leadership to build both long and short-term project
            roadmaps.
          </li>
          <li>
            Operated proactively to organize, prioritize, and coordinate
            multiple work streams to meet deadlines.
          </li>
          <li>
            Conducted complex studies, research, and evaluations pertaining to
            administrative problems, projects, and assigned areas of
            responsibility.
          </li>
          <li>
            Coordinated an organization-wide diversity and inclusion training
            with <a href="https://www.robindiangelo.com/">Dr. Robin DiAngelo</a>
            .
          </li>
        </ul>
      </Row>
      <Row className="m-3">
        <h5>Environmental Educator, 2019 - 2021</h5>
        <h5>
          <em>
            <a href="https://wenatcheeriverinstitute.org/">
              Wenatchee River Institute
            </a>
            , Leavenworth WA
          </em>
        </h5>
        <h5>
          <em>Washington Service Corps, Moran State Park, Olga, WA</em>
        </h5>
        <ul>
          <li>Worked as part of a collaborative, agile team environment.</li>
          <li>
            Designed and implemented evaluation of impact of Field Education
            Programs.
          </li>
          <li>
            Lead and coordinated volunteer projects with several local youth
            conservation groups.
          </li>
          <li>
            Designed onboarding process; led training and provided mentorship.
          </li>
          <li>
            Used CRM tools (Firespring and Bloomerang) to support donor database
            management and communications including emails and mailings.
          </li>
          <li>
            Led community outreach efforts, developing new partnerships and
            programming.
          </li>
        </ul>
      </Row>
      <Row className="m-3">
        <h5>Retail Coordinator, ​2016 - 2018</h5>
        <h5>
          <em>Harsch Investment Properties, Portland, OR</em>
        </h5>
        <ul>
          <li>
            Created and maintained internal asset databases and introduced
            additional time-saving measures.
          </li>
          <li>
            Domain-specific understanding of contribution to collateral and
            documentation.
          </li>
          <li>
            Reviewed technical architectural drawings and creation of property
            site plans for legal, marketing, and operations for over 2.2M square
            feet of property.
          </li>
        </ul>
      </Row>
      <Row className="m-3">
        <h3>Education</h3>
      </Row>
      <Row className="m-3">
        <Col>
          <h5>Full Stack Web Development Certificate, 2021 - 2022</h5>
          <h5>University of Oregon Bootcamps </h5>
        </Col>
        <Col>
          <h5>Bachelor of Arts in International Business, 2013 - 2016</h5>
          <h5>University of South Florida</h5>
        </Col>
      </Row>
      <Row className="m-3">
        <h3>Volunteer Work</h3>
        <h5>Open Source Contributor, 2022</h5>
        <h5>
          <a href="https://github.com/mozilla/protocol">Mozilla Protocol</a>
        </h5>
        <p>
          Design system for Mozilla and Firefox websites. It establishes a
          common design language, provides reusable coded components and
          outlines high level guidelines for content and accessibility.
        </p>
      </Row>
    </Container>
  );
}

export default Resume;
