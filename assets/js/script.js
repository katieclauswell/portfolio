let cardBody = document.getElementsByClassName("text");

// let html = body.search("HTML")

// html.addAttribute("class", "html");

//loop through
// search "[i].innerText" for keyword
//apply styling?

for (i = 0; i < cardBody.length; i++) {
    var cardText = cardBody[i].innerHTML;
    var res = cardText.replace("HTML", "<span class='html'>HTML</span>");
    cardBody[i].innerHTML = res;
}