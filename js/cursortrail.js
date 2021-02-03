let mouse = { x: -1, y: -1 };
$(document).mousemove(function(event) { mouse.x = event.pageX; mouse.y = event.pageY; });
setInterval(() => {
	$("html").append(`<img style="position: absolute; pointer-events: none;" class="cursor-trail" src="./gifs/bg3.gif">`);
	$(".cursor-trail:last").css({'left': mouse.x, 'top': mouse.y});
	$(".cursor-trail:last").fadeOut(500);
	setTimeout(() => { $(".cursor-trail:first").remove(); }, 500);
}, 50);