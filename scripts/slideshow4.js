// Slideshow4 uses the img tags instead of the background-image property
$(window).on('load', function(){
	console.log("jQuery loaded");
	$('#img2').hide();
	
	// Variables which affect page experience
	var imgDelay = 5000;


	var images=["images/ben.jpg", "images/alex.jpg", "images/marcus.jpg", "images/jon.jpg", "images/band.jpg"]
	var nextImg = 1;

	// slideshow start
	function NextImage(){
		$('#img2').hide();
		$('#img2').attr("src", images[nextImg]);
		$('#img2').fadeIn(imgDelay / 3);

		console.log(nextImg);
		setTimeout(function(){
			$('#img1').attr("src", images[nextImg]);

			nextImg ++;
			if (nextImg == images.length){
				nextImg = 0;
			}
		}, imgDelay/3);
	}

	setInterval(NextImage, imgDelay);
	// slideshow end
})
