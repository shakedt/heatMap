/**
 * Created by t on 8/13/2016.
 */
var  amountOfClicks = []; //stores the clicks and their location on the page


// save each click that is made on the screen
$(document).ready(function(){
    $(document).mousedown(function(e){
        amountOfClicks.push([e.pageX,e.pageY]);
    });

});
