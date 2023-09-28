var today = dayjs();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// we are appending text to p tag, call to day.js formating into month day year,
$(document).ready(function () {
  $("#currentDay").text(today.format("MMM D, YYYY hh:mmA"));
  var currentTime = dayjs().hour();
  console.log(currentTime);


// Pairing button to TEXTAREA, then storing in localStorage
// targeting class of save button inside html
var button = $(".saveBtn");
// event listener for jquery
button.on("click", function (event) {
  // cancels the event if it's cancellable
  event.preventDefault();
  // applying attribute to the id when clicked
  var buttonId = $(this).attr("id");
  // it's referencing the id that is in the same div as
  // our button, it's grabbing the text the user puts
  // in the textarea
  var textAreaField = $(this).siblings(".description").val();
  localStorage.setItem(buttonId, textAreaField);
  // Utilizies the localStorage user inputs
  // Gets ready to display them
  displayToPage();
});

displayToPage();

// declaring function displayToPage
function displayToPage() {
  // Loop through index (hours) checking to see if < 18 (5PM)
  for (var index = 9; index < 18; index++) {
    // getting index value from localStorage
    var gettingIndex = localStorage.getItem(index);
    // targeting each hour by it's id
    // then capturing the text the user inputs
    // refining that selection
    // based on current index value of textarea
    $("#" + index + "").text(gettingIndex);
  }
}

textAreaColour();

// displays past present future colours based upon
// following criteria
function textAreaColour() {
  // targeting textarea with colours
  var descriptionArea = $(".description");
  // making each textarea follow the same parameters
  descriptionArea.each(function () {
    // refers to id/hours given from html
    var hours = $(this).attr("id");
    // making conditional statements
    // for each possible situation
    if (currentTime > hours) {
      $(this).addClass("past");
    } else if (currentTime == hours) {
      $(this).addClass("present");
      $(this).remove("past");
    } else if (currentTime < hours) {
      $(this).addClass("future");
      $(this).remove("past");
      $(this).remove("present");
    }
  });
}
});