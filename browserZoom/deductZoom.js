$(window).on("resize", function(evt) {
	var zoom = Math.round(window.outerWidth/document.documentElement.clientWidth*100);
})

$("#link").on("click", function (evt) {
	var orgEvt = evt.originalEvent;
	console.log("screeno obj ", window.screen);
	console.log("page pos | ", orgEvt.pageX, orgEvt.pageY);
	console.log("screen pos | ", orgEvt.screenX, orgEvt.screenY);

})
$("#Logger").text(zoom + "  " +getZoom());
window.getZoom = function() {
    var zoom = 1;
    if($.browser.mozilla && window.devicePixelRatio) { // as of now for FF and Ie-11 only devicePixelRatio works fine
        zoom = window.devicePixelRatio;
    } else if(window.screen.deviceXDPI){
        zoom =  window.screen.deviceXDPI/window.screen.logicalXDPI
    } else if($.browser.chrome === true || $.browser.safari === true) { // for chrome this works fine.
        zoom = Math.round((window.outerWidth/window.innerWidth)*100)/100;   
    } 
    // else if(/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
    //     zoom =  Math.round(((document.documentElement.clientWidth) / window.innerWidth)*100) / 100;
    // }
    if(zoom >= 2) {
        zoom = 1
    }
    return zoom;
}