import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import window from "../assets/images/Window.gif";
import blueNoise from "../assets/images/blue-noise.png";
import windowTransparency from "../assets/images/WindowTransparentBlue.png";
import laptopUrl from "../assets/images/sparkle.gif";

function Hero() {
  // choose random webcam image
  const [webcam, setWebcam] = useState();

  useEffect(() => {
    setWebcam(randomWebcam());
  }, []);

  return (
    <Container className="m-3">
      <Row>
        <h1>Katie Churchwell</h1>
        <h2>Full Stack Engineer</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        <div id="hero-container">
        <div
          role="img"
          id="webcam"
          style={{
            backgroundImage: webcam
              ? `url(${blueNoise}), url(${webcam.image})`
              : "none",
          }}
        />
        <div
          id="laptop"
          style={{
            background: `black`,
          }}
        >
          {webcam ? (
            <p>
              Live from{" "}
              {webcam.title}.
            </p>
          ) : (
            <p>Hello!</p>
          )}
        </div>
        <div
          role="img"
          id="window"
          style={{
            backgroundImage: webcam
              ? `url(${window}), url(${windowTransparency})`
              : "none",
          }}
        />
        </div>
      </Row>
    </Container>
  );
}

export default Hero;
