import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import WindowFrame from "./WindowFrame";
import LoadingSpinner from "./LoadingSpinner";

function Hero() {
  const [isLoading, setIsLoading] = useState(false);
  const [webcam, setWebcam] = useState();

  // fetch webcam data from api
  useEffect(() => {
    const fetchWebcam = async () => {
      setIsLoading(true);
      fetch(
        "https://api.windy.com/api/webcams/v2/list/category=mountain/region=US.OR/?show=webcams:image",
        {
          method: "GET",
          headers: {
            "x-windy-key": "fRBdejZXV9tukKAYkPngOtGOg0bYrvV9",
          },
        }
      ).then(async (response) => {
        const data = await response.json();
        setWebcam(randomWebcam(data.result.webcams));
        setIsLoading(false);
      });
    };
    fetchWebcam();
  }, []);

  return (
    <Container className="m-3">
      {isLoading === true ? (
        <LoadingSpinner />
      ) : (
        <>
          <Row>
            <div
              id="webcam"
              style={{
                backgroundImage: webcam
                  ? `url(${webcam.image.current.preview})`
                  : "none",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Col>
              <h1>Katie Churchwell</h1>
            </Col>
            <Col>
              {webcam ? (
                <p className="m-2">
                  Randomly generated live image of the mountains of Oregon --
                  this one happens to be in {webcam.title}.
                </p>
              ) : (
                <p>Hello!</p>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Hero;
