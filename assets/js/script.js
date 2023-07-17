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
  //containerBtn.addEventListener
  // containerBtn2.addEventListener("click", function(event){
  //   var elememt = event.target;
  //   console.log(element);
  // });
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
  // checkTime();
  // checkTime2();
});

function saveNote(){
  let note = this.parentNode.id;
  let notation = this.previousElementSibling.value;
  console.log(note);
  console.log(notation);
  localStorage.setItem(note, notation);
}

$('.saveBtn').each(function(){
  $(this).on("click", saveNote)
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
for (let i = 9; i < 18; i++){
  let saveLocation = "hour" + i;
  let saveId = "#" + saveLocation + " .description";
  $(saveId).val(localStorage.getItem(saveLocation));
}