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
// fetch(
//   "https://api.windy.com/api/webcams/v2/list/category=mountain/region=US.OR?show=webcams:image",
//   {
//     method: "GET",
//     headers: {
//       "x-windy-key": "fRBdejZXV9tukKAYkPngOtGOg0bYrvV9",
//     },
//   }
// ).then(function (response) {
//   response.json().then(function (webcam) {
//     changeBackground(webcam);
//   });
// });

changeBackground = function (webcam) {
  //random index
  var max = webcam.result.webcams.length;
  var i = Math.floor(Math.random() * max);
  var image = document.createElement("img");

  //set background
  var container = document.getElementById("landing-page");
  // var imgSrc = webcam.result.webcams[i].image.current.preview;

  //dither test
  // container.appendChild(image);
  // image.setAttribute("class", "dithered-image");
  // image.setAttribute("onload", "ditherjs.dither(this)")
  // image.setAttribute( "src", 'assets/images/test-image.jpeg')

  // var options = {
  //   step: 1, // The step for the pixel quantization n = 1,2,3...
  //   // palette: defaultPalette, // an array of colors as rgb arrays
  //   algorithm: "ordered", // one of ["ordered", "diffusion", "atkinson"]
  // };

  // const imgSrc = 'assets/images/dither-test.jpeg' //dither test img
  // container.style.backgroundImage = "url('" + imgSrc + "')"; //original webcam
  // container.style.backgroundImage = "url('" + ImgSrc + "')";

  //titling img
  // var containerText = document.getElementById("landing-page-text");
  // var imgTitle = webcam.result.webcams[i].title;
  // var title = document.createElement("div");
  // title.setAttribute("id", "webcam-title");
  // title.innerHTML =
  //   "<p>Randomly generated live background of the mountains in Oregon. <br> This one happens to be in " +
  //   imgTitle +
  //   ".</p>";
  // containerText.appendChild(title);
};
