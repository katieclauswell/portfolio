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
