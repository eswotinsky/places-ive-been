//business logic

function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeOfYear = $("input#new-timeOfYear").val();
    var inputtedNotes = $("input#new-notes").val();


    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-timeOfYear").val("");
    $("input#new-notes").val("");

  $(".place").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.location);
    $(".landmark").text(newPlace.landmark);
    $(".timeOfYear").text(newPlace.timeOfYear);
    $(".notes").text(newPlace.notes);

    });
  });
});
