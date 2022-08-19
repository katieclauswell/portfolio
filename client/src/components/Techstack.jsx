import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import { info } from "../info/info";
import LoadingSpinner from "./LoadingSpinner";
import PopoverDesc from "./PopoverDesc";
import axios from "axios";

function Techstack() {
  // Github Repositories
  const [repos, setRepos] = useState();
  // Popover
  const [show, setShow] = useState(false);
  const target = useRef(null);
  // Loading
  const [isLoading, setIsLoading] = useState();

  console.log("/github");

  // get repo data
  useEffect(() => {
    setIsLoading(true);
    const fetchTopics = async () => {
      const options = {
        method: "GET",
        url: "/github",
      };

      axios
        .request(options)
        .then(async (response) => {
          const data = await response;
          console.log("data", data);
          setRepos(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchTopics();
  }, []);

  return (
    <Container>
      <Row className="m-3">
        <h2>Tech Stack</h2>
        <p>Click an icon to filter my GitHub repositories by that topic.</p>
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
                  className="m-1 justify-content-md-center"
                  onClick={() => setShow(!show)}
                >
                  <i className={item.icon}></i>
                  <div className="text-center">{item.name}</div>
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
