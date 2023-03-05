// import React, { useState, useRef } from "react";

function OS(props) {
  const { webcam, background } = props;

  // date
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date().toLocaleString("en-us", options);

  // closing windows
  function closeWindow(id) {
    var elementToHide = document.getElementById(id);
    elementToHide.style.visibility = "hidden";
  }

  return (
    // computer
    <div
      className="border border-light d-flex flex-column"
      style={{
        "background-image": `url(${background})`,
        "background-size": "cover",
        "font-size": "x-small",
      }}
    >
      {/* taskbar */}
      <div
        className="border border-dark d-flex justify-content-between"
        style={{ "background-color": "silver" }}
      >
        <i
          class="bi bi-apple p-1"
          style={{
            "font-size": "x-small",
          }}
        />
        <div className="m-1">{date}</div>
      </div>

      {/* dialog box */}
      <div id="dialog-box">
        <div
          className="border border-dark m-3"
          style={{ "background-color": "Gainsboro" }}
        >
          <div className="border-bottom border-dark d-flex justify-content-between">
            <i
              class="bi bi-x-square"
              style={{
                "font-size": "x-small",
                margin: "0.5px",
                cursor: "pointer",
              }}
              onClick={() => closeWindow("dialog-box")}
            />
            <hr />
            toolbar
            <hr />
          </div>
          <div className="p-1">
            Randomly generated live image! This one happens to be in{" "}
            {webcam.title}.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OS;
