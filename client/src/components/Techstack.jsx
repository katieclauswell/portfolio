import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import { info } from "../data/info";
import LoadingSpinner from "./LoadingSpinner";
import PopoverDesc from "./PopoverDesc";
import axios from "axios";

function Techstack() {
  // github repos
  const [repos, setRepos] = useState();

  // popover
  const [show, setShow] = useState(false);
  const target = useRef(null);

  // loading
  const [isLoading, setIsLoading] = useState();

  // fetch github repos
  useEffect(() => {
    setIsLoading(true);
    const fetchRepos = async () => {
      const options = {
        method: "GET",
        url: "https://katie-churchwell.herokuapp.com/github",
      };

      axios
        .request(options)
        .then(async (response) => {
          const data = await response;
          setRepos(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchRepos();
  }, []);

  return (
    <Container>
      <Row className="m-3">
        <h2>Tech Stack</h2>
        <p>Click an icon to view my GitHub repositories built with that tool.</p>
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
                      {isLoading === true ? (
                        <LoadingSpinner />
                      ) : (
                        <PopoverDesc language={item.name} repos={repos} />
                      )}
                    </Popover.Body>
                  </Popover>
                }
              >
                <div
                  ref={target}
                  className="tech-icon"
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
