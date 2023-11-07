var video;

document.querySelector("#volume").innerHTML = "100%"

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

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9
	console.log(video.playbackRate); 
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.10
	console.log(video.playbackRate); 
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Video skipped")
	video.currentTime += 10; 
	console.log(video.currentTime)
        if (video.currentTime >= video.duration) { 
			console.log("restart")
            video.currentTime = 0;
			video.pause()
			console.log(video.currentTime)
        }
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school version applied")
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Old school version removed")
	video.classList.remove("oldSchool");
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Video Unmuted")
		video.muted = false;
		document.querySelector("#mute").innerHTML= "Mute"
	} else {
		console.log("Video Muted")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

var volumeSlider = document.querySelector("#slider");
volumeSlider.addEventListener("input", function() {
	video.volume = volumeSlider.value / 100;
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
});
