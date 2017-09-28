$(document).ready(function(){
	console.log("ready");

	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	var loadImages=["url('../images/ben.jpg')", "url('../images/alex.jpg')", "url('../images/marcus.jpg')", "url('../images/jon.jpg')", "url('../images/band.jpg')"]
	var images=["url('images/ben.jpg')", "url('images/alex.jpg')", "url('images/marcus.jpg')", "url('images/jon.jpg')", "url('images/band.jpg')"]
	var currentBackground = 0;

	$([loadImages[0],loadImages[1],loadImages[2],loadImages[3], loadImages[4]]).preload();


	// my slideshow code
	function NextImage(){
		$("body").css("background-image", images[currentBackground]);
		currentBackground ++;
		if (currentBackground == 5){
			currentBackground = 0
		}
	}
	setInterval(NextImage, 2000);
	// end of my slideshow code

	$("img:first-of-type").click(NextImage);	
})