import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Popover,
  Overlay,
  OverlayTrigger,
} from "react-bootstrap";
import { info } from "../info/Info";
import PopoverDesc from "./PopoverDesc";

function Techstack() {
  // Github Repositories
  const [repos, setRepos] = useState();
  // Popover
  const [show, setShow] = useState(false);
  const target = useRef(null);

  // Fetch repo data from api
  const query_topics = {
    query: `
  query {
    user(login: "katiechurchwell") {
      repositories(
        first: 100
        affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
      ) {
        nodes {
          name
          repositoryTopics(first: 100) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
  `,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + "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",
  };

  useEffect(() => {
    const fetchTopics = async () => {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(query_topics),
      }).then(async (response) => {
        const data = await response.json();

        // a mess of destructuring, yikes 😰
        const reformattedData = data.data.user.repositories.nodes.map(({name, repositoryTopics}) => ({name:name, topics: repositoryTopics.nodes.map((value) => value.topic.name)}));
        setRepos(reformattedData)
      });
    };
    fetchTopics();
  }, []);
// End fetch repo data from api

  return (
    <Container>
      <Row className="m-3">
        <h2>Tech Stack</h2>
        <p>
          Please click an icon to see examples of my work utilizing that
          technology.
        </p>
      </Row>
      <Row xs={2} md={4} lg={6} className="m-1">
        {info.technologies.map((item, index) => (
          <>
            <Col className="d-flex justify-content-center" key={index}>
              <OverlayTrigger
                trigger="click"
                key={index}
                placement="right"
                overlay={
                  <Popover id={`popover-positioned-right`}>
                    <Popover.Header as="h3">{`${item.name}`}</Popover.Header>
                    <Popover.Body>
                      <PopoverDesc language={item.name} repos={repos} />
                    </Popover.Body>
                  </Popover>
                }
              >
                <div
                  ref={target}
                  className="m-1"
                  onClick={() => setShow(!show)}
                >
                  <i className={item.icon}></i>
                  <div>{item.name}</div>
                </div>
              </OverlayTrigger>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Techstack;
