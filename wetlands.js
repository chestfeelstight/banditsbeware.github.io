// we must add icons to this list!   we have to
var iconArr = ["big_wood.png", "carl_T.png", "conical_frustum.png", "atop.png", "facebook.png", "fear.png", "random_walk.png", "x.png"];
function randomIcon() {
	var i = Math.floor(Math.random() * iconArr.length);
	document.getElementById("icon").setAttribute("href", "./icons/"+iconArr[i]);
}