const masterList = document.getElementsByTagName("li");

// get a random int in [min max)
const randInt = (min, max) => min + Math.floor((Math.random() * (max - min)));

// get n random items from list
const pick = (list, n=1) => {
	let res = [];
	while (n > 0) {
		res.push(list[randInt(0, list.length)]);
		n--;
	}
	return res.length === 1 ? res[0] : res;
}

// roll the dice
const chance = (t) => Math.random() < t;

// we must add icons to this list!   we have to                    jeff is an icon
const iconArr = ["big_wood.png", "carl_T.png", "conical_frustum.png", "atop.png", "facebook.png", "fear.png", "random_walk.png", "x.png", "jeff.png"];
const randomIcon = () => document.getElementById("icon").setAttribute("href", "./icons/"+pick(iconArr));

// turn 'lmt' into a random list item!!! (for  a short while) wow, new feature.
const random = (lmt) => {
 if (!lmt.classList.contains("random")) {
	 lmt.classList.add("random");
	 lmt.innerHTML = pick(masterList).innerHTML;
	 setTimeout(function() {
 		lmt.innerHTML = "<h1>Post-Quarantine Bucket List<h1>";
 		lmt.classList.remove("random");
  }, randInt(1000, 5000));
 }
}

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

		for (let j=0; j < waveLen; j++) wave += "<span style=\'font-size: " + (amplitude * Math.abs(j - waveLen/2)) + "px\'>"+ap+"</span>";
		for (let i=0; i<waves; i++) lmt.innerHTML += wave;
	}
	// lmt.scrollIntoView();
	lmt.classList.toggle("filled");
}

// each time this function runs, there's a chance that the li::markers will um
const types = ["lower-greek", "georgian", "hebrew", "hiragana", "katakana", "telugu", "bengali", "urdu", "kannada", "arabic-indic"];
const pantsGoneWestern = () => { if (chance(0.05)) document.getElementById("main-list").style.listStyleType = pick(types); }

// add some of li's last letter to li
const e_x_t_e_n_d = (li) => {
	let n = randInt(1,10);
	let ntv = setInterval(() => {
		li.textContent += li.textContent[li.textContent.length - 1];
		if (--n === 0) clearInterval(ntv);
	}, randInt(10, 100));
}
