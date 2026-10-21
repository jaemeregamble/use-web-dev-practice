console.log("JavaScript is connected!");
console.log("Hello CSC 2001!");
console.log(5+5);
console.log("My JavaScript file works.");
const studentName = "Jordan";
let points = 10;
const submitted = true;

console.log(studentName);
console.log(points);
console.log(submitted);


points = 15;
console.log(points);

const studentname = "Mere";
console.log(studentname);
points = 35;
console.log(points);
console.log(submitted);
const completed = false;
console.log(completed);

function welcomeUser() {
    console.log("Welcome to the Website!");
    
}
const message = document.getElementById("message")

console.log(message);
message.textContent = "JavaScript changed this!";

const brandNewMessage = document.getElementById("brandNewMessage");
brandNewMessage.textContent = "JavaScript should have changed this too!";

const button = document .getElementById("messageButton");

button.addEventListener("click", function() {
    message.textContent = 
    "You're officialy using JavaScript!";

});

