import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import window from "../assets/images/Window.gif";
import blueNoise from "../assets/images/blue-noise.png";
import windowTransparency from "../assets/images/WindowTransparentBlue.png";
import Laptop from "../components/Laptop";

function Hero() {
  // choose random webcam image
  const [webcam, setWebcam] = useState();

  useEffect(() => {
    setWebcam(randomWebcam());
  }, []);

  return (
    <>
      <Row className="m-3">
        <h1>Katie Churchwell</h1>
        <h2>Full Stack Engineer</h2>
      </Row>
      <Container
        style={{
          width: "90vw",
        }}
      >
        <div
          role="img"
          id="webcam"
          style={{
            backgroundImage: webcam
              ? `url(${blueNoise}), url(${webcam.image})`
              : "none",
          }}
        />

        <Laptop webcam={webcam} />
        <div
          role="img"
          id="window"
          style={{
            backgroundImage: webcam
              ? `url(${window}), url(${windowTransparency})`
              : "none",
          }}
        />
      </Container>
    </>
  );
}

export default Hero;
