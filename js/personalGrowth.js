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
for (let i=beginExtend; i<bigList.length; i++)
 if (chance(extendChance)) bigList.get(i).setAttribute("onmouseenter", "e_x_t_e_n_d(this)");

// set interval for budging
setInterval(() => {
 let n = randInt(beginBudge, bigList.length);
 budge(bigList[n]);
}, budgeInterval);

// set interval for flickering
setInterval(() => {
 let n = randInt(beginFlicker, bigList.length);
 flicker(bigList[n]);
}, flickerInterval);

// set interval for adios
setInterval(() => {
  let n = randInt(beginAdios, bigList.length);
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
$("#icon").attr("href", `./images/icons/icon${randInt(0,numIcons)}.png`);

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

let horzBeetleShowing = false;
let horzBeetle = $("#horz-beetle");
horzBeetle.attr("src", "./images/beetle/horz2.png");
setInterval(() => {
  if (horzBeetleShowing) horzBeetle.css("border", `5px solid ${randColor()}`);
  if (!horzBeetleShowing && chance(horzBeetleChance)) {
    horzBeetle.attr("src", `./images/beetle/horz${randInt(0, numHorzBeetles)}.png`);
    horzBeetle.fadeIn();
    horzBeetleShowing = true;
    setTimeout(() => {
      horzBeetle.fadeOut();
      horzBeetleShowing = false;
    }, horzBeetleTimeout);
  }
}, 250);

let vertBeetleShowing = false;
let vertBeetle = $("#vert-beetle");
setInterval(() => {
  if (vertBeetleShowing) vertBeetle.css("border", `5px solid ${randColor()}`);
  if (!vertBeetleShowing && chance(vertBeetleChance)) {
    vertBeetle.attr("src", `./images/beetle/vert${randInt(0, numVertBeetles)}.png`);
    vertBeetle.fadeIn();
    vertBeetleShowing = true;
    setTimeout(() => {
      vertBeetle.fadeOut();
      vertBeetleShowing = false;
    }, vertBeetleTimeout);
  }
}, 250);

let partied = false;
let a = new Audio('./audio/harmonica.mp3');
a.volume = 0.75;
// todo: conga line
let dp = $("#dance-party-button");
dp.click(() => {
  if (!partied) {
    $("img.dancing").fadeIn();
    a.play();
    let party = setInterval(()=>{
      for (let i=0; i<200; i++) {
        $(bigList[i]).css("color", `${randColor()}`);
      }
      if (a.ended) {
        $("img.dancing").fadeOut();
        clearInterval(party);
        dp.css({"color":"black", "text-decoration":"line-through"});
        for (let i=0; i<bigList.length; i++) $(bigList[i]).css("color", "");
        partied = true;
      }
    }, 100);
  }
});