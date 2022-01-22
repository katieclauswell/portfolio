const languageToggle = document.getElementById("switch-click");
let cardBody = document.getElementsByClassName("text");

const languages = /HTML|JavaScript|JQuery|CSS|API/gi;

languageToggle.addEventListener("click", function () {
  for (i = 0; i < cardBody.length; i++) {
    var cardText = cardBody[i].innerHTML;
    if (cardText.includes("<span class=")) {
      var reset = cardText.replace(' class="html"', "");
      cardBody[i].innerHTML = reset;
    } else if (cardText.includes("<span>")) {
      var add = cardText.replace("<span>, '<span class='html'>");
      cardBody[i].innerHTML = add;
    } else {
      var start = cardText.replace(languages, function (matched) {
        return "<span class='html'>" + matched + "</span>";
      });
      cardBody[i].innerHTML = start;
    }
  }
});
