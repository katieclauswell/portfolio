import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import randomWebcam from "../utils/randomWebcam";
import WindowFrame from "./WindowFrame";
import LoadingSpinner from "../components/LoadingSpinner";

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
        setIsLoading(false);
        setWebcam(randomWebcam(data.result.webcams));
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
        <div
          id="webcam"
          style={{
            backgroundImage: `url(${webcam.image.current.preview})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <p className="m-2">Randomly generated live image of the mountains of Oregon -- this one happens to be in {webcam.title}.</p>
        </>
      )}
    </Container>
  );
}

export default Hero;
