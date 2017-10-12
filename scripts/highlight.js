$(document).ready(function () {
    var para = $('article p');
    console.log(para);

    for (var i, len = para.length; i < len; i++) {
        console.log(para[i]);
    }
});