// the current day is displayed at the top of the calendar
var dateToday = moment().format("dddd, MMM Do YYYY");

$("#currentDay").text(dateToday);

// I am presented with timeblocks for standard business hours
var hours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

var schedule = {};

// make a row for every hour from 9am - 5pm
// get the hours from 9am - 5pm
hours.map((hour) => {
  var hourRow = $("<div>");
  var hourDisplay = $("<span>");
  var hourDescription = $("<textarea>");
  var saveBtn = $("<button>");

  hourRow.attr("class", "row");
  hourDisplay.attr("class", "hour");
  hourDescription.attr("class", "description");
  hourDisplay.text(hour);

  // WHEN I view the timeblocks for that day
  $(".time-block").append(hourRow);
  hourRow.append(hourDisplay);
  hourRow.append(hourDescription);

  var timeNow = parseInt(moment().format("HH"));
  var hourNow = parseInt(hour);

  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  if (hourNow === timeNow) {
    hourDescription.addClass("present");
  } else if (hourNow <= timeNow) {
    hourDescription.addClass("past");
  } else {
    hourDescription.addClass("future");
  }

  // WHEN I click into a timeblock
  // THEN I can enter an event

  // WHEN I click the save button for that timeblock
  saveBtn.attr("class", "saveBtn");
  saveBtn.text("Save");
  hourRow.append(saveBtn);

  saveBtn.on("click", function () {
    // THEN the text for that event is saved in local storage
    schedule.day = dateToday;
    schedule.time = hour;
    schedule.event = hourDescription.val();
    console.log(schedule);
    // localStorage.setItem("schedule", JSON.stringify(schedule));
  });

  // WHEN I refresh the page
  // THEN the saved events persist
  //   var lastSchedule = JSON.parse(localStorage.getItem("schedule"));
  //   hourDescription.text = lastSchedule.event;
});
