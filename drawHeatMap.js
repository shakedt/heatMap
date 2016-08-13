/**
 * Created by t on 8/13/2016.
 */
//function to draw the heat map will move to its on page
function drawHeatMap(clicks){
    for (var i=0; i < clicks.length; i++){
        $('body').append("<div style='position: absolute; left: " + clicks[i][0] + "px; top:" + clicks[i][1] + "px; width: 4px; height: 4px; background-color: red;'></div>");
    };
};