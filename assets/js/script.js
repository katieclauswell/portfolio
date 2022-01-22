let cardBody = document.getElementsByClassName("text");

const languages = /HTML|JavaScript|JQuery|CSS|API/gi

for (i = 0; i < cardBody.length; i++) {
  var cardText = cardBody[i].innerHTML;
  var res = cardText.replace(languages, function(matched) {
      return "<span class='html'>" + matched + "</span>"});
  cardBody[i].innerHTML = res;
}
