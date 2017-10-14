$(document).ready(function () {
    var img = $('#storeWrapper').find('a').find('img');
    var thisImage = null;
    img.mouseenter(function(){

        thisImage = $(this).attr('src');
        var hover = thisImage.slice(0, -4);
        hover = hover + 'Hover.jpg';
        console.log(hover);
        $(this).attr("src", hover);
    });
    img.mouseleave(function(){
        console.log("out");
        $(this).attr("src", thisImage);
    })
});
