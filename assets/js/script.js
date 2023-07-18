// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Create variables that will be used
// Not called enough here? 
let currentTime = dayjs();

// There has got to be a better way than just making hour- the separator in split(), but it works.
let currentHour = 'hour-' + 9;
let testId = $("#"+currentHour).attr("id");
let test2 = parseInt(testId.split('hour-')[1]);
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
  // "this" refers to the 
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

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // Use jQuery to move up and down stack with .parent()
    // Add check to tell what hour it is an change block colors
    function checkTime(){
      // Create variable that will store the current hour. Day.js returns string so need to parse to int. Will make number manipulation easier if it is ever required. To make back a string use <variable>.toString(). Putting number inside () changes the base. 
      let currentHour = parseInt(dayjs().format('HH'));
      // variable to test
      //let currentHour = 10;

      // write code to call the rows that need to have color changed, .each() created a loop in jQuery that goes over each object with that specified class/id.
      $('.time-block').each(function() {
        // creates variable with a single number. $(this) returns object that was previously called by jQuery (.time-block in this case), .attr() returns named attribute in the object, split() cuts the attribute into an array with the spaces being whatever is in the (). [1] returns the 2nd item in the array.
        let rowHour = parseInt($(this).attr('id').split('hour-')[1]);
        // if else statement to change color of row based on the ID. Changes items in the DOM because of $
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
        console.log(this);
        console.log("Day.js number:")
        console.log(currentHour);
        console.log("Object ID hour number")
        console.log(rowHour);
      })
    };
    //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Can hard code for each saved code
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  // But what if I can make some sort of loop?
  for (let i = 9; i < 18; i++){
    let saveLocation = "hour" + i;
    let saveId = "#" + saveLocation + " .description";
    $(saveId).val(localStorage.getItem(saveLocation));
  }
  
  // Functions that try to check the time to change block colors so page does not have to be refreshed. Single threaded nature of JavaScript is hindering how often the save button can function. Is there a work around? 
  
  // function checkTime(){
  //   let secondCheck = dayjs().format('ss');
  //   console.log(secondCheck);
  //   console.log(dayjs().format('ss'));
  //   console.log('Ran checkTime, waiting for new hour');
  //   if (secondCheck < secondCheck > 10){
  //     setTimeout(checkTime, 1000);
  //   }else{
  //     setInterval(checkTime,10000);
  //   }
  // }
  // function checkTime2(){
  //   let timeNow = dayjs().format('HH');
  //   console.log('Time now is: ' + timeNow);
  //   console.log(dayjs().format('ss'));
  //   if (timeNow < 20 && timeNow > 9){
  //     setTimeout(checkTime2, 1000);
  //   }
  // }
   checkTime();
   console.log("checkTime ran");
  // checkTime2();
});

