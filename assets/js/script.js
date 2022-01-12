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

var container = document.getElementById("landing-page");

//dither test (p5.js)

let kitten;

function preload() {
  kitten = loadImage("https://images.unsplash.com/photo-1641984790242-d8aa477d306c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
}

function setup() {
  let canvas = createCanvas(1024, 512);
  canvas.parent(container);

  image(kitten, 0, 0);
  makeDithered(kitten, 1);
  image(kitten, 512, 0);
  // Apply gray filter to the whole canvas
  filter(GRAY);
}

function imageIndex(img, x, y) {
  return 4 * (x + y * img.width);
}

function getColorAtindex(img, x, y) {
  let idx = imageIndex(img, x, y);
  let pix = img.pixels;
  let red = pix[idx];
  let green = pix[idx + 1];
  let blue = pix[idx + 2];
  let alpha = pix[idx + 3];
  return color(red, green, blue, alpha);
}

function setColorAtIndex(img, x, y, clr) {
  let idx = imageIndex(img, x, y);

  let pix = img.pixels;
  pix[idx] = red(clr);
  pix[idx + 1] = green(clr);
  pix[idx + 2] = blue(clr);
  pix[idx + 3] = alpha(clr);
}

// Finds the closest step for a given value
// The step 0 is always included, so the number of steps
// is actually steps + 1
function closestStep(max, steps, value) {
  return round(steps * value / 255) * floor(255 / steps);
}

function makeDithered(img, steps) {
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let clr = getColorAtindex(img, x, y);
      let oldR = red(clr);
      let oldG = green(clr);
      let oldB = blue(clr);
      let newR = closestStep(255, steps, oldR);
      let newG = closestStep(255, steps, oldG);
      let newB = closestStep(255, steps, oldB);

      let newClr = color(newR, newG, newB);
      setColorAtIndex(img, x, y, newClr);

      let errR = oldR - newR;
      let errG = oldG - newG;
      let errB = oldB - newB;

      distributeError(img, x, y, errR, errG, errB);
    }
  }

  img.updatePixels();
}

function distributeError(img, x, y, errR, errG, errB) {
  addError(img, 7 / 16.0, x + 1, y, errR, errG, errB);
  addError(img, 3 / 16.0, x - 1, y + 1, errR, errG, errB);
  addError(img, 5 / 16.0, x, y + 1, errR, errG, errB);
  addError(img, 1 / 16.0, x + 1, y + 1, errR, errG, errB);
}

function addError(img, factor, x, y, errR, errG, errB) {
  if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;
  let clr = getColorAtindex(img, x, y);
  let r = red(clr);
  let g = green(clr);
  let b = blue(clr);
  clr.setRed(r + errR * factor);
  clr.setGreen(g + errG * factor);
  clr.setBlue(b + errB * factor);

  setColorAtIndex(img, x, y, clr);
}


//change background function
changeBackground = function (webcam) {
  //random index
  var max = webcam.result.webcams.length;
  var i = Math.floor(Math.random() * max);
  var image = document.createElement("img");

  //set background

  // var imgSrc = webcam.result.webcams[i].image.current.preview;

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
