import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Popover,
  Overlay,
  OverlayTrigger,
} from "react-bootstrap";
import { info } from "../info/info";
import PopoverDesc from "./PopoverDesc";
import axios from "axios";



function Techstack() {
  // Github Repositories
  const [repos, setRepos] = useState();
  // Popover
  const [show, setShow] = useState(false);
  const target = useRef(null);

  // get repo data
  useEffect(() => {
    const fetchTopics = async () => {
      const options = {
        method: "GET",
        url: "http://localhost:8000/github",
      };
  
      axios
        .request(options)
        .then(async (response) => {
          const data = await response;
          setRepos(data.data);
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
