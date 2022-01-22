const languageToggle = document.getElementById("switch-click");
let cardBody = document.getElementsByClassName("text");

const languages = /HTML|JavaScript|JQuery|CSS|API/gi;

//find every language and add style class
function initialSpan() {
  for (i = 0; i < cardBody.length; i++) {
    var cardText = cardBody[i].innerHTML;
    var initial = cardText.replace(languages, function (matched) {
      return "<span class='match'>" + matched + "</span>";
    });
    cardBody[i].innerHTML = initial;
  }
}

initialSpan();

languageToggle.addEventListener("click", function () {
  var matches = document.getElementsByClassName("match");
  var styled = document.getElementsByClassName("html");

  if (matches.length > 0) {
    while (matches.length > 0) {
      matches[0].className = "html";
    }
  } else {
    while (styled.length > 0) {
      styled[0].className = "match";
    }
  }
});
