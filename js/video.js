var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

video = document.querySelector("#player1");

video.load()

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play();
}) 


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Stop Video")
	video.pause();
}) 