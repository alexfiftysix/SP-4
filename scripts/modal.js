$(document).ready(function () {
    var modal = $('#contactModal');
    $(".contactButton").click(function () {
        modal.css('display', 'flex');
    });

    $("#contactModal article img").click(function () {
        modal.hide();
    });
});