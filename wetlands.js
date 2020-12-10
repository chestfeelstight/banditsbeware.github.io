// get a random int
function randInt(min, max) {
	return min + Math.floor((Math.random() * (max - min)));
}

// we must add icons to this list!   we have to
var iconArr = ["big_wood.png", "carl_T.png", "conical_frustum.png", "atop.png", "facebook.png", "fear.png", "random_walk.png", "x.png"];
function randomIcon() {
	document.getElementById("icon").setAttribute("href", "./icons/"+iconArr[randInt(0, iconArr.length)]);
}

// turn 'element' into a random list item!!! (for  a short while) wow, new feature.
function random() {
 var lmt = document.getElementById("main-title");
 if (!lmt.classList.contains("random")) {
	 lmt.classList.add("random");
	 lis = document.querySelector("#main-list").getElementsByTagName("li");
	 lmt.innerHTML = lis[randInt(0, lis.length)].innerHTML;
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
		var ap = quoteList[randInt(0, quoteList.length)];

		for (var j=0; j < waveLen; j++) wave += "<span style=\'font-size: " + (amplitude * Math.abs(j - waveLen/2)) + "px\'>"+ap+"</span>";
		for (var i=0; i<waves; i++) lmt.innerHTML += wave;
	}
	// lmt.scrollIntoView();
	lmt.classList.toggle("filled");
}