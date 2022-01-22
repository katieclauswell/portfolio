var container = document.getElementById("landing-page");
var canvas = document.getElementsByTagName("canvas");
var nav = document.getElementById("landing-page-text");
var intro = document.getElementById("intro");
var webcamTitle = document.getElementById("webcam-title");
var contentContainer = document.getElementById("content-container");

var newNav = document.createElement("div");
container.insertBefore(newNav, container.firstChild);
newNav.style.display = "none";

window.onscroll = function () {
  scrollFunction();
};

function setContainer() {
  container.style.height = "20vh";
  nav.style.display = "none";
  canvas.style.display = "none";
  container.setAttribute("class", "after-scroll");
  newNav.style.display = "block";
}

function scrollFunction() {
  if (document.body.scrollTop > 80) {
    setContainer().then(function () {
      newNav.innerHTML = `<nav>
      <ul>
        <li><a href="#about">> About & Contact</a></li>
        <li><a href="#portfolio">> Portfolio</a></li>
        <!-- <li>> Resume</li> -->
      </ul>`;
    });
  } else {
    container.style.height = "100vh";
    canvas.style.display = "block";
    nav.style.display = "block";
    newNav.style.display = "none";
  }
}

new Promise(() => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
