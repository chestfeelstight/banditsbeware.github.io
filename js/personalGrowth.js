/* things that run on page load */

let bigList = $("li");

// for some reason, the page was scrolling a little to the right on refresh. this puts it back to the left
$("body, html").scrollLeft(-100);

// puts extend function on some list items
for (let i=0; i<bigList.length; i++)
 if (chance(μετανοώChance)) bigList.get(i).setAttribute("onmouseenter", "e_x_t_e_n_d(this)");

// set interval for budging
setInterval(() => {
 let n = randInt(0, bigList.length);
 budge(bigList[n]);
}, budgeInterval);

// a chance for all images to be anime girls
if (chance(animeGirlsChance))
 $("img").each(function() { $(this).attr("src", "./images/animegirls/" + pick(animeGirls)); });

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
 title.html(rand.innerHTML);
 title.click(() => rand.scrollIntoView());
}, () => {
 title.html("<h1>Post-Quarantine Bucket List</h1>");
 title.animate({height: "-=10px"},0);
 title.click(null);
});
