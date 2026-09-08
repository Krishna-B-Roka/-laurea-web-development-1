// STEP 1: Print text to the browser console is string ""

console.log("Hello World!");

// STEP 2: Variables

const userName = "krishna";
const favoriteAnimal = "Blue Elephant";

// Store text values in variables


// Print the variables to the console

console.log("My name is " + userName + " and my favorite animal is " + favoriteAnimal + ".");

// STEP 3: User interaction

// Display a pop-up message
alert("Welcome to the blue elephant club!");

// Ask the user for their name

const visitorName = prompt("What is your name?");

// Print the user's answer
console.log("Hello, " + visitorName + "!");
 
// Create a greeting using the user's answer
console.log("Hello, " + visitorName + "! Welcome to the blue elephant club!");

// Ask the user for their favorite animal
const favoriteAnimalInput = prompt("What is your favorite animal?");

// Create a sentence using both answers
console.log("Hello,"+ visitorName + "! It seems like you like " + favoriteAnimalInput + "!");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?
if (favoriteAnimalInput.toLowerCase() === "blue elephant") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + favoriteAnimalInput + ".");
}