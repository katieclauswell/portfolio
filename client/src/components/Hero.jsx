import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import window from "../assets/images/Window.gif";
import blueNoise from "../assets/images/blue-noise.png";
import windowTransparency from "../assets/images/WindowTransparentBlue.png";
import laptopUrl from "../assets/images/static.gif";

function Hero() {
  // choose random webcam image
  const [webcam, setWebcam] = useState();

  useEffect(() => {
    setWebcam(randomWebcam());
  }, []);

  return (
    <Container className="m-3">
      <Row>
        <Col>
          <h1>Katie Churchwell</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
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
          role="img"
          id="laptop"
          style={{
            backgroundImage: `url(${laptopUrl})`,
          }}
        />
        <div
          role="img"
          id="window"
          style={{
            backgroundImage: webcam
              ? `url(${window}), url(${windowTransparency})`
              : "none",
          }}
        />
      </Row>
      <Row>
        {webcam ? (
          <p className="m-2">
            Randomly generated live image; this one
            happens to be in {webcam.title}.
          </p>
        ) : (
          <p>Hello!</p>
        )}
      </Row>
    </Container>
  );
}

export default Hero;
