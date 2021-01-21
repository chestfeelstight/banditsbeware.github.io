/* things that run on page load */

let bigList = $("#main-list li");

// viewWidth & viewHeight will always represent the dimensions of the viewport! wow!
let viewWidth = $(window).width();
let viewHeight = $(window).height();
$(window).resize(() => {
  viewWidth = $(window).width();
  viewHeight = $(window).height();
});

// puts extend function on some list items
for (let i=0; i<bigList.length; i++)
 if (chance(extendChance)) bigList.get(i).setAttribute("onmouseenter", "e_x_t_e_n_d(this)");

// set interval for budging
setInterval(() => {
 let n = randInt(100, bigList.length);
 budge(bigList[n]);
}, budgeInterval);

// set interval for flickering
setInterval(() => {
 let n = randInt(50, bigList.length);
 flicker(bigList[n]);
}, flickerInterval);

// set interval for adios
setInterval(() => {
  let n = randInt(200, bigList.length);
  adios(bigList[n]);
}, adiosFrequency);

// a chance for all images to be anime girls
if (chance(animeGirlsChance))
 $("img").each(function() {
  $(this).attr("src", "./images/animegirls/" + pick(animeGirls));
  $(this).attr("width", "300");
});

// a chance to change all the li::markers
if (chance(westernChance))
 $("#main-list").css("listStyleType",pick(listStyleTypes));

// turns icon into a random icon
$("#icon").attr("href", `./icons/${pick(iconList)}.png`);

// turns title into random list item on hover, click to go there
let title = $("#main-title");
title.hover(() => {
 let rand = pick(bigList);
 title.animate({height: "+=10px"},0);
 title.html($(rand).prop('outerHTML'));
 title.click(() => rand.scrollIntoView());
}, () => {
 title.html("<h1>Post-Quarantine Bucket List</h1>");
 title.animate({height: "-=10px"},0);
 title.click(null);
});
/*
//Kjakman is a covert agent?
if (chance(KjakmanDisappears))
  innerHTML.replace("Kjãkman", "John White");
  */

// press 'c' for table of contentss
let toc = $(sample(bigList, tocLength));
for (let i=0; i<tocLength; i++) {
  $(toc[i]).attr("id", `toc${i}`);
  $("#tocbox ul").append(`<li><a href="#toc${i}">${$(toc[i]).html()}</a></li>`)
}
document.addEventListener('keydown', function(event) {
  if (event.key === 'c') {
    $('#tocbox').toggle();
    $('#tocbox').css('margin-left', `${randInt(0, viewWidth - 300)}px`);
    $('#tocbox').css('margin-top', `${randInt(0, viewHeight - 300)}px`);
    $('#important-instructions-1').html('good job!');
  }
});

let bottomBeetleShowing = false;
let bottomBeetle = $("#bottom-beetle");
bottomBeetle.attr("src", "./images/beetle/horz/horz1.jpg");
setInterval(() => {
  if (bottomBeetleShowing) bottomBeetle.css("border", `5px solid ${randColor()}`);
  if (!bottomBeetleShowing && chance(bottomBeetleChance)) {
    bottomBeetle.fadeIn();
    bottomBeetleShowing = true;
    setTimeout(() => {
      bottomBeetle.fadeOut();
      bottomBeetleShowing = false;
    }, bottomBeetleTimeout);
  }
}, 250);

let sideBeetleShowing = false;
let sideBeetle = $("#side-beetle");
sideBeetle.attr("src", "./images/beetle/vert/vert0.png");
setInterval(() => {
  if (sideBeetleShowing) sideBeetle.css("border", `5px solid ${randColor()}`);
  if (!sideBeetleShowing && chance(sideBeetleChance)) {
    sideBeetle.fadeIn();
    sideBeetleShowing = true;
    setTimeout(() => {
      sideBeetle.fadeOut();
      sideBeetleShowing = false;
    }, sideBeetleTimeout);
  }
}, 250);
