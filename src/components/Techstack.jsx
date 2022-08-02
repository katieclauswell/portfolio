import { setSelectionRange } from "@testing-library/user-event/dist/utils";
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
import PopTest from "../components/PopTest"

function Techstack() {
  // // Filter technologies by category
  // const languages = info.technologies.filter(
  //   (technology) => technology.category === "language"
  // );
  // const frameworks = info.technologies.filter(
  //   (technology) => technology.category === "framework"
  // );
  // const databases = info.technologies.filter(
  //   (technology) => technology.category === "database"
  // );

  // Github Repositories
  const [repos, setRepos] = useState();
  // const [jsRepos, setJsRepos] = useState();

  // Fetch repo data from api
  useEffect(() => {
    const fetchRepos = async () => {
      fetch("https://api.github.com/legacy/repos/search/user:katiechurchwell", {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then(async (response) => {
          const data = await response.json();
          // setJsRepos(
          //   data.repositories.filter((repo) => repo.language === "JavaScript")
          // );
          setRepos(data.repositories);
        })
        .catch((error) => console.error(error));
    };
    fetchRepos();
  }, []);

  // Popover
  const [show, setShow] = useState(false);
  const target = useRef(null);

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
                    <PopTest language={item.name} repos={repos}/>
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
