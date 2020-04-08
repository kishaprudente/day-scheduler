// the current day is displayed at the top of the calendar
var dateToday = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(dateToday);

console.log(moment().format("h:mm:ss a"));

// I am presented with timeblocks for standard business hours
var hours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "13PM",
  "14PM",
  "15PM",
  "PM",
  "5PM",
];
// get the hours from 9am - 5pm
// make a row for every hour from 9am - 5pm

hours.map((hour) => {
  var hourRow = $("<div>");
  hourRow.attr("class", "row hour");
  hourRow.text(hour);
  $(".time-block").append(hourRow);

  var timeNow = parseInt(moment().format("h"));
  var hourNow = parseInt(hour);

  console.log("time now", timeNow);
  console.log(parseInt(hour));
  //   console.log("hour", hour);

  if (hourNow === timeNow) {
    hourRow.addClass("present");
  } else if (hourNow <= timeNow) {
    hourRow.addClass("past");
  } else {
    hourRow.addClass("future");
  }
});

// WHEN I view the timeblocks for that day

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock

// THEN I can enter an event

// WHEN I click the save button for that timeblock

// THEN the text for that event is saved in local storage

// WHEN I refresh the page

// THEN the saved events persist
