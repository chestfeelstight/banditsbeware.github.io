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

// random color string, e.g. `rgb(R, G, B)`
const randColor = () => `rgb(${randInt(0,255)}, ${randInt(0,255)}, ${randInt(0,255)})`

// random month string
const randMonth = () => pick(['January','February','March','April','May','June','July','August','September','October','November','December']);

// viewWidth & viewHeight will always represent the dimensions of the viewport! wow!
let viewWidth = $(window).width();
let viewHeight = $(window).height();
$(window).resize(() => {
  viewWidth = $(window).width();
  viewHeight = $(window).height();
});

// add some of li's last letter to li
const extend = (li) => {
	if (li.innerHTML.indexOf("<ol>") < 0) {
		let n = randInt(extMin, extMax);
		let c = $(li).text()[$(li).text().length - 1];
		let ntv = setInterval(() => {
			$(li).append(c);
			if (--n === 0) clearInterval(ntv);
		}, randInt(extMaxSpeed, extMinSpeed));
	}
}

const budge = (li) => {
	let n = randInt(budgeMinN, budgeMaxN);
	let margin = $(li).css("margin-left");
	let ntv = setInterval(() => {
		$(li).css("margin-left", `${randInt(budgeMin,budgeMax)}px`);
		setTimeout(() => { $(li).css("margin-left", margin); }, Math.random() * budgeSpeed);
		if (--n === 0) clearInterval(ntv);
	}	, budgeSpeed);
	$(li).css("margin-left", margin);
}

const flicker = (li) => {
 let n = randInt(flickerMinN, flickerMaxN);
 let ntv = setInterval(() => {
  $(li).css("opacity", "0");
  setTimeout(() => { $(li).css("opacity", "1"); }, Math.random() * flickerOffSpeed);
  if (--n === 0) clearInterval(ntv);
 }, flickerOffSpeed);
 $(li).css("opacity", "1");
}

const adios = (li) => {
	$(li).animate({
		letterSpacing: '100px',
		opacity: 0.0,
		height: '-5px'
	}, 3000, () => $(li).hide());
}
