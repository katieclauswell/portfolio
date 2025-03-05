import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import randomWebcam from "../../utils/randomWebcam";
import Window from "./Window";
import Laptop from "./Laptop";
import blueNoise from "../../assets/images/blue-noise.png";

function Hero() {
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
      <Container id="container">
        <div
          role="img"
          id="webcam"
          style={{
            backgroundImage: webcam
              ? `url(${blueNoise}), url(${webcam.image})`
              : "none",
          }}
        />
        <Laptop webcam={webcam} setWebcam={setWebcam} />
        <Window webcam={webcam} />
      </Container>
    </>
  );
}

export default Hero;
