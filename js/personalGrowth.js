/* things that run when index.html loads */

let bigList = $("#main-list li");
$(window).scrollLeft(-100);

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

// a chance for all images to be anime 
if (chance(animeGirlsChance))
 $("img").each(function() {
  $(this).attr("src", `./images/animegirls/ag${randInt(0, numAnimeGirls)}.png`);
  $(this).attr("width", "300");
});

// a chance to change all the li::markers
if (chance(westernChance)) $("#main-list").css("listStyleType",pick(listStyleTypes));

// turns icon into a random icon
$("#icon").attr("href", `./images/icons/icon${randInt(0,numIcons)}.png`);

// turns title into random list item on hover, click to go there
let title = $("#main-title");
title.hover(() => {
  if (chance(0.6)) {
    $('#main-title h1').css(randCSS());
  } else {
    let rand = pick(bigList);
    title.animate({height: "+=10px"},0);
    title.html($(rand).prop('outerHTML'));
    title.click(() => rand.scrollIntoView());
  }
}, () => {
  title.removeAttr('style');
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
$(window).keydown((event) => {
  if (event.key === 'c') {
    if ($('#tocbox:visible').length) {
      tocbox.animate({
        width: '0px', 
        height: '0px', 
        opacity: 0, 
      }, 150, ()=>tocbox.toggle());
    } else {
      relocate(tocbox);
      tocbox.toggle();
      tocbox.animate({
        width: '300px',
        height: '300px',
        opacity: 1,
      }, 150);
    }
  }
});

// press 'D' to gain knowledge of scroll progress through document
let updateProgress = () => $("#scroll-progress").text(`${scrollProgress.toFixed(1)}%`);
$(window).keydown((event) => {
  if (event.key == 'd') {
    $('#scroll-progress').toggle();
    updateProgress();
  } 
});
$(window).on('scroll', () => {
  if ($('#scroll-progress:visible').length) updateProgress();
});

let horzLink, vertLink;
let horzBeetleShowing = false;
let horzBeetle = $("#horz-beetle");
horzBeetle.attr("src", "./images/beetle/horz2.png");
setInterval(() => {
  if (horzBeetleShowing) horzBeetle.css("border", `5px solid ${randColor()}`);
  if (!horzBeetleShowing && chance(horzBeetleChance)) {
    horzBeetle.attr("src", `./images/beetle/horz${randInt(0, numHorzBeetles)}.png`);
    horzLink = pick(beetleLinks);
    horzBeetle.attr("onclick", `window.open('${horzLink}')`);
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
    vertLink = pick(beetleLinks);
    vertBeetle.attr("onclick", `window.open('${vertLink}')`);
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
      for (let i=0; i<200; i++) $(bigList[i]).css("color", `${randColor()}`);
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

let errorShowing = false;
setInterval(() => {
  if (!errorShowing && chance(errorChance) && scrollProgress > errorThreshold) {
    errorShowing = true;
    let errorAudio = new Audio(`./audio/${pick(errorSounds)}.mp3`);
    errorAudio.play();
    let err = $('#error');
    relocate(err);
    err.attr('src', `./images/beetle/err${randInt(0,numErrors)}.png`)
    err.fadeIn();
    setTimeout(() => {
      err.fadeOut();
      errorShowing = false;
    }, errorTimeout);
  }
}, 1000);

// apply zalgo to elements with class zalgo-N
for (let i=1; i<=100; i+=1) {
  let yuri = $(`.zalgo-${i}`);
  for (let j=0; j<yuri.length; j++) {
    txt = $(yuri[j]).text();
    $(yuri[j]).text(engulf(txt, i));
  }
}

// apply random margin to elements with class rand-margin
let elements = $('.rand-margin');
for (let i=0; i<elements.length; i++) {
  let newMargin = randInt(-50, 200);
  $(elements[i]).css('margin-left', `${newMargin}px`);
}

// apply continuous zalgo effect to elements with class husk
// this could get out of hand
for (let i of $('.husk')) setInterval(() => { edit(i); }, 50);

let validZone = (p, z) => {
  for (let i = 0; i < z.length; i++)
    if (z[i] <= p && p < z[i] + 2) return true;
  return false;
}

let zones = [];
for (let i = 0; i < 10; i++) zones.push(randInt(50, 100));
zones.sort((a, b) => a - b);

trevor = $('<img src="./images/animegirls/ag22.png">');
trevor.css({ 'display': 'none', 'position': 'fixed' });
$('body').append(trevor);

$(window).scroll(() => {
    if (validZone(scrollProgress, zones)) {
      trevor.show();
      trevor.css('opacity', `${Math.random()}`);
      trevor.css('width', `${randInt(180, 220)}px`)
      if (chance(0.2)) relocate(trevor);
      flicker(trevor);
      budge(trevor);
      setTimeout(() => {trevor.hide();}, 1000 * randInt(2,5));
    } else {
      trevor.hide();
    }
});

// apply random css to elements with class randCSS and randCSS-deep
for (let e of $('.randCSS')) $(e).css(randCSS()); // uniform CSS
for (let e of $('.randCSS-deep')) truly(e, 0.3);  // randomly distributed stuff