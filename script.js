$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        console.log(value);
        console.log(time);
    })
})
// retrieving value from local storage and puting the value in each corosponding time block
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-9"))
$("#hour-11 .description").val(localStorage.getItem("hour-9"))
$("#hour-12 .description").val(localStorage.getItem("hour-9"))
$("#hour-13 .description").val(localStorage.getItem("hour-9"))
$("#hour-14 .description").val(localStorage.getItem("hour-9"))
$("#hour-15 .description").val(localStorage.getItem("hour-9"))
$("#hour-16 .description").val(localStorage.getItem("hour-9"))
$("#hour-17 .description").val(localStorage.getItem("hour-9"))