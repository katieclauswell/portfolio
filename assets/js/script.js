//webcam API
fetch(
  "https://api.windy.com/api/webcams/v2/list/category=mountain/region=US.OR?show=webcams:image",
  {
    method: "GET",
    headers: {
      "x-windy-key": "fRBdejZXV9tukKAYkPngOtGOg0bYrvV9",
    },
  }
).then(function (response) {
  response.json().then(function (webcam) {
    changeBackground(webcam);
  });
});

changeBackground = function (webcam) {
  //random index
  var max = webcam.result.webcams.length;
  var i = Math.floor(Math.random() * max);

  //set background
  var container = document.getElementById("landing-page");
  var imgSrc = webcam.result.webcams[i].image.current.preview;
  container.style.backgroundImage = "url('" + imgSrc + "')"

  //titling img
  var containerText = document.getElementById("landing-page-text");
  var imgTitle = webcam.result.webcams[i].title;
  var title = document.createElement("div");
  title.setAttribute("id", "webcam-title");
  title.innerHTML = "<p>Randomly generated live background of the mountains in Oregon. <br> This one happens to be in "  + imgTitle + ".</p>"
  containerText.appendChild(title);
};

