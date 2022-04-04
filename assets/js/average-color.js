function averageColor(webcamUrl) {
  const colorThief = new ColorThief();
  const img = new Image();

  img.addEventListener("load", function () {
    // generate rgb
    const rgb = colorThief.getColor(img);
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];
    const rgbFormatted = `${r}, ${g}, ${b}`;
    //set root variable
    document.documentElement.style.setProperty(
      "--third",
      `rgb(${rgbFormatted})`
    );
    //convert rgb to hex and define name
    const rgbToHex =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    var n_match = ntc.name(rgbToHex);
    n_rgb = n_match[0]; // RGB value of closest match
    n_name = n_match[1]; // Text string: Color name
    n_exactmatch = n_match[2]; // True if exact color match

    //load blurb on page
    const blurb = `Some elements on this page are styled with its average color, ${n_match[1]}.`;
    const webcamTitle = document.getElementById("webcam-title");
    webcamTitle.append(blurb);
  });

  img.crossOrigin = "Anonymous";
  img.src = webcamUrl;
}