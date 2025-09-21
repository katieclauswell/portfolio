import { Row, Col } from "react-bootstrap";

const resume = {
  experience: [
    {
      position: "Software Engineer",
      dates: "2022 - Present",
      company: {
        name: "LearnPlatform by Instructure",
        description: "Our mission is to create the most valuable solution for institutions to manage, monitor, and maximize ROI and outcomes for their ed tech technologies.",
        website: "https://www.instructure.com/k12/products/learnplatform",
      },
      responsibilities: [
        "Engineered scalable product library features adopted across thousands of institutions in a distributed Agile team environment.",
        "Architected and deployed a federated Product Details module using Webpack Module Federation, achieving measurable improvements in Core Web Vitals — notably Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).",
        "Designed retired product feature enabling partners to manage unsupported listings; reduced library clutter by retiring 200+ products, 570+ duplicates, and 100+ custom entries.",
        "Optimized product discovery and engagement features, driving adoption across 80+ enterprise accounts and 1,100+ custom listings.",
        "Implemented AI-powered search and accessibility enhancements, improving retention by making content discoverable and usable across diverse global user groups.",
        "Collaborated cross-functionally with product, design, and QA teams to deliver high-quality, scalable features on time.",
        "Mentored junior engineers through code reviews and knowledge-sharing sessions, raising team proficiency in React/TypeScript best practices.",
        "Integrated monitoring and performance optimization into product features, ensuring reliability and visibility in production environments."
      ],
    },
    {
      position: "Open Source Contributer",
      dates: "2022",
      company: {
        name: "Mozilla, Protocol Design System",
        description: "Node.js-based web design system published to NPM.",
        website: "https://github.com/mozilla/protocol"
      },
      responsibilities: [
        "Contributed to Mozilla’s design system, creating reusable, accessible UI components for Mozilla and Firefox websites.",
        "Ensured compliance with accessibility best practices (WCAG) and responsive design standards.",
        "Optimized performance of design system components, reducing load times and improving rendering efficiency for high-traffic Mozilla websites.",
        "Collaborated with distributed, open-source community contributors, following peer review processes and CI/CD pipelines to maintain high-quality, production-ready code."
      ]
    },
  ],
  education: [
    {
      degree: "Full Stack Web Development Certificate",
      dates: "2021 - 2022",
      institution: "University of Oregon Bootcamps",
    },
    {
      degree: "Bachelor of Arts in International Business",
      dates: "2013 - 2016",
      institution: "University of South Florida",
    },
  ]
};

function Resume() {
  return (
    <Col>
      <Row className="m-3">
        <h2>Experience</h2>
      </Row>
      <Row className="m-3">
        <Row className="m-3">
          {resume.experience.map((role, index) => (
            <>
              {role.position}, {role.dates}
              <a
                href={role.company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {role.company.name}
              </a>
              <p><em>{role.company.description}</em></p>
              <ul>
                {role.responsibilities.map((responsibility, index) => (
                  <li key={`responsibility-${index}`}>{responsibility}</li>
                ))}
              </ul>
            </>
          ))}
        </Row>
        <Row>
          <h3>Education</h3>
        </Row>
        <Row className="m-3">
          {resume.education.map((education) => (
            <>
              {education.degree}, {education.dates}
              <p>{education.institution}</p>
            </>
          ))}
        </Row>
      </Row>
    </Col>
  );
}

export default Resume;
