var container = document.getElementById("landing-page");
var canvas = document.getElementsByTagName("canvas");
var nav = document.getElementById("landing-page-text");
var intro = document.getElementById("intro");
var webcamTitle = document.getElementById("webcam-title");

window.onscroll = function () {
  canvas.style.transition = "0.4s";
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //remove canvas
    canvas.style.display = "none";
    //container
    container.style.height = "fit-content";
    container.style.position = "sticky";
    container.style.top = "0";
    //text
    nav.style.width = "100vw";
    nav.style.height = "fit-content";
    nav.innerHTML = `<nav>
    <ul>
      <li><a href="#about">> About & Contact</a></li>
      <li><a href="#portfolio">> Portfolio</a></li>
      <!-- <li>> Resume</li> -->
    </ul>`;
  } //else
}
