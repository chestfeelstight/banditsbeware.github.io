// configuration file for random numbers and things
// (should make it easier for anyone to tweak website behavior)

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

// chance for an add to pop up every .25s
const horzBeetleChance = 0.01;
const vertBeetleChance = 0.01;

// how long the banner ad stays up
const horzBeetleTimeout = 5 * 1000;
const vertBeetleTimeout = 6 * 1000;

// number of beetles
const numHorzBeetles = 12;
const numVertBeetles = 9;

// chance for Kjakman to become covert spy, using alias
const KjakmanDisappears = .02;

// points at which effects may start acting on elements
const beginExtend = 40; 					// ... list items
const budgeThreshold = 20; 				// ... percent throught document
const flickerThreshold = 30; 			// ... percent throught document
const flickerBudgeThreshold = 40; // ... percent throught document
const adiosThreshold = 50; 				// ... percent throught document
const ghostThreshold = 30;

// ghost config
const ghostInterval = 250;
const ghostChance = 0.05;