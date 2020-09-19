//Create a function to dynamically display the block in broswer window. Do this by targeting the html element id directy using #currentDay 
// Create variable to store and loop through scheduler
//1st log date and time for reference 
// console.log(moment().format("dddd, MMMM Do"));
// console.log(moment().format("h:mm:ss a"));


// //Displays times in jumbotron
// var currentDay = document.querySelector("#current-day");
// currentDay.textContent = moment().format("dddd, MMMM Do");


// //Variables hooking to rest of the HTML elements on the page
var schedText = document.querySelector("textarea");
var schedDescrip = document.querySelector(".description");
var schedBlock = document.querySelector(".time-blocks");
var schedRow = document.querySelector(".row");
var schedHour = document.querySelector(".hour");

var schedPast = document.querySelector(".past");
var schedPresent = document.querySelector(".present");
var schedFuture = document.querySelector(".future");
var schedSaveBtn = document.querySelector(".saveBtn");

// // Click event to save text area content to localStorage
// //When the app opens, displ.ay content for each time block from localStorage
// // It can be opened with a loop (more effecient) or by targeting time block seperately

// //Change time block background color depending on the current hour (past, present, future)

// // If statement

var currentTime = moment().format("h");
console.log(currentTime);
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

var data = JSON.parse(localStorage.getItem("todoData"));



// localStorage.setItem("todoData", JSON.stringify(data));



// var businessHours = [9,10,11,12,13,14,15,16,17];


// console.log(typeof schedBlock);
// console.log(typeof businessHours);

// for (let i = 0; i < businessHours.length; i++) {
//     console.log(i);
// }
// var currentData = $("#currentDay");
// currentDate.text(moment().format("dddd, MMMMM Do"));

// // adding the inputs in local storage 
// $("#btn9").on("click", function (){
//     localStorage.setItem("hour-9", $("#9").val())
// });
// // $("#btn10").on("click", function (){
//     localStorage.setItem("hour-10", $("#10").val())
// });
// $("#btn11").on("click", function (){
//     localStorage.setItem("hour-11", $("#11").val())
// });
// $("#bt12").on("click", function (){
//     localStorage.setItem("hour-12", $("#12").val())
// });
// $("#btn13").on("click", function (){
//     localStorage.setItem("hour-13", $("#13").val())
// });
// $("#btn14").on("click", function (){
//     localStorage.setItem("hour-14", $("#14").val())
// });
// $("#btn15").on("click", function (){
//     localStorage.setItem("hour-15", $("#15").val())
// });

// init (); 
//initialize page 

// function userData(type) {
//     rowDiv.textContent = 
//     var info = document.getElementById("hour-9");
//     if (info !== null) {
//         $("#hour-9").text(localStorage.getItem("hour-9"))
//     }
//     function storeData10am() {
//         var info = document.getElementById("hour-10");
//         if (info !== null) {
//             $("#10").text(localStorage.getItem("hour-10"))
//         }
//     var info = localStorage.getItem("hour-9");
//     if (info !== null) {
//         $("#9").text(localStorage.getItem("hour-9"))
//     }
//     var info = localStorage.getItem("hour-9");
//     if (info !== null) {
//         $("#9").text(localStorage.getItem("hour-9"))
//     }
//     var info = localStorage.getItem("hour-9");
//     if (info !== null) {
//         $("#9").text(localStorage.getItem("hour-9"))
//     }
//     var info = localStorage.getItem("hour-9");
//     if (info !== null) {
//         $("#9").text(localStorage.getItem("hour-9"))
//     }
//     var info = localStorage.getItem("hour-9");
//     if (info !== null) {
//         $("#9").text(localStorage.getItem("hour-9"))
//     }
//     var info = localStorage.getItem("hour-9");
//     if (info !== null) {
//         $("#9").text(localStorage.getItem("hour-9"))
//     }

// }


//Alter properties with the const declaration 
//For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.

// const rows = document.getElementsByClassName ("row");






// var mydailyPlan = [{
//     id:
//     hour:
//     time:

// }]

// $(function () {

//     var hour = moment().hours();

//Moment.js date for top of page
// function getDate() 
// {
//         //make sure to use # to target specific element in html page
//         // //jquery method goes belows
//         // The jQuery .class selector finds elements with a specific class.
//         $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// };


// });

/* Create color coding dependent on the hour */
// Thinking about using past present and future to create the function to dynamically display color on specific row hour 

// Past will be greyed out if < current time 
// Present will be green 
// Future will be color red 


// Create a function to display the row colors based on current time of day. 

//Create the form and visuals for the scheduler body 
// myDay.forEach(function(thisHour) {
    //timeblocks will be created 
    // var hourROw = $("<form>")
