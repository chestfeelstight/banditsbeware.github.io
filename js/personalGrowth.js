/* things that run on page load */

let bigList = $("#main-list li");

// puts extend function on some list items
for (let i=beginExtend; i<bigList.length; i++)
 if (chance(extendChance)) $(bigList[i]).attr("onmouseenter","extend(this)");

// set interval for budging
setInterval(() => {
  if (scrollProgress > budgeThreshold) {
    let n = randInt(0, bigList.length);
    budge(bigList[n]);
  }
}, budgeInterval);

// set interval for flickering
setInterval(() => {
  if (scrollProgress > flickerThreshold) {
    let n = randInt(0, bigList.length);
    flicker(bigList[n]);
  }
}, flickerInterval);

setInterval(() => {
  if (scrollProgress > flickerBudgeThreshold) {
    let n = randInt(0, bigList.length);
    flicker(bigList[n]);
    budge(bigList[n]);
  }
}, flickerBudgeInterval);

// set interval for adios
setInterval(() => {
  if (scrollProgress > adiosThreshold) {
    let n = randInt(0, bigList.length);
    adios(bigList[n]);
  }
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

// Kjakman is a covert agent?
if (chance(KjakmanDisappears)) {
  for (let i=0; i<bigList.length; i++) {
    var affirmative = $($('li, p')[i]);
    if (affirmative.text().indexOf("Kjãkman") >= 0) {
      affirmative.html(affirmative.text().replace('Kjãkman','<a href="./realms/kjak.html">John White</a>'));
    }
  }
}

// press 'c' for table of contentss!

// select <tocLength> random elements and add links to the list in tocbox
let toc = $(sample(bigList, tocLength));
for (let i=0; i<tocLength; i++) {
  $(toc[i]).attr("id", `toc${i}`);
  $("#tocbox ul").append(`<li><a href="#toc${i}">${$(toc[i]).html()}</a></li>`)
}
// control visibility of #tocbox
let tocbox = $("#tocbox");
let tocShowing = false;
document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    if (tocShowing) {
      tocbox.animate({
        width: '0px', 
        height: '0px', 
        opacity: 0, 
      }, 150, ()=>tocbox.toggle());
      tocShowing = false;
    } else {
      $('#important-instructions-1').html('good job!');
      tocbox.css({
        marginLeft: `${randInt(0, viewWidth - 300)}px`,
        marginTop : `${randInt(0, viewHeight - 300)}px`
      });
      tocbox.toggle();
      tocbox.animate({
        width: '300px',
        height: '300px',
        opacity: 1,
      }, 150);
      tocShowing = true;
    }
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

let ghostShowing = false;
let ghost = $("#ghost-li");
setInterval(()=> {
  if (!ghostShowing && chance(ghostChance) && scrollProgress > ghostThreshold) {
    ghostShowing = true;
    ghost.html(`${randInt(1, bigList.length)}. ${$(pick(bigList)).html()}`)
    relocate(ghost);
    ghost.fadeIn();
    setTimeout(()=> {
      ghost.fadeOut(5000, ()=>{ghostShowing = false});
    }, 2000);
  }
}, ghostInterval);

// TODO: have a variety of error messages to choose from
let errorShowing = false;
setInterval(() => {
  if (!errorShowing && chance(errorChance) && scrollProgress > errorThreshold) {
    errorShowing = true;
    let err = $('#error');
    relocate(err);
    err.fadeIn();
    setTimeout(() => {
      err.fadeOut();
      errorShowing = false;
    }, errorTimeout);
  }
}, 1000);