var horn = $("audio")[0];
var buttonWrapper = $(".buttonWrapper");

buttonWrapper.mousedown(function() {
  horn.currentTime = 0; //reset play time if re-clicked
  horn.play(); //GO HAM
});