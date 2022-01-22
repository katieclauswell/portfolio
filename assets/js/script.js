const languageToggle = document.getElementById("switch");
let cardBody = document.getElementsByClassName("text");

const languages = /HTML|JavaScript|JQuery|CSS|API/gi;

// languageToggle.addEventListener("click", highlight);

// var highlight = function () {
for (i = 0; i < cardBody.length; i++) {
  var cardText = cardBody[i].innerHTML;
  console.log(cardBody[i].innerHTML)
  var res = cardText.replace(languages, function (matched) {
    return "<span class='html'>" + matched + "</span>";
  });
  cardBody[i].innerHTML = res;
}
// };
