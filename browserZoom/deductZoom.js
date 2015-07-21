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