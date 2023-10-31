import React, { useState, useRef } from "react";
import laptopUrl from "../../assets/images/bliss-wallpaper.jpg";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

function Laptop(props) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);
  const [target, setTarget] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef(null);

  const getRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(newNumber);
    setIsAnimated(true);
  };

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <div
        id="laptop"
        role="img"
        style={{
          backgroundImage: `url(${laptopUrl})`,
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
            {props.webcam ? (
              <>
                <p>
                  Randomly generated live image! This one happens to be in{" "}
                  {props.webcam.title}.
                </p>
                <p>
                  <i
                    className={`bi bi-dice-${number} ${
                      isAnimated ? "spin-animated" : ""
                    }`}
                    onClick={getRandomNumber}
                  />
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
