// configuration file for random numbers and things
// (should make it easier for anyone to tweak website behavior)

// list of icons - make sure the file is a .png!
const iconList = ["big_wood", "carl_T", "conical_frustum", "atop", "facebook", "fear", "random_walk", "x", "jeff"];

// fun double quotes game - quote characters
const quoteList = ["'","'","'",",","❟","‘","❜","⹂","‛","❛","'̶̛̗̪̗̼͍͒̉̐̒̄̀̾́̍̉̊̇̿̚’"];

// fun double quotes game - wave parameters
const minWaveLen = 10;
const maxWaveLen = 50;
const minWaves = 5;
const maxWaves = 50;

// pantsGoneWestern - list style types
const listStyleTypes = ["lower-greek", "georgian", "hebrew", "hiragana", "katakana", "telugu", "bengali", "urdu", "kannada", "arabic-indic"];

// pantsGoneWestern - chance to act
const westernChance = 0.05;

// e_x_t_e_n_d - range for number of letters to add
const extMin = 10;
const extMax = 20;

// e_x_t_e_n_d - range for speed (ms) of extension
const extMinSpeed = 100;
const extMaxSpeed = 50;

// e_x_t_e_n_d - chance to act
const extendChance = 0.005;

// budge - speed (ms) of budging
const budgeSpeed = 80;

// budge - range for number of budges
const budgeMinN = 1;
const budgeMaxN = 50;

// budge - range for margin adjustment (size of budge (px))
const budgeMin = 20;
const budgeMax = 60;

// budge - interval (ms) for selecting a random item to budge
const budgeInterval = 2000;

// flicker - speed (ms) of flicker
const flickerSpeed = 100;

// flicker - range for number of flickers
const flickerMinN = 1;
const flickerMaxN = 200;

// flicker - interval (ms) for selecting a random item to flicker
const flickerInterval = 2000;

// list of anime girls filenames
const animeGirls = ["rei.gif","rei.jpg","rei1.jpeg","rei.webp","rei.jpeg","asuka.gif","asuka1.png","asuka.png","asuka.jpg","chika.gif","chika.png","chika1.gif","chika1.png","faye.webp","faye.jpg","kaguya.gif","kaguya.jpg","misato.png","misato.jpg","misato1.jpg","mizuhara.gif","mizuhara.jpg","mizuhara.png","mizuhara1.png","monika.png","monika.webp","natsuki.gif","omedetou.gif","sailor.gif","usagi.png","usagi1.png","yuri.png"];

// chance for all images to be anime girls
const animeGirlsChance = 0.02;

// number of items to include in the table of contents
const tocLength = 10;

// frequency at which list items literally go away forever
const adiosFrequency = 15 * 1000;

// chance for an add to pop up every .25s
const bottomBeetleChance = 0.01;
const sideBeetleChance = 0.01;

// how long the banner ad stays up
const bottomBeetleTimeout = 5 * 1000;
const sideBeetleTimeout = 6 * 1000;

// chance for Kjakman to become covert spy, using alias
const KjakmanDisappears = 1;

// points at which effects may start acting on elements
const beginExtend = 20;
const beginBudge = 50;
const beginFlicker = 100;
const beginAdios = 20;
