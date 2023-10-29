import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import pantry from "../assets/images/project-mockups/pantry.png";
import chewview from "../assets/images/project-mockups/chewview.png";
import nasteroids from "../assets/images/project-mockups/nasteroids.png";

function Work() {
  const info = {
    portfolio: [
      {
        title: "Pantry",
        live: "https://pantry-app.herokuapp.com/",
        source: "https://github.com/katiechurchwell/Pantry",
        image: pantry,
        description:
          "Full stack web application that allows the user to search for recipes by ingredient. Includes user authentication, templating with Handlebars.js, mySQL database.",
      },
      {
        title: "Chew View",
        live: "https://katiechurchwell.github.io/Chew-View/",
        source: "https://github.com/katiechurchwell/Chew-View",
        image: chewview,
        description:
          "Allows the user to search for local restaurants and movies to watch. Built using the Travel Advisor and TMDB Movie Database APIs, Bootstrap and JavaScript.",
      },
      {
        title: "NASATEROIDS",
        live: "https://asteroids.onrender.com/",
        source: "https://github.com/katiechurchwell/NASAteroids",
        image: nasteroids,
        description:
          "A recreation of the 1979 Atari game built in React. This application utilizes MUI components and an NES-style CSS frame work for UI, MongoDB and GraphQL for database models.",
      },
    ],
  };

  return (
    <Container id="work">
      <Row className="m-3">
        <h2>Work</h2>
        <p>A few showcased projects.</p>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {info.portfolio
          .slice(0)
          .reverse()
          .map((project, index) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark m-2">Live</Button>
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark m-2">Source Code</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Work;
