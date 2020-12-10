// get a random int in [min max)
function randInt(min, max) { return min + Math.floor((Math.random() * (max - min))); }

// get n random items from list
function pick(list, n=1) { 
	var res = [];
	while (n > 0) {
		res.push(list[randInt(0, list.length)]);
		n--;
	}
	return n === 1 ? res[0] : res; 
}

// we must add icons to this list!   we have to
var iconArr = ["big_wood.png", "carl_T.png", "conical_frustum.png", "atop.png", "facebook.png", "fear.png", "random_walk.png", "x.png"];
function randomIcon() {
	document.getElementById("icon").setAttribute("href", "./icons/"+pick(iconArr));
}

// turn 'element' into a random list item!!! (for  a short while) wow, new feature.
function random() {
 var lmt = document.getElementById("main-title");
 if (!lmt.classList.contains("random")) {

	 lmt.classList.add("random");
	 lis = document.querySelector("#main-list").getElementsByTagName("li");
	 lmt.innerHTML = pick(lis).innerHTML;

	 setTimeout(function() {
		lmt.innerHTML = "<h1>Post-Quarantine Bucket List<h1>";
		lmt.classList.remove("random");
	 }, randInt(500, 5000));
 }
}

// toggle the display of quite a large number of quotation marks for the fun double quotes game
var quoteList = ["'","'","'",",","❟","‘","❜","⹂","‛","❛","'̶̛̗̪̗̼͍͒̉̐̒̄̀̾́̍̉̊̇̿̚’"];
var maxWaveLen = 30, minWaveLen = 10;
var maxWaves = 50, minWaves = 5;
function toggleQuotes() {
	
	var lmt = document.getElementById("fun-double-quotes-game");

	if (lmt.classList.contains("filled"))  lmt.innerHTML = "";
	else {
		var waveLen = randInt(minWaveLen, maxWaveLen);
		var waves = randInt(minWaves, maxWaves);
		var wave = "", amplitude = 3 + Math.random() * 5;
		var ap = pick(quoteList);

		for (var j=0; j < waveLen; j++) wave += "<span style=\'font-size: " + (amplitude * Math.abs(j - waveLen/2)) + "px\'>"+ap+"</span>";
		for (var i=0; i<waves; i++) lmt.innerHTML += wave;
	}
	// lmt.scrollIntoView();
	lmt.classList.toggle("filled");
}

// each time this function runs, there's a chance that the li::markers will um
var liMarkerThreshold = 0.05;
var types = ["lower-greek", "georgian", "hebrew", "hiragana", "katakana", "telugu", "bengali", "urdu", "kannada", "arabic-indic"];
function pantsGoneWestern() {
	if (Math.random() < liMarkerThreshold) document.getElementById("main-list").style.listStyleType = pick(types);
}