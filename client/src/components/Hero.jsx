import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import randomWebcam from "../utils/randomWebcam";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

function Hero() {
  const [isLoading, setIsLoading] = useState(false);
  const [webcam, setWebcam] = useState();

  // fetch webcam data from api
  useEffect(() => {
    setIsLoading(true);
    const fetchWebcam = async () => {
      const options = {
        method: "GET",
        url: "https://katie-churchwell.herokuapp.com/webcam",
      };
      axios
        .request(options)
        .then(async (response) => {
          setWebcam(randomWebcam(response.data));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
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
