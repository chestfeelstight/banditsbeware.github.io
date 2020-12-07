// we must add icons to this list!   we have to
var iconArr = ["big_wood.png", "carl_T.png", "conical_frustum.png", "atop.png", "facebook.png", "fear.png", "random_walk.png", "x.png"];
function randomIcon() {
	var i = Math.floor(Math.random() * iconArr.length);
	document.getElementById("icon").setAttribute("href", "./icons/"+iconArr[i]);
}

// turn 'element' into a random list item!!! wow, new feature.
function randomItem(element) {
 var lis = document.querySelector("#main-list").getElementsByTagName("li");
 var n = Math.floor(Math.random() * lis.length);
 element.innerHTML = lis[n].innerHTML;
}

function resetTitle(e) { e.innerHTML = "Post-Quarantine Bucket List"; }
