import React from "react";

function Window(props) {
  return (
    <div
      role="img"
      id="window"
      style={{
        backgroundImage: props.webcam
          ? `url("/images/Window.gif"), url("/images/WindowTransparentBlue.png")`
          : "none",
      }}
    />
  );
}

export default Window;
