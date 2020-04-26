//calling today's date
var today = moment().format("MMM Do YYYY dddd");
$("#currentDay").text("Today is: " + today);
//color coding the blocks
var hourMoment = moment().hour();
var hour = parseInt(hourMoment);
var times;
var savedEvent = localStorage.getItem("schedule");

$(".description").each(function() {
    times = parseInt($(this).attr("data-time"));
    if (times === hour) {
        $(this).addClass("present");
     } else if (times < hour) {
        $(this).addClass("past");
     } else {
        $(this).addClass("future");
     }
     $(this).text(localStorage.getItem(times));
    console.log(localStorage.getItem(times));
    return times;
})

function addEvent(event) {
    event.preventDefault();
    alert("Saved");
    var eventDetail = $(this).prev().val();
    var eventTime = $(this).prev().attr("data-time");
    localStorage.setItem(eventTime,eventDetail);
    console.log(localStorage);
    console.log(eventDetail);
    
    return;
}

$(".saveBtn").on("click",addEvent)

// for loop through 9am ~ 5pm  || make HTML elements inside
// research "a" method in moment.js 

// coloring the boxes 
    // attach the style classes and see what happens 
//coding moment.js 
    //if moment().hour() === the block {addClass "present" }
    //if time block < moment.hour() {addClass "past"}
    //if time block > moment.hour() {addClass "future"}
// add click event to saveBTN 
// save the event in the designated text area
//local storage add event 