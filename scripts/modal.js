$(document).ready(function(){
	$(".contactButton").click(function(){
		$("#contactModal").css('display', 'grid');
	})

	$("#contactModal article img").click(function(){
		$("#contactModal").hide();
	})
})