// Exercise 1 – Developer Tools and Console

console.log("Hello, World!"); 
alert("Hello, World!");

//Exercise 2 – Variables

const userName = "krishna";
let  userAge = 25;
const favouriteanimal = "dolphin";

console.log("My name is " + userName + ", I am " + userAge + " years old, and my favourite animal is a " + favouriteanimal + ".");

//Exercise 3 – User Input

let  guestuser = prompt("What is your name?");

console.log("Hello, " + guestuser + "! Welcome to the JavaScript exercise.");

// Exercise 4 – Conditionals

let guestAge = prompt("How old are you?");

if (guestAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18");
}

//Exercise 5 – Functions

function greetUser(name) {
    console.log("Hello, " + name );
}

greetUser(guestuser);

//Bonus – Connect JavaScript to the Page

showMessage = () => {
    alert("Hello, " + guestuser + "! Welcome to the JavaScript exercise.");
}