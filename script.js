//declarin' vars
var horn = $("audio")[0];
var buttonWrapper = $(".buttonWrapper");

//WATCHIN', WAITIN' TO GO HAM
//click faster for more noscope headshots
buttonWrapper.mousedown(function() {
  horn.currentTime = 0; //reset play time if re-clicked
  horn.play(); //GO HAM
});