import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import window from "../assets/images/Window.gif";
import blueNoise from "../assets/images/blue-noise.png";
import windowTransparency from "../assets/images/WindowTransparentBlue.png";

function Hero() {
  const [webcam, setWebcam] = useState();

  // set webcam image height and width equal to window image
  const [windowDimensions, setWindowDimensions] = useState({
    height: "100",
    width: "100",
  });

  const handleImageLoad = (event) => {
    setWindowDimensions({
      height: event.target.clientHeight,
      width: event.target.clientWidth,
    });
  };

  // choose random webcam image
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
          alt="Pixel art of a window sill with a hot cup of coffee and an open laptop overlooking mountains in Oregon"
          id="webcam"
          style={{
            backgroundImage: webcam
              ? `url(${window}), url(${windowTransparency}), url(${blueNoise}), url(${webcam.image})`
              : "none",
            backgroundPosition:
              "center center, center center, center 6px, center 6px",
            backgroundSize: "100%, 100%, 100% 296px, 100% 296px",
            backgroundRepeat: "no-repeat",
            height: `400px`,
            width: `500px`,
          }}
        >
          {/* <img onLoad={handleImageLoad} src={windowUrl} id="window" /> */}
        </div>
      </Row>
      <Row>
        {webcam ? (
          <p className="m-2">
            Randomly generated live image of the mountains of Oregon -- this one
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
