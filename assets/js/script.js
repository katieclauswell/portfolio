//navbar
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.visibility = "-50";
//   }
// }

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
  //generate DOM elements
  var container = document.getElementById("landing-page");

  //random index
  var max = webcam.result.webcams.length;
  var i = Math.floor(Math.random() * max);

  //get random img
  var imgSrc = webcam.result.webcams[i].image.current.preview;
  container.style.backgroundImage = "url('" + imgSrc + "')"

  //titling img
  var imgTitle = webcam.result.webcams[i].title;
  var title = document.createElement("div");
  title.setAttribute("id", "webcam-title");
  title.innerHTML = "<p>The background is a randomly generated live image of the mountains in Oregon. <br> This one happens to be in "  + imgTitle + ".</p>"
  container.appendChild(title);
};

