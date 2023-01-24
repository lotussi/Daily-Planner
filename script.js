
$(document).ready(function() {
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        console.log (value);
        console.log(time);
   })
})
// retrieving value from local storage and puting the value in each corosponding time block
$("#hour-9 .description").val(localStorage.getItem("hour-9"))

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))

// Getting the current time and displaying on page
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format('dddd, MMMM, Do');
// looping through each time block and comparing timebloc against current hour and assiging the css class to time blocks
$(".time-block").each(function(){
    var presentHour = moment().hour()
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1])
    if(timeBlockHour < presentHour){
        $(this).addClass("past")
    }else if(timeBlockHour === presentHour){
        $(this).addClass("present")
    }else if(timeBlockHour > presentHour){
        $(this).addClass("future")
    }
})
