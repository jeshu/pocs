/**
 * Author : JeshuBrij
 * Date : 21-JULY-2015
 * The JavaScript code in this page is free software: 
 * you can redistribute it and/or modify it under the 
 * terms of the GNU General Public License (GNU GPL) 
 * as published by the Free Software Foundation, either 
 * version 3 of the License, or (at your option) any later
 * version.  The code is distributed WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU GPL for more details.
 **/

// update on zoom change as its also give resize event.
$(window).on("resize", function(evt) {
    $("#Logger").text("Zoom level | " + getZoom() +" %");
})

// to display zoom level in page
$("#Logger").text("Zoom level | " + getZoom() +" %");

// method to deduct zoom in desktop browsers.
function getZoom() {
    var zoom = 1;
    if ($.browser.mozilla && window.devicePixelRatio) { // as of now for FF and Ie-11 only devicePixelRatio works fine
        zoom = window.devicePixelRatio;
    } else if (window.screen.deviceXDPI) {
        zoom = window.screen.deviceXDPI / window.screen.logicalXDPI
    } else if ($.browser.chrome === true || $.browser.safari === true) { // for chrome this works fine.
        zoom = window.outerWidth / window.innerWidth
    }
    zoom = Math.round(zoom*100);
    return zoom;
}