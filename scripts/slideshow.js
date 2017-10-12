// Slideshow4 uses the img tags instead of the background-image property
$(window).on('load', function () {
    if ($(window).width() > 1079) {


        $('#img1').show();
        $('#img2').hide();
        $('body').css('background-image', 'none');

        // Variables which affect page experience
        var imgDelay = 7000;
        var images = ["images/ben.jpg", "images/alex.jpg", "images/marcus.jpg", "images/jon.jpg", "images/band.jpg"];

        var fadeTime = imgDelay/2;

        var nextImg = 1;

        // slideshow start
        function NextImage() {
            var img2 = $('#img2');
            img2.hide();
            img2.attr("src", images[nextImg]);

            img2.fadeIn(fadeTime);
            // console.log(nextImg);
            setTimeout(function () {
                $('#img1').attr("src", images[nextImg]);

                nextImg++;
                if (nextImg === images.length) {
                    nextImg = 0;
                }
            }, fadeTime);

        }

        setInterval(NextImage, imgDelay);
        // slideshow end
    }
});
