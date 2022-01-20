var container = document.getElementById("landing-page");
var canvas = document.getElementsByTagName("canvas");
var nav = document.getElementById("landing-page-text");
var intro = document.getElementById("intro");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // canvas.style.display = "none";
    // intro.style.display = "none";
    nav.style.height = "10vh";
    nav.style.width = "100vw";
    container.style.height = "fit-content";
    container.style.
    // container.style.display = "block";
    container.innerHTML = `
    <nav>
    <ul>
      <li><a href="#about"> About & Contact</a></li>
      <li><a href="#portfolio"> Portfolio</a></li>
      <!-- <li>> Resume</li> -->
    </ul>
  </nav>
    `;
  }
}
