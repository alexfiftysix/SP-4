// Slideshow4 uses the img tags instead of the background-image property
$(document).ready( function(){
	console.log("jQuery loaded");
	$('#img2').hide();
	

	var images=["images/ben.jpg", "images/alex.jpg", "images/marcus.jpg", "images/jon.jpg", "images/band.jpg"]
	console.log(images.length);
	var nextImg = 1;
	var imgDelay = 3000;

	// slideshow start
	function NextImage(){
		$('#img2').hide();
		$('#img2').attr("src", images[nextImg]);
		$('#img2').fadeIn(imgDelay / 3);

		setTimeout(function(){
			$('#img1').attr("src", images[nextImg]);

			nextImg ++;
			if (nextImg == images.length){
				nextImg = 0;
			}
			console.log(nextImg);
		}, imgDelay/3);
	}

	setInterval(NextImage, imgDelay);
	// slideshow end
})
