// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Create variables that will be used
// Not called enough here? 
let currentTime = dayjs();

// There has got to be a better way than just making hour- the separator in split(), but it works.
let testId = $("#hour-9").attr("id");
let test2 = testId.split('hour-');
console.log(testId);
console.log(test2);

$(function () {
  // Display current date at the top of the page

  $("#currentDay").text(dayjs().format('MM/DD/YYYY'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // Use jQuery to move up and down stack with .parent()
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
