import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import { info } from "../../data/info";
import PopoverDesc from "./PopoverDesc";

function TechStack() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function filter(name) {
    const repos = info.projects;
    return repos.filter((repo) => repo.topics.includes(name));
  }

  return (
    <Container>
      <Row className="m-3">
        <h2>Tech Stack</h2>
        <p>
          Click an icon to view my GitHub repositories built with that tool.
        </p>
      </Row>
      <Row xs={2} md={4} lg={6} className="m-1">
        {info.technologies.map((item, index) => (
          <>
            <Col className="d-flex justify-content-center" key={index}>
              <OverlayTrigger
                trigger="click"
                key={index}
                placement="left"
                overlay={
                  <Popover id={`popover-positioned-left`}>
                    <Popover.Header as="h3">{`${item.name}`}</Popover.Header>
                    <Popover.Body>
                        <PopoverDesc name={item.name} filter={filter} />
                    </Popover.Body>
                  </Popover>
                }
              >
                <div
                  ref={target}
                  className="tech-icon m-2"
                  onClick={() => setShow(!show)}
                >
                  {filter(item.name).length ? (
                    <>
                      <i className={item.icon} />
                      <div>{item.name}</div>
                    </>
                  ) : (
                    <>
                      <i className={`${item.icon} inactive`} />
                      <div className="inactive">{item.name}</div>
                    </>
                  )}
                </div>
              </OverlayTrigger>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default TechStack;
