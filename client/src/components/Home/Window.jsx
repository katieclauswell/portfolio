import React from "react";
import window from "../../assets/images/Window.gif";
import windowTransparency from "../../assets/images/WindowTransparentBlue.png";

function Window(props) {
  return (
    <div
      role="img"
      id="window"
      style={{
        backgroundImage: props.webcam
          ? `url(${window}), url(${windowTransparency})`
          : "none",
      }}
    />
  );
}

export default Window;
