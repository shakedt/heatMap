/**
 * Created by t on 8/13/2016.
 */

var  windowSize = [];  // stores the windows size (including changing mid time)

// function that checks every time the window resize and pushes it to array
windowSize.push([window.innerHeight, window.innerWidth]);//save screen size on the first time
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        windowSize.push([window.innerHeight, window.innerWidth]);//**
    }, 500);
});

