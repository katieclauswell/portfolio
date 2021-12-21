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
    console.log(webcam);
    changeBackground(webcam);
  });
});

changeBackground = function (webcam) {
  //generate DOM elements
  var container = document.getElementById("landing-page");
  var img = document.createElement("img");
  container.appendChild(img);
  img.setAttribute("id", "webcam");6

  //random index
  var max = webcam.result.webcams.length;
  var i = Math.floor(Math.random() * max);

  //get random img
  var imgSrc = webcam.result.webcams[i].image.current.preview;
  img.src = imgSrc;

  //titling img
  var imgTitle = webcam.result.webcams[i].title;
  img.setAttribute("alt", imgTitle);
  var title = document.createElement("div");
  title.setAttribute("id", "webcam-title");
  title.innerHTML = "<p>Live random image of the mountains of Oregon. <br> This one happens to be in "  + imgTitle + ".</p>"
  container.appendChild(title);
};

// //parallax
// window.addEventListener("scroll", function (event) {
//   var topDistance = window.scrollY;
//   layers = document.querySelectorAll("[data-type='parallax']");

//   for (var i = 0; i < layers.length; i++) {
//     depth = layers[i].getAttribute("data-depth");
//     movement = (topDistance * -1) * depth;
//     translate3d = "translate3d(0, " + movement + "px, 0)";
//     // layers[i].style["-webkit-transform"] = translate3d;
//     // layers[i].style["-moz-transform"] = translate3d;
//     // layers[i].style["-ms-transform"] = translate3d;
//     // layers[i].style["-o-transform"] = translate3d;
//     layers[i].style.transform = translate3d;
//   }
// });
