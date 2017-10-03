console.log("helloo");

$(document).ready( function(){
	console.log("loaded??");
	$('#secondImage').hide();
	

	var images=["url('images/ben.jpg')", "url('images/alex.jpg')", "url('images/marcus.jpg')", "url('images/jon.jpg')", "url('images/band.jpg')"]
	var currentImg = 1;
	var currentBackground = 1;

	// slideshow start
	function NextImage(){
		if (currentBackground == 1){
			$("#secondImage").css("background-image", images[currentImg]);
			$('#secondImage').delay(1000).fadeIn(1500);
		} else{
			$("body").css("background-image", images[currentImg]);
			$('#secondImage').delay(1000).fadeOut(1500);
		}

		currentBackground = currentBackground * -1;
		currentImg ++;
		if (currentImg == 5){
			currentImg = 0
		}


	}
	setInterval(NextImage, 5000);
	// slideshow end
})
