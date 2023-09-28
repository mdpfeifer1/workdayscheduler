
 var today = dayjs(); 

 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// we are appending text to p tag, call to day.js formating into month day year,
 $(document).ready(function() {
  $("#currentDay").text(today.format("MMM D, YYYY hh:mm"));
  var currentTime = dayjs().hour();
  console.log(currentTime);
});

// Pairing button to TEXTAREA, then storing in localStorage
// targeting class of save button inside html
var button = $('.saveBtn'); 
// event listener for jquery
  button.on('click', function (event) {
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
  }) 

  
    displayToPage(); 

    // declaring function displayToPage
    function displayToPage(){
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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //setItem

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //getItem
  // TODO: Add code to display the current date in the header of the page.
  // Day.js


// can add multiple keyzzzzzz


