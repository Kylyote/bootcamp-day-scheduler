// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // Create state variable that checks if the page 
  let hasCheckTimeRan = false;
  
  // Display current date at the top of the page
  $("#currentDay").text(dayjs().format('MM/DD/YYYY'));
  
  // Save function that returns the id of what was clicked by moving up the DOM.
  function saveNote(){
    let note = this.parentNode.id;
    let notation = this.previousElementSibling.value;
    console.log(note);
    console.log(notation);
    localStorage.setItem(note, notation);
  }
  // Attaches each() function to each item with .saveBtn so it is looped through. .on adds event listener since addEventListener doesn't work that well with jQuery. 
  $('.saveBtn').each(function(){
    $(this).on("click", saveNote)
  })

    // Add check to tell what hour it is an change block colors
    function checkTime(){
      // console.log("Has check time run before: " + hasCheckTimeRan);

      // Create variable that will store the current hour. Day.js returns string so need to parse to int. Will make number manipulation easier if it is ever required. To make back a string use <variable>.toString(). Putting number inside () changes the base. 
      let currentHour = parseInt(dayjs().format('HH'));
      // variable to test
      // let currentHour = Math.floor(Math.random() * 10) + 9;

      // write code to call the rows that need to have color changed, .each() created a loop in jQuery that goes over each object with that specified class/id.
      $('.time-block').each(function() {
        // creates variable with a single number. $(this) returns object that was previously called by jQuery (.time-block in this case), .attr() returns named attribute in the object, split() cuts the attribute into an array with the spaces being whatever is in the (). [1] returns the 2nd item in the array.
        // Using split in this way seems dirty.
        let rowHour = parseInt($(this).attr('id').split('hour-')[1]);
        // if else statement to change color of row based on the ID. Changes items in the DOM because of $. Needs to remove classes as there will be conflicts with styling as the hours progress. 
        if (rowHour < currentHour){
          $(this).addClass('past');
          $(this).removeClass('present');
          $(this).removeClass('future');
        } else if (rowHour === currentHour){
          $(this).removeClass('past');
          $(this).addClass('present');
          $(this).removeClass('future');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
        // Console logs to test is things are working.
        //console.log(this);
        //console.log("Day.js number: " + currentHour)
        //console.log("Object ID hour number is " + rowHour)
      })
      console.log("checkTime ran");
      if (hasCheckTimeRan !== true){
        hasCheckTimeRan = true;
        console.log("This is the first time checkTime has run.")
      } else {
        waitForHour();
        console.log("We need to wait again.");
      }
    };
  
  // Can hard code for each saved code
  // $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  // But what if I can make some sort of loop?
  for (let i = 9; i < 18; i++){
    let saveLocation = "hour-" + i;
    let saveId = "#" + saveLocation + " .description";
    $(saveId).val(localStorage.getItem(saveLocation));
  }
  
  // create variable for storing time till next hour. 
  let waitTime = 0;
  // Create waiting function that will check the time every hour
  function waitForHour(){
    // Do math so waitTime will have the time in minutes till the next hour
    waitTime = (60 - parseInt(dayjs().format('m'))) * 60000;
    // testing waitTime with seconds instead of minues
    // waitTime = (60 - parseInt(dayjs().format("s")) * 1000)
    // console.log("The time to wait is " + waitTime / 60000 + " minutes.");
    
    // Checks if checkTime has been run before, if so, waits for the minutes specified in waitTime
    if (waitTime === 0){
      checkTime;
      console.log("WaitTime was 0 and checkTime was called again.");
    } else {
      setTimeout(checkTime, waitTime);
    // console.log("waitTIme was not 0, and checkTime will run after " + waitTime / 60000 + " seconds.");
    }
  } 

  // Calls first function to set all the text colors and load the saved text. Then starts the time waiting function. 
  checkTime();
  waitForHour();
});