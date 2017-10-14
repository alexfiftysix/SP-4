$(document).ready(function () {
    var modal = $('#contactModal');
    $(".contactButton").click(function () {
        modal.css('display', 'flex');
    });

    modal.find('article').find('img').click(function () {
        modal.hide();
    });

    $(document).keyup(function(e){
        if (e.keyCode === 27){
            modal.hide();
        }
    })
});