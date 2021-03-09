// number of icons in the icons folder
const numIcons = 10;

// fun double quotes game - quote characters
const quoteList = ["'","\"","'",",","❟","‘","❜","⹂","‛","❛","'̶̛̗̪̗̼͍͒̉̐̒̄̀̾́̍̉̊̇̿̚’",",̦̘̳̟̤͉",",̞͙ͬ͠","'̷̬͇̼̜̗̰̜ͣͥ","҉","͘"];

// pantsGoneWestern - list style types
const listStyleTypes = ["lower-greek", "georgian", "hebrew", "hiragana", "katakana", "telugu", "bengali", "urdu", "kannada", "arabic-indic"];

// pantsGoneWestern - chance to act
const westernChance = 0.05;

// extend parameters
const extMin = 10;
const extMax = 20;
const extMinSpeed = 100;
const extMaxSpeed = 50;
const extendChance = 0.005;

// budge parameters
const budgeSpeed = 80;
const budgeMinN = 1;
const budgeMaxN = 50;
const budgeMin = 20;
const budgeMax = 60;
const budgeInterval = 2000;

// flicker parameters
const flickerOffSpeed = 100;
const flickerMinN = 1;
const flickerMaxN = 200;
const flickerInterval = 2000;
const flickerBudgeInterval = 3000;

// list of anime girls filenames
const animeGirls = ["rei.gif","rei.jpg","rei1.jpeg","rei.webp","rei.jpeg","asuka.gif","asuka1.png","asuka.png","asuka.jpg","chika.gif","chika.png","chika1.gif","chika1.png","faye.webp","faye.jpg","kaguya.gif","kaguya.jpg","misato.png","misato.jpg","misato1.jpg","mizuhara.gif","mizuhara.jpg","mizuhara.png","mizuhara1.png","monika.png","monika.webp","natsuki.gif","omedetou.gif","sailor.gif","usagi.png","usagi1.png","yuri.png"];

// chance for all images to be anime girls
const animeGirlsChance = 0.02;

// number of items to include in the table of contents
const tocLength = 10;

// frequency at which list items literally go away forever
const adiosFrequency = 15 * 1000;

// list of sites that beetles could possibly link to
const beetleLinks = [
  'https://fauux.neocities.org', // Wired Sound for Wired People
  'https://angusnicneven.com', // Terminal 00
  'https://heavensgate.com/misc/vt092996.htm', // Last Chance to Evacuate Earth
  'https://www.lingscars.com/', // Ling's cars
  'http://www.878help.com/steveschicken.htm', // Steve's Really Good Chicken
  'https://heckscaper.com/main.html', // Emma's Homepage
  'http://www.notepad.org' // Notepad.org
];

// chance for an add to pop up every .25s
const horzBeetleChance = 0.01;
const vertBeetleChance = 0.01;

// how long the banner ad stays up
const horzBeetleTimeout = 5 * 1000;
const vertBeetleTimeout = 6 * 1000;

// number of beetles
const numHorzBeetles = 16;
const numVertBeetles = 12;

// chance for Kjakman to become covert spy, using alias
const KjakmanDisappears = .02;

// points at which effects may start acting on elements
const beginExtend = 40; 					// ... list items
const budgeThreshold = 20; 				// ... percent throught document
const flickerThreshold = 30; 			// ... percent throught document
const flickerBudgeThreshold = 40; // ... percent throught document
const adiosThreshold = 50; 				// ... percent throught document
const ghostThreshold = 30;
const errorThreshold = 40;

// error config
const errorTimeout = 3000;
const errorChance = 0.1;

// ghost config
const ghostInterval = 250;
const ghostChance = 0.05;

// those him go UP
const zalgo_up = [
  '\u030d', /*     ̍     */		'\u030e', /*     ̎     */		'\u0304', /*     ̄     */		'\u0305', /*     ̅     */
  '\u033f', /*     ̿     */		'\u0311', /*     ̑     */		'\u0306', /*     ̆     */		'\u0310', /*     ̐     */
  '\u0352', /*     ͒     */		'\u0357', /*     ͗     */		'\u0351', /*     ͑     */		'\u0307', /*     ̇     */
  '\u0308', /*     ̈     */		'\u030a', /*     ̊     */		'\u0342', /*     ͂     */		'\u0343', /*     ̓     */
  '\u0344', /*     ̈́     */		'\u034a', /*     ͊     */		'\u034b', /*     ͋     */		'\u034c', /*     ͌     */
  '\u0303', /*     ̃     */		'\u0302', /*     ̂     */		'\u030c', /*     ̌     */		'\u0350', /*     ͐     */
  '\u0300', /*     ̀     */		'\u0301', /*     ́     */		'\u030b', /*     ̋     */		'\u030f', /*     ̏     */
  '\u0312', /*     ̒     */		'\u0313', /*     ̓     */		'\u0314', /*     ̔     */		'\u033d', /*     ̽     */
  '\u0309', /*     ̉     */		'\u0363', /*     ͣ     */		'\u0364', /*     ͤ     */		'\u0365', /*     ͥ     */
  '\u0366', /*     ͦ     */		'\u0367', /*     ͧ     */		'\u0368', /*     ͨ     */		'\u0369', /*     ͩ     */
  '\u036a', /*     ͪ     */		'\u036b', /*     ͫ     */		'\u036c', /*     ͬ     */		'\u036d', /*     ͭ     */
  '\u036e', /*     ͮ     */		'\u036f', /*     ͯ     */		'\u033e', /*     ̾     */		'\u035b', /*     ͛     */
  '\u0346', /*     ͆     */		'\u031a' /*     ̚     */
];

//those who go DOWN
const zalgo_down = [
  '\u0316', /*     ̖     */		'\u0317', /*     ̗     */		'\u0318', /*     ̘     */		'\u0319', /*     ̙     */
  '\u031c', /*     ̜     */		'\u031d', /*     ̝     */		'\u031e', /*     ̞     */		'\u031f', /*     ̟     */
  '\u0320', /*     ̠     */		'\u0324', /*     ̤     */		'\u0325', /*     ̥     */		'\u0326', /*     ̦     */
  '\u0329', /*     ̩     */		'\u032a', /*     ̪     */		'\u032b', /*     ̫     */		'\u032c', /*     ̬     */
  '\u032d', /*     ̭     */		'\u032e', /*     ̮     */		'\u032f', /*     ̯     */		'\u0330', /*     ̰     */
  '\u0331', /*    ̱     */      '\u0332', /*     ̲     */		'\u0333', /*     ̳     */		'\u0339', /*     ̹     */
  '\u033a', /*     ̺     */		'\u033b', /*     ̻     */		'\u033c', /*     ̼     */		'\u0345', /*     ͅ     */
  '\u0347', /*     ͇     */		'\u0348', /*     ͈     */		'\u0349', /*     ͉     */		'\u034d', /*     ͍     */
  '\u034e', /*     ͎     */		'\u0353', /*     ͓     */		'\u0354', /*     ͔     */		'\u0355', /*     ͕     */
  '\u0356', /*     ͖     */		'\u0359', /*     ͙     */		'\u035a', /*     ͚     */		'\u0323' /*     ̣     */
];
  
//those who ALWAY stay in the middle
const zalgo_mid = [
  '\u0315', /*     ̕     */		'\u031b', /*     ̛     */		'\u0340', /*     ̀     */		'\u0341', /*     ́     */
  '\u0358', /*     ͘     */		'\u0321', /*     ̡     */		'\u0322', /*     ̢     */		'\u0327', /*     ̧     */
  '\u0328', /*     ̨     */		'\u0334', /*     ̴     */		'\u0335', /*     ̵     */		'\u0336', /*     ̶     */
  '\u034f', /*     ͏     */		'\u035c', /*     ͜     */		'\u035d', /*     ͝     */		'\u035e', /*     ͞     */
  '\u035f', /*     ͟     */		'\u0360', /*     ͠     */		'\u0362', /*     ͢     */		'\u0338', /*     ̸     */
  '\u0337', /*     ̷     */		'\u0361', /*     ͡     */		'\u0489' /*     ҉_     */		
];

const all_zalgo = zalgo_down.concat(zalgo_mid).concat(zalgo_up);


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

// a variable to store the scroll progress! incredible!
let scrollProgress;
$(window).on('scroll', () => {
	scrollProgress = 100 * document.scrollingElement.scrollTop / document.body.scrollHeight;
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

// moves element e to a random position - works when e is 'position: absolute/fixed'
const relocate = (e) => {
	let newPos = {
		left: `${randInt(0, viewWidth-$(e).outerWidth())}px`,
		top: `${randInt(0, viewHeight-$(e).outerHeight())}px`
	};
	$(e).css(newPos);
}

const engulf = (text, level) => {
  newText = '';
  for (let i in text) {
    newText += text[i];
    if (chance(level/100)) {
      newText += pick(all_zalgo);
      for (let j=0; j<level; j+=5) newText += pick(all_zalgo);
    } 
  }
  return newText;
}

const removeZalgo = (text) => {
  newText = '';
  for (let i in text) {
    if (all_zalgo.includes(text[i])) continue;
    newText += text[i];
  }
  return newText;
}

const zalgify = () => {
  for (let i=1; i<=100; i+=1) {
    let yuri = $(`.zalgo-${i}`);
    for (let j=0; j<yuri.length; j++) {
      txt = $(yuri[j]).text();
      $(yuri[j]).text(engulf(txt, i));
    }
  }
}