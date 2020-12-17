let bigList = $("li");

// get a random int in [min max)
const randInt = (min, max) => min + Math.floor((Math.random() * (max - min)));

// get n random items from list
const sample = (list, n) => {
	let res = [];
	while (n > 0) {
		res.push(list[randInt(0, list.length)]);
		n--;
	}
	return res;
}

// get 1 random item from list
const pick = (list) => list[randInt(0, list.length)];

// roll the dice
const chance = (t) => Math.random() < t;

// we must add icons to this list!   we have to                    jeff is an icon
const iconArr = ["big_wood.png", "carl_T.png", "conical_frustum.png", "atop.png", "facebook.png", "fear.png", "random_walk.png", "x.png", "jeff.png"];
const randomIcon = () => $("#icon").attr("href", "../icons/"+pick(iconArr));

// title is turned random on hover. click to go there
let title = $("#main-title");
title.hover(() => {
	let rand = pick(bigList);
	title.html(rand.innerHTML);
	title.click(() => rand.scrollIntoView());
}, () => {
	title.html("<h1>Post-Quarantine Bucket List</h1>");
	title.click(null);
});

// toggle the display of quite a large number of quotation marks for the fun double quotes game
const quoteList = ["'","'","'",",","❟","‘","❜","⹂","‛","❛","'̶̛̗̪̗̼͍͒̉̐̒̄̀̾́̍̉̊̇̿̚’"];
const maxWaveLen = 30, minWaveLen = 10;
const maxWaves = 50, minWaves = 5;
const toggleQuotes = () => {

	let lmt = document.getElementById("fun-double-quotes-game");

	if (lmt.classList.contains("filled"))  lmt.innerHTML = "";
	else {
		let waveLen = randInt(minWaveLen, maxWaveLen);
		let waves = randInt(minWaves, maxWaves);
		let wave = "", amplitude = 3 + Math.random() * 5;
		let ap = pick(quoteList);

		for (let j=0; j < waveLen; j++) wave += `<span style=\'font-size: ${(amplitude * Math.abs(j - waveLen/2))}px\'>${ap}</span>`;
		for (let i=0; i<waves; i++) lmt.innerHTML += wave;
	}
	lmt.classList.toggle("filled");
}

// each time this function runs, there's a chance that the li::markers will um
const types = ["lower-greek", "georgian", "hebrew", "hiragana", "katakana", "telugu", "bengali", "urdu", "kannada", "arabic-indic"];
const pantsGoneWestern = () => { if (chance(0.05)) document.getElementById("main-list").style.listStyleType = pick(types); }

// add some of li's last letter to li
const e_x_t_e_n_d = (li) => {
	if (li.innerHTML.indexOf("<ol>") < 0) {
		let n = randInt(10, 20);
		let ntv = setInterval(() => {
			li.textContent += li.textContent[li.textContent.length - 1];
			if (--n === 0) clearInterval(ntv);
		}, randInt(50, 100));
	}
}

// this is kind of broken and that is okay
const μετανοώ = () => {
	for (let i=0; i<$("li").length; i++)
		if (chance(0.025)) $("li")[i].attr("onmouseenter", "e_x_t_e_n_d(this)");
}

const budge = (li) => {
	let time = 80;
	let n = randInt(1,50);
	let ntv = setInterval(() => {
		let margin = li.style["margin-left"];
		li.style["margin-left"] = randInt(20,60)+"px";
		setTimeout(() => {
			li.style["margin-left"] = margin;
		}, time/2);
		if (--n === 0) clearInterval(ntv);
	}	, time);
}

setInterval(() => {
	let n = randInt(0, $("li").length);
	budge($("li")[n]);
}, 2000);
