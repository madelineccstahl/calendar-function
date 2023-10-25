// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

const currentDate = new Date();
const currentHour = currentDate.getHours();
console.log(currentHour);
//^getting current time
let timeBlock;
let block;

timeBlock = document.querySelectorAll(".time-block")[0];
$(".time-block").each(function () {
  const className = timeBlock.className;
  const parts = $(this).attr("id").split("-");
  const hour = parseInt(parts[1]);
  
console.log(hour);
console.log(currentHour);

  if (hour < currentHour) {
    $(this).addClass("past");
  } else if (hour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
})
});
//^parsing the block's hour and comparing to current hour
//to apply CSS past, present, future class additions

//const saveButton = document.querySelector(".saveBtn");

const saveButtons = document.querySelectorAll(".saveBtn");

saveButtons.forEach(function(saveButton) {
    saveButton.addEventListener("click", function() {
        alert("Saved!");
        const timeBlockId = this.parentNode.id;
        const textAreaValue = $(this).siblings(".description").val();
        localStorage.setItem(timeBlockId, textAreaValue);
});
});
// ^improved from previous single save button; instead, loop through
//all save buttons so they all work
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
// OK!! TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(".time-block").each(function(block) {
    console.log($(this))
    const timeBlockId = $(this).attr("id");
   //  const textarea = block.querySelector(".description");
   const savedValue = localStorage.getItem(timeBlockId);
    console.log(timeBlockId);
     $(this).children(".description").val(savedValue);
   //  if (savedValue !== null) {
   //  textarea.value = savedValue;
   //  }
    });

  //
  // TODO: Add code to display the current date in the header of the page.