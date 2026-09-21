// Exercise 1: Basic Click Events
const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function () {
    alert("You clicked me!");
});


const showtable = document.getElementById("showtable");

showtable.addEventListener("click", function () {
    const animalTable = document.getElementById("animalTable");
    document.getElementById("animalTable").style.display = "table";
;});

// Exercise 2: Event Listeners and DOM Manipulation

const exercise1 = document.getElementById("Exercise1"); 

exercise1.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});

exercise1.addEventListener("click", function () {
    exercise1.style.color = "red";
    exercise1.textContent = "Bye Bye Mouse";
});



// Exercise 3: Input Events
const feedback= document.getElementById("feedback");
const status = document.getElementById("status");
const charCount = document.getElementById("charCount");
const preview = document.getElementById("preview");

    //focus event
feedback.addEventListener("focus", function () {
    status.textContent = "You are now typing your feedback.";
    feedback.style.backgroundColor = "#e0f7fa"; 
});

    //blur event
feedback.addEventListener("blur", function () {
    status.textContent = "";
    feedback.style.backgroundColor = ""; 
});

    //input event
feedback.addEventListener("input", function () {
    charCount.textContent = feedback.value.length + "/200";
    preview.textContent = feedback.value;
});


// Exercise 4: Form Submission
const feedbackForm = document.getElementById("feedbackForm");
const submit= document.getElementById("submit");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (feedback.value.length < 10 || feedback.value.length > 200) {
        status.textContent = "Error: Feedback must be between 10 and 200 characters.";
    } else {
        status.textContent = "Thank you for your feedback!";
    }
    feedbackForm.reset(); 
    charCount.textContent = "0/200";
    preview.textContent = "";
});


//Exercise 5: Keyboard Events
const keyInfo = document.getElementById("keyinfo");
const keyBox = document.getElementById("keybox");
const keyCounter = document.getElementById("keyCounter");
const modifierInfo = document.getElementById("modifierInfo");

let keyPressCount = 0;

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyInfo.textContent ="Pressed key: " + event.key + " | Key code: " + event.code;
    keyBox.textContent = event.key;
    keyBox.style.fontSize = "45px";
    // colour change based on key pressed
    if (event.key == "r") {
        document.body.style.backgroundColor = "red";
    } else if (event.key == "g") {
        document.body.style.backgroundColor = "green";
    }   else if (event.key == "b") {
        document.body.style.backgroundColor = "blue";
    }   else {
        document.body.style.backgroundColor = "lightyellow";
    }
    // count key presses
    keyPressCount++;
    keyCounter.textContent = "Total key presses: " + keyPressCount;
    // check for modifier keys
    modifierInfo.textContent = "shift: " + (event.shiftKey ? "Yes" : "No") + " | ctrl: " + (event.ctrlKey ? "Yes" : "No") + " | alt: " + (event.altKey ? "Yes" : "No");
});

//Bonus Exercise: Google Maps

const locationButton = document.getElementById("locationButton");
const locationstatus = document.getElementById("locationstatus");

locationButton.addEventListener("click", function () {


    locationstatus.textContent = "Getting your location...";

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("Latitude:", lat);
            console.log("Longitude:", lon);

            const url = `https://www.google.com/maps?q=${lat},${lon}`;

            window.open(url, "_blank");
        },

        function (error) {
            locationstatus.textContent =
                "Could not get the location: " + error.message;
        }
    );
});