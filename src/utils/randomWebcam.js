export default function randomWebcam(webcams) {
  // Exclude Redmond (id=1614363511)
  var redmondIndex = webcams.findIndex(
    (webcams) => webcams.id === "1614363511"
  );
  webcams.splice(redmondIndex, 1);

  // Random selection
  var max = webcams.length;
  var i = Math.floor(Math.random() * max);
  var imgSrc = webcams[i].image.current.preview;
  return imgSrc;

  //   //subtitle
  //   var imgTitle = webcams[i].title;
  //   var title = document.createElement("div");
  //   title.setAttribute("id", "webcam-title");
  //   title.innerHTML =
  //     "<p>Randomly generated live image of the mountains of Oregon -- this one happens to be in " +
  //     imgTitle +
  //     ".</p><p>";
  //   container.appendChild(title);
  //   cssOverlay(imgSrc);
  //   averageColor(imgSrc);
};
