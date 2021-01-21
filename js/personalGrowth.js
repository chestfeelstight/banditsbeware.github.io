/* things that run on page load */

let bigList = $("li");

// for some reason, the page was scrolling a little to the right on refresh. this puts it back to the left
$("body, html").scrollLeft(-100);

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
document.addEventListener('keydown', function(event) {
  if (event.key === 'c') {
    $('#ephemeral-menu-bar').toggle();
    $('#ephemeral-menu-bar').css('margin-left', `${randInt(0, 80)}%`);
    $('#ephemeral-menu-bar').css('margin-top', `${randInt(0, 80)}%`);
    $('#important-instructions-1').html('good job!');
  }
});

let adShowing = false;
let ad = $("#bottom-beetle");
ad.attr("src", "./images/beetle/horz/horz1.jpg");
setInterval(() => {
  if (adShowing) ad.css("border", `5px solid ${randColor()}`);
  if (!adShowing && chance(adChance)) {
    ad.fadeIn();
    adShowing = true;
    setTimeout(() => {
      ad.fadeOut();
      adShowing = false;
    }, adTimeout);
  }
}, 250);
