import React from "react";
import laptopUrl from "../../assets/images/snoopy.gif";

function Laptop() {
  return (
    <div
      id="laptop"
      role="img"
      style={{
        backgroundImage: `url(${laptopUrl})`,
      }}
    />
  );
}

export default Laptop;
