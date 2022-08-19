export default function randomWebcamImage(webcams) {
  // Exclude Redmond (id=1614363511)
  var redmondIndex = webcams.findIndex(
    (webcams) => webcams.id === "1614363511"
  );
  webcams.splice(redmondIndex, 1);

  // Random selection
  var max = webcams.length;
  var i = Math.floor(Math.random() * max);
  return webcams[i];
}
