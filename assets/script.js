// Declare Global variables
var timeDisplayEl = $('#time-display');
// Declare Display fucntion
function displayTime() {
    var rightNow = moment().format("MMM Do YY");
    timeDisplayEl.text(rightNow);
}
// Declare Inputs fucntions
$(document).ready(function () {
    // Declare eventlistner savebutton 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Save inputs in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //Declare current number of hours.
        var timeNow = moment().hour();
        // Declare loop for time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Declare Statment for background indicators and compare inputs with time & colors
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Retreive Data from local Stroage upon saving
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})


// Handle displaying the time

setInterval(displayTime);
