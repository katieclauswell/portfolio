import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import randomWebcam from "../utils/randomWebcam"

function Hero() {
  const [loading, setLoading] = useState(false);
  const [webcam, setWebcam] = useState([]);

  // fetch webcam data from api
  useEffect(() => {
    const fetchWebcam = async () => {
      setLoading(true);
      fetch(
        "https://api.windy.com/api/webcams/v2/list/category=mountain/region=US.OR/?show=webcams:image",
        {
          method: "GET",
          headers: {
            "x-windy-key": "fRBdejZXV9tukKAYkPngOtGOg0bYrvV9",
          },
        }
      ).then(function (response) {
        response.json().then(function (webcam) {
          setWebcam(randomWebcam(webcam.result.webcams))
        });
      });
      setLoading(false);
    };

    fetchWebcam();
  }, []);

  return (
    <Container>
      <Row><img src={webcam}/></Row>
      <Row>
        <Col>Katie Churchwell</Col>
        <Col>Api message</Col>
      </Row>
    </Container>
  );
}

export default Hero;
