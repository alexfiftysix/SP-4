$(document).ready(function(){
	

	function GoToPhoto(photo){
		// console.log("Hey");
		photo = "url('images/" + photo + "')"
		$("#background").css('background-image', photo);
	}

	function GoToAlex(){
		// console.log("Hey");
		$("#background").css('background-image', "url('images/alex.jpg')");
	}


	setTimeout(function(){GoToPhoto("alex.jpg")}, 2000);
	setTimeout(function(){GoToPhoto("jesusBen.jpg")}, 4000);

	setInterval(function(){
		$("#redBox").css("background-color", "blue")
	}, 2000);


});
