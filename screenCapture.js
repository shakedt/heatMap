/**
 * Created by t on 8/13/2016.
 */
//<script src="html2canvas-master/dist/html2canvas.js"></script> mendtory for screen capture
    //a script to capture the scree using html2canvas
    //need to keep going over it to make sure how it works
    // also need to save the picture on the server side and not like this

    $('.element').css('position','initial'); // Change absolute to initial
$my_view = $('#my-view');
var useHeight = $('#my-view').prop('scrollHeight');
html2canvas($my_view[0], {
    height: useHeight,
    useCORS: true,
    allowTaint: true,
    proxy: "your proxy url",
    onrendered: function (canvas) {
        var imgSrc = canvas.toDataURL();
        var popup = window.open(imgSrc);
        $('.element').css('position','absolute');
    }
});