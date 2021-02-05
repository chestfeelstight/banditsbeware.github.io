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

// add some of li's last letter to li
const e_x_t_e_n_d = (li) => {
	if (li.innerHTML.indexOf("<ol>") < 0) {
		let n = randInt(extMin, extMax);
		let ntv = setInterval(() => {
			li.textContent += li.textContent[li.textContent.length - 1];
			if (--n === 0) clearInterval(ntv);
		}, randInt(extMaxSpeed, extMinSpeed));
	}
}

const budge = (li) => {
	let n = randInt(budgeMinN, budgeMaxN);
	let margin = $(li).css("margin-left");
	let ntv = setInterval(() => {
		$(li).css("margin-left", `${randInt(budgeMin,budgeMax)}px`);
		setTimeout(() => { $(li).css("margin-left", margin); }, budgeSpeed/2);
		if (--n === 0) clearInterval(ntv);
	}	, budgeSpeed);
	$(li).css("margin-left", margin);
}

const flicker = (li) => {
 let n = randInt(flickerMinN, flickerMaxN);
 let color = $(li).css("color");
 let ntv = setInterval(() => {
  $(li).css("color", "white");
  setTimeout(() => { $(li).css("color", color); }, randInt(flickerSpeed*0.75));
  if (--n === 0) clearInterval(ntv);
 }, flickerSpeed);
 $(li).css("color", color);
}

const adios = (li) => {
	$(li).animate({
		letterSpacing: '100px',
		opacity: 0.0,
		height: '-5px'
	}, 2000, () => $(li).hide());
}
