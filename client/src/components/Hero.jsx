import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import windowUrl from "../assets/images/window-2.png";

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
      <img onLoad={handleImageLoad} src={windowUrl} id="window" />
      <Row>
        <div
          id="webcam"
          style={{
            backgroundImage: webcam ? `url(${webcam.image})` : "none",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: `${windowDimensions.height}px`,
            width: `${windowDimensions.width}px`,
          }}
        />
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
