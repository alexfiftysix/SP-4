console.log("helloo");

$(window).on('load', function(){
	console.log("loaded??");
	

	var images=["url('images/ben.jpg')", "url('images/alex.jpg')", "url('images/marcus.jpg')", "url('images/jon.jpg')", "url('images/band.jpg')"]
	var currentBackground = 1;

	// slideshow start
	function NextImage(){
		$("body").css("background-image", images[currentBackground]);
		currentBackground ++;
		if (currentBackground == 5){
			currentBackground = 0
		}
	}
	setInterval(NextImage, 3000);
	// slideshow end
})
