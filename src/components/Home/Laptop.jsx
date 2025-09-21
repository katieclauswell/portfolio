import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Button } from "react-bootstrap";
import randomWebcam from "../../utils/randomWebcam";

function Laptop({ webcam, setWebcam }) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleGenerateWebcam = () => {
    const newWebcam = randomWebcam();
    setWebcam(newWebcam);
  };

  return (
    <div ref={ref}>
      <div
        id="laptop"
        role="img"
        style={{
          backgroundImage: `url("/images/bliss-wallpaper.jpg")`,
        }}
      />

      <div id="laptop-tool-tip" onClick={handleClick} />

      <Overlay
        show={show}
        target={target}
        placement="right-end"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            {webcam ? (
              <>
                <p>
                  Randomly generated live image! This one happens to be in{" "}
                  {webcam.title}.
                </p>
                <p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleGenerateWebcam}
                  >
                    Teleport!
                  </Button>
                </p>
              </>
            ) : (
              <p>Hello World!</p>
            )}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default Laptop;
