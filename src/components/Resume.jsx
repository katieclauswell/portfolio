import React from "react";
import { Container, Row } from "react-bootstrap";
// import resume from "../assets/Resume-Churchwell.pdf";

const info = {
  resume: [
    {
      position: "Software Engineer",
      dates: "2022 - Present",
      company: {
        name: "LearnPlatform by Instructure",
        website: "https://www.instructure.com/k12/products/learnplatform",
      },
      responsibilities: [
        "An Edtech Management Platform committed to expanding equitable access for all students to the teaching and technology that works best for them. Our tech stack includes rails, elixir and react.",
      ],
    },
    {
      position: "Executive Assistant",
      dates: "2021",
      company: {
        name: "Reynolds School District",
        website: "https://www.reynolds.k12.or.us/",
      },
      responsibilities: [
        "Supported the Chief Academic Officer, Executive Director of Schools and Assistant Superintendent of Student and Family Services.",
        "Partnered with leadership to build both long and short-term project roadmaps.",
        "Operated proactively to organize, prioritize, and coordinate multiple work streams to meet deadlines.",
        "Conducted complex studies, research, and evaluations pertaining to administrative problems, projects, and assigned areas of responsibility.",
        "Coordinated an organization-wide diversity and inclusion training with Dr. Robin DiAngelo, an author working in the fields of critical discourse analysis and whiteness studies.",
      ],
    },
    {
      position: "Environmental Educator",
      dates: "2019 - 2021",
      company: {
        name: "Wenatchee River Institute",
        website: "https://wenatcheeriverinstitute.org/",
      },
      responsibilities: [
        "Worked as part of a collaborative, agile team environment.",
        "Designed and implemented evaluation of impact of Field Education Programs.",
        "Lead and coordinated volunteer projects with several local youth conservation groups.",
        "Designed onboarding process; led training and provided mentorship.",
        "Used CRM tools (Firespring and Bloomerang) to support donor database management and communications including emails and mailings.",
        "Led community outreach efforts, developing new partnerships and programming.",
      ],
    },
    {
      position: "Retail Coordinator",
      dates: "​2016 - 2018",
      company: {
        name: "Schnitzer Properties",
        website: "https://www.schnitzerproperties.com/",
      },
      responsibilities: [
        "Created and maintained internal asset databases and introduced additional time-saving measures.",
        " Domain-specific understanding of contribution to collateral and documentation.",
        "Reviewed technical architectural drawings and creation of property site plans for legal, marketing, and operations for over 2.2M square feet of property.",
      ],
    },
  ],
};

function Resume() {
  return (
    <Container>
      {/* <Row className="m-3" id="resume-download">
        <a href={resume} download="Resume - Churchwell.pdf">
          <button type="button" className="btn btn-dark">
            Download
          </button>
        </a>
      </Row> */}
      <Row className="m-3">
        <h2>Katie Churchwell</h2>
      </Row>
      <Row className="m-3">
        <h3>Experience</h3>
      </Row>
      <Row className="m-3">
        {info.resume.map((role, index) => (
          <>
            <Row key={`role-${index}`}>
              {role.position}, {role.dates}
              <a
                href={role.company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {role.company.name}
              </a>
            </Row>
            <ul>
              {role.responsibilities.map((responsibility, index) => (
                <li key={`responsibility-${index}`}>{responsibility}</li>
              ))}
            </ul>
          </>
        ))}
      </Row>

      <Row className="m-3">
        <h3>Education</h3>
      </Row>
      <Row className="m-3">
        Full Stack Web Development Certificate, 2021 - 2022
        <p>University of Oregon Bootcamps</p>
        Bachelor of Arts in International Business, 2013 - 2016
        <p>University of South Florida</p>
      </Row>
      <Row className="m-3">
        <h3>Volunteer Work</h3>
      </Row>
      <Row className="m-3">
        Open Source Contributor, 2022
        <a
          href="https://github.com/mozilla/protocol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Protocol
        </a>
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
